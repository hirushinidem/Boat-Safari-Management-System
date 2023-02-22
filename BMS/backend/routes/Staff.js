// import express from 'express';
const router = require('express').Router();
// const router = express.Router();

let Staff = require('../models/staffModel');
// import Staff from '../models/staffModel.js';


//get all staff members
router.route('/view').get((req, res) => {
  // //changes
  //   if (!req.userId) return res.json({message : "Unauthenticated"}) 
    
    Staff.find()
        .then(Staff => res.json(Staff))
        .catch(err => res.status(400).json('Error: '+ err));
});

//get a single staff member
router.route('/view/member/').get((req, res) => {
  console.log(req.query)
  const { id } = req.query;
  Staff.findById(id)
      .then(Staff => res.json(Staff))
      .catch(err => res.status(400).json('Error: '+ err));
});

//adding staff
router.route('/add').post((req, res) => {
  const staffName = req.body.staffName;
  const nic = req.body.nic;
  const designation = req.body.designation;
  const phoneNo = req.body.phoneNo;
  const address = req.body.address;
  const jobType = req.body.jobType;
  const basicSalary = req.body.basicSalary;
  const allowances = (req.body.allowances);
  const deductions = (req.body.deductions);
  const hourlyRate = (req.body.hourlyRate);
  const noOfHours = (req.body.noOfHours);

  console.log(req.body);
     const newStaff = new Staff({
        staffName, nic, designation, phoneNo, address, jobType, basicSalary, allowances, deductions, hourlyRate, noOfHours
    });
    newStaff.save()
    .then(() => res.json('staff added !'))
    .catch (err => (console.log(err.message)))
});

//deleting staff member
  router.route('/delete/:id').delete((req, res) => {
    Staff.findByIdAndDelete(req.params.id)
      .then(() => res.json('staff deleted'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  //update staff member
  router.route('/view/member/:id').patch((req, res) => {
    const { id } = req.query;

    console.log(req.body);
    console.log('test');
    console.log(req.params);
    Staff.findById(req.params.id)
      .then(Staff => {
        Staff.staffName = req.body.staffName;
        Staff.nic = req.body.nic;
        Staff.designation = req.body.designation;
        Staff.phoneNo = req.body.phoneNo;
        Staff.address = req.body.address;
        Staff.jobType = req.body.jobType;
        Staff.basicSalary = Number(req.body.basicSalary);
        Staff.allowances = Number(req.body.allowances);
        Staff.deductions = Number(req.body.deductions);
        Staff.hourlyRate = Number(req.body.hourlyRate);
        Staff.noOfHours = Number(req.body.noOfHours);
  
        Staff.save()
          .then(() => res.json('Staff updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

  //calc net sal
  router.route('/view/member/calcNetSal/:id').get((req,res) =>{
    const { id } = req.query;

    console.log(req.body);
    console.log('test');
    console.log(req.params);
    Staff.findById(req.params.id)
      .then(Staff => {
        Staff.staffName = req.body.staffName;
        Staff.nic = req.body.nic;
        Staff.jobType = req.body.jobType;
        Staff.basicSalary = Number(req.body.basicSalary);
        Staff.allowances = Number(req.body.allowances);
        Staff.deductions = Number(req.body.deductions);
        Staff.hourlyRate = Number(req.body.hourlyRate);
        Staff.noOfHours = Number(req.body.noOfHours);
  
        Staff.save()
          .then(() => res.json('Staff updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;

  // export default router;