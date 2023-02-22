const router = require('express').Router();

let Payment = require('../models/paymentModel');

//read Payment
router.route('/').get((req, res) => {
    Payment.find()
        .then(Payment => res.json(Payment))
        .catch(err => res.status(400).json('Error: '+ err));
});

//adding Payment
router.route('/add').post((req, res) => {
    const Booking = req.body.Booking;
    const Amount = Number(req.body.Amount);
    const Discount = Number(req.body.Discount);
    const Paid = Number(req.body.Paid);
    const Method = req.body.Method;
    
      
    const newPayment = new Payment({
      Booking,
      Amount,
      Discount,
      Method,
      Paid,
    });
    newPayment.save()
    .then(() => res.json('payment added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

//delete payment
  router.route('/delete/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Payment refunded.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

//get payment by ID
router.route("/get/:id").get(async (req, res)=>{
  let payId = req.params.id;
  const paymentOne = await Payment.findById(payId)
    .then((payment)=>{
      res.status(200).send({status: "Payment Fetched", payment})
    }).catch((err)=>{
          console.log(err.message);
          res.status(500).send({status: "Error with payment fetch",error:err.message});
      
  })
})

//update payment
router.route('/update/:id').post((req, res) => {
   Payment.findById(req.params.id)
     .then(Payment => {
       Payment.Booking = req.body.Booking;
       Payment.Amount = Number(req.body.Amount);
       Payment.Discount = Number(req.body.Discount);
       Payment.Paid = Number(req.body.Paid);
       Payment.Method = req.body.Method;
       //save payment to database and catch errors if any
       Payment.save()
         .then(() => res.json('Payment updated!'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
 module.exports = router;