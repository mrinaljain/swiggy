import app from "express";
import {
  addRestaurant,
  getAllRestaurants,
} from "../controllers/restaurant_controller.js";

const router = app.Router();

router.get("", getAllRestaurants);
router.post("", addRestaurant);
export default router;
