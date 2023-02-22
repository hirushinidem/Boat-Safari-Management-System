const express = require('express');
const Driver = require('../models/boatdriver');
//const boatdriver = require('../models/boatdriver');
let BoatDriver = require('../models/boatdriver');

const router = express.Router();

/*router.get("/",(req,res)=>{
    res.json({mssg:"Get all..."})
})*/

//adding driver

router.route('/add').post((req, res) => {
    const Name = req.body.Name ;
    const age = Number(req.body.age);
    const NIC = req.body.NIC ;
    const mobile =Number(req.body.mobile) ;
    const BID = req.body.BID ;
    
  
    const newDriver = new BoatDriver({
      Name,
      age,
      NIC,
      mobile,
      BID
      
    });
  
    newDriver.save()
    .then(() => res.json('driver added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

//getting drivers

router.route("/view").get((req,res)=>{

    BoatDriver.find().then((drivers)=>{

        res.json(drivers)

    }).catch(()=>{
        console.log(err)
    })

})

//getting drivers by userID

router.route("/get/:id").get(async (req, res)=>{
  let userId = req.params.id;
  const driverOne = await Driver.findById(userId)
    .then((drivers)=>{
      res.status(200).send({status: "Salary Sheet Fetched", drivers})
    }).catch((err)=>{
          console.log(err.message);
          res.status(500).send({status: "Error with get salary sheet",error:err.message});
      
  })
})


       // delete driver

router.route('/delete/:id').delete((req, res) => {
    BoatDriver.findByIdAndDelete(req.params.id)
      .then(() => res.json('driver deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  //update driver
  
  router.route('/update/:id').put((req, res) => {
    BoatDriver.findById(req.params.id)
      .then(boatdriver => {
        boatdriver.Name = req.body.Name;
        boatdriver.age = req.body.age;
        boatdriver.NIC = req.body.NIC ;
        boatdriver.mobile =Number(req.body.mobile) ;
        boatdriver.BID = req.body.BID ;
  
        boatdriver.save()
          .then(() => res.json('Boat driver updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
module.exports = router;