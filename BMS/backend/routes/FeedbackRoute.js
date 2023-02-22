const express = require('express');
const router=express.Router();

let Feedback = require('../models/FeedbackModel');



router.route('/addfeedback').post((req, res) => {
    const Name = req.body.Name;
    const email = req.body.email;
    const Description =req.body.Description;
   
  

    const newFeedback= new Feedback({
        Name,
        email,
        Description,
    });
    newFeedback.save() .then(() => res.json('Customer added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

//view feedback
router.route("/Display").get((req,res)=>{
    Feedback.find().then((FeedbackRoute)=>{
        res.json(FeedbackRoute)
    }).catch(()=>{
        console.log(err)
    })
    })


 

  module.exports = router;
  