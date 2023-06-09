import { Router } from "express";
import { OrderController } from "../controllers/index.js";

/* 
Order Router
*/
const router = Router();
const orderController = new OrderController();

router.route("/").get(orderController.getOrder);

export default router;
