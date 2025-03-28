// routes/contactRoutes.js
const express = require("express");
const contactRouter = express.Router();
const  { sendMessage, getAllFeedback } = require("../controllers/contact.controller");


contactRouter.post('/contact', sendMessage);
contactRouter.get('/feedback', getAllFeedback);


module.exports =  contactRouter ;
