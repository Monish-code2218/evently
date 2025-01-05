// routes/eventRoutes.js

const express = require("express");
const router = express.Router();
const app = express();
const Event = require("../models/Event");

require('dotenv').config();
const bodyParser = require("body-parser");

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, } = process.env;
const {
    ApiError,
    CheckoutPaymentIntent,
    Client,
    Environment,
    LogLevel,
    OrdersController,
} = require("@paypal/paypal-server-sdk")



router.get("/getAll", async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/get/:id", async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.json(event);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/add", async (req, res) => {
    const event = new Event({
        _id: req.body._id,
        title: req.body.title,
        date: req.body.date,
        description: req.body.description,
        Price: req.body.Price,
        image: req.body.image,
        website: req.body.website,
    });
    try {
        const newEvent = await event.save();
        console.log(newEvent);
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.json({ message: "Event deleted" });
    } catch (error) {
        console.error("Error deleting event:", error);
        res.status(500).json({ message: error.message });
    }
});

router.put("/update/:id", async (req, res) => {
    const eventId = req.params.id;
   const{title, date, description, price,image} = req.body;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
z
        event.title = title;
        event.date = date;
        event.description = description;
        event.Price = price;
        event.image = image;

        await event.save();
        console.log(event);
        res.json(event);
    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});





  const client = new Client({
    clientCredentialsAuthCredentials: {
      oAuthClientId: PAYPAL_CLIENT_ID,
      oAuthClientSecret: PAYPAL_CLIENT_SECRET,
    },
    timeout: 0,
    environment: Environment.Sandbox,
    logging: {
      logLevel: LogLevel.Info,
      logRequest: {
        logBody: true,
      },
      logResponse: {
        logHeaders: true,
      },
    },
  });
  
  const ordersController = new OrdersController(client);
  
  /**
   * Create an order to start the transaction.
   * @see https://developer.paypal.com/docs/api/orders/v2/#orders_create
   */
  const createOrder = async (cart) => {
    const collect = {
      body: {
        intent: CheckoutPaymentIntent.Capture,
        purchaseUnits: [
          {
            amount: {
              currencyCode: "USD",
              value: req.body.price,
            },
          },
        ],
      },
      prefer: "return=minimal",
    };
  
    try {
      const { body, ...httpResponse } = await ordersController.ordersCreate(
        collect
      );
      // Get more response info...
      // const { statusCode, headers } = httpResponse;
      return {
        jsonResponse: JSON.parse(body),
        httpStatusCode: httpResponse.statusCode,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        // const { statusCode, headers } = error;
        throw new Error(error.message);
      }
    }
  };
  
  /**
   * Capture payment for the created order to complete the transaction.
   * @see https://developer.paypal.com/docs/api/orders/v2/#orders_capture
   */
  const captureOrder = async (orderID) => {
    const collect = {
      id: orderID,
      prefer: "return=minimal",
    };
  
    try {
      const { body, ...httpResponse } = await ordersController.ordersCapture(
        collect
      );
      // Get more response info...
      // const { statusCode, headers } = httpResponse;
      return {
        jsonResponse: JSON.parse(body),
        httpStatusCode: httpResponse.statusCode,
      };
    } catch (error) {
      if (error instanceof ApiError) {
        // const { statusCode, headers } = error;
        throw new Error(error.message);
      }
    }
  };
  
  router.post("/api/orders", async (req, res) => {
    try {
      // use the cart information passed from the front-end to calculate the order amount detals
      const { cart } = req.body;
      const { jsonResponse, httpStatusCode } = await createOrder(cart);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to create order." });
    }
  });
  
  router.post("/api/orders/:orderID/capture", async (req, res) => {
    try {
      const { orderID } = req.params;
      const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
      res.status(httpStatusCode).json(jsonResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
      res.status(500).json({ error: "Failed to capture order." });
    }
  });






module.exports = router;




