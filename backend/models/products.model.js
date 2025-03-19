const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      minlength: [3, 'Product name must be at least 3 characters long']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price cannot be negative']
    },
    discounted_price: {
      type: Number,
      min: [0, 'Discounted price cannot be negative'],
      validate: {
        validator: function(value) {
          return value <= this.price;
        },
        message: 'Discounted price must be less than or equal to regular price'
      }
    },
    instock: {
      type: Boolean,
      required: [true, 'Stock status is required'],
      default: true
    },
    ram: {
      type: String,
      required: [true, 'RAM specification is required'],
      enum: {
        values: ["4GB", "8GB", "16GB", "32GB", "64GB"],
        message: 'RAM must be one of: 4GB, 8GB, 16GB, 32GB, or 64GB'
      }
    },
    screensize: {
      type: String,
      required: [true, 'Screen size is required'],
      min: [10, 'Screen size must be at least 10 inches'],
      max: [20, 'Screen size cannot exceed 20 inches']
    },
    category: {
      type: String,
     
      enum: {
        values: ['Gaming', 'Business', 'Student', 'Professional', 'Ultra-Portable'],
        message: 'Invalid laptop category'
      }
    },
    storage: {
        type: String,
        required: [true, 'Storage capacity is required'],
        enum: {
          values: ["128GB", "256GB", "512GB", "1TB"],
          message: 'Storage must be one of: 128GB, 256GB, 512GB, 1TB(1024GB), 2TB(2048GB), or 4TB(4096GB)'
        }
      },
    model: {
      type: String,
      required: [true, 'Model number is required'],
      trim: true
    },
    images: {
      type: [String],
      required: [true, "Images are required"]
    },
    brand: {
      type: String,
      required: [true, 'Brand name is required'],
      trim: true
    }
  }, {
    timestamps: true
  });
  
  const product = mongoose.model('product', productSchema);
  module.exports = product;

  


  
  // ... existing code ...