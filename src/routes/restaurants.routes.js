import { Router } from "express";
import { getRestaurants, postRestaurants, patchRestaurants, deleteRestaurants, getARestaurant } from "../controllers/restaurants.controller.js";

const router = Router();

router.get('/locales', getRestaurants)

router.get('/locales/:id', getARestaurant)

router.post('/locales', postRestaurants)

router.patch('/locales/:id', patchRestaurants)

router.delete('/locales/:id', deleteRestaurants)

export default router;