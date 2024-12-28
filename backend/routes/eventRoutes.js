// routes/eventRoutes.js

const express = require("express");
const router = express.Router();
const app = express();
const Event = require("../models/Event");
const stripe = require('stripe')(process.env.STRIPE_SECRET);
require('dotenv').config();




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
    const { title, date, location, remind } = req.body;

    try {
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }

        event.title = title;
        event.date = date;
        event.location = location;
        event.remind = remind;

        await event.save();
        console.log(event);
        res.json(event);
    } catch (error) {
        console.error("Error updating event:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



router.post("/create-stripe-session", async (req, res) => {

    const session = await stripe.checkout.sessions.create({

      payment_method_types: ["card"],

      line_items: [

        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.item,
              description: "Event Ticket",
            },
            unit_amount: req.body.Price * 100,
          },
          quantity: 1,
          
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/failed",
     
    });
    
    res.json({ id: session.id });
  });








module.exports = router;




