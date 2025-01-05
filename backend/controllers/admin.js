const Event = require('../models/Event');

const getallevents = async(req,res)=>{
    try{

        const events = await Event.find();
        console.log(events);
        if(!events || events.length === 0){
            return res.status(404).json({message:"No events found"});
        }
       return
        res.status(200).json(events);


    }catch(error){
        console.log(error);
    }

}


module.exports = {getallevents};