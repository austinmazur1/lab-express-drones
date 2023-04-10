const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  try {
    const drones = await Drone.find();
    console.log(drones);
    res.render("drones/list", { drones });
  } catch (error) {
    next(error);
  }
});

router.get("/drones/create", async (req, res, next) => {
  try {
    const drones = await Drone.find();
    res.render("drones/create-form", { drones });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/create", async (req, res, next) => {
  const newDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  try {
    await Drone.create(newDrone);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  try {
    const { id } = req.params;
    const currentDrone = await Drone.findById(id);
    // console.log(currentDrone, id)
    res.render("drones/update-form", { currentDrone });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const updatedDrone = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  try {
    // console.log(updatedDrone)
    console.log(id);
    await Drone.findByIdAndUpdate(id, updatedDrone, { new: true });
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/delete", async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect("/drones");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
