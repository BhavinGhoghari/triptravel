import express from "express";
import {
  getAllTours,
  getSingleTour,
  createTour,
  updateTour,
  deleteTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/tourController.js";
// import { verifyAdmin, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllTours);
router.get("/search", getTourBySearch);
router.get("/featured", getFeaturedTour);
router.get("/count", getTourCount);
router.get("/:id", getSingleTour);
router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);

export default router;
