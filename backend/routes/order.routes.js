const express = require("express");
// const upload = require("../helpers/ImageUpload");

const orderRouter = express.Router();
const  { createOrder, getOrdersByUserId, getAllOrders} = require("../controllers/order.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");


orderRouter.post("/create", authMiddleware, createOrder);
orderRouter.get('/user-orders', authMiddleware, getOrdersByUserId);
orderRouter.get('/all-orders', getAllOrders);
// userRouter.post("/delete", Login);


module.exports = orderRouter;