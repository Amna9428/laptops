const Contact = require('../models/contact.model');

const sendMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in sendMessage:", error);
    res.status(500).json({ message: "Server error" });
  }
};
// Get all feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Contact.find({});

    return res.status(200).json({
      success: true,
      count: feedbacks.length,
      feedbacks: feedbacks
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

module.exports = { sendMessage, getAllFeedback};
