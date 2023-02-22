const router = require('express').Router();

let bookingSchema = require('../models/Booking');

// CREATE booking 
router.route('/create-booking').post((req, res, next) => {
  bookingSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ bookings
router.route('/').get((req, res) => {
  bookingSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single bookings
router.route('/edit-booking/:id').get((req, res) => {
  bookingSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update booking
router.route('/update-booking/:id').put((req, res, next) => {
  bookingSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('booking updated successfully !')
    }
  })
})

// Delete booking
router.route('/delete-booking/:id').delete((req, res, next) => {
  bookingSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;