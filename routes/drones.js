const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone.model')

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find()
    console.log(drones)
    res.render('drones/list', { drones })
  } catch (error) {
    next(error);
  }
});

router.get('/drones/create', async (req, res, next) => {
  try {
    const drones = await Drone.find()
    res.render('drones/create-form', { drones })
  } catch (error) {
    next(error);
  }
});

router.post('/drones/create', async (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };
  await Drone.create(newDrone);
  res.render('drones/list')
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
