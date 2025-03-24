const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        trim: true,
        minlength: [2, 'Name must be at least 2 characters long'],
        maxlength: [50, 'Name cannot exceed 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
            'Please enter a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Password must be at least 6 characters long'],
        maxlength: [128, 'Password cannot exceed 128 characters'],
        match: [
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, 
            'Password must contain at least one number, one uppercase letter, one lowercase letter, and one special character'
        ]
    },
    role: {
        type: String,
        enum: {
            values: ['user', 'admin'],
            message: '{VALUE} is not a valid role'
        },
        default: 'user'
    },
    image: {
        type: String,
        default: 'default.jpg',
        validate: {
            validator: function(v) {
                return /\.(jpg|jpeg|png|gif)$/.test(v);
            },
            message: props => `${props.value} is not a valid image file format`
        }
    },
    status: {
        type: String,
        enum: {
            values: ['active', 'inactive'],
            message: '{VALUE} is not a valid status'
        },
        default: 'active'
    },

}, {
    timestamps: true
});

// Add a unique index with a custom error message for email

const User = mongoose.model('User', userSchema);

module.exports = User;
