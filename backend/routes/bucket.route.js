const express = require('express');
const app = express();
const recordRouter = express.Router();

let Buckets = require('../model/buckets');

/*recordRouter.route('/add-bucket').post((req, res, next) => {
  Buckets.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});*/

/*recordRouter.route('/get-buckets').get(async (req, res) => {
  try {
    const profiles = await Buckets.find().populate("location", "name");
    res.send(profiles);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error !");
  }
});*/

recordRouter.route('/get-buckets').get( (req, res) => {
  Buckets.find().populate("location").exec((error, data) => {
    if (error) {
      res.send(error);
    } else {
      res.json(data)
    }
  })
})

/*recordRouter.route('/get-buckets').get((req, res) => {
  Buckets.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})*/
/*
// Get single student
studentRoute.route('/read-student/:id').get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update student
studentRoute.route('/update-student/:id').put((req, res, next) => {
  Student.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
})

// Delete student
studentRoute.route('/delete-student/:id').delete((req, res, next) => {
  Student.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})*/

module.exports = recordRouter;
