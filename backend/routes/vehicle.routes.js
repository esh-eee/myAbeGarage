//import the express module
const express = require("express");
//create a new router
const router = express.Router();
//import authMiddleware
const authMiddleware = require("../middlewares/auth.middleware");
//import the vehicle controller
const vehicleController = require("../controllers/vehicle.controller");

//create a route to add a new vehicle
router.post(
  "/api/add-vehicle",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  vehicleController.createVehicle
);

// Route to delete a vehicle by its ID
router.delete(
  "/api/vehicle/delete/:vehicle_id",
  [authMiddleware.verifyToken, authMiddleware.isAdmin],
  vehicleController.deleteVehicle
);
module.exports = router;