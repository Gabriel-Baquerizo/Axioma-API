import { Router } from "express";
import { getRestaurants, postRestaurants, patchRestaurants, deleteRestaurants, getARestaurant } from "../controllers/restaurants.controller.js";

const router = Router();

router.get('/restaurantes', getRestaurants)

router.get('/restaurantes/:id', getARestaurant)

router.post('/restaurantes', postRestaurants)

router.patch('/restaurantes/:id', patchRestaurants)

router.delete('/restaurantes/:id', deleteRestaurants)

export default router;