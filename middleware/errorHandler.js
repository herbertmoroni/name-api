const mongoose = require('mongoose');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Mongoose validation error
  if (err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'Validation Error',
        details: Object.values(err.errors).map(error => ({
          field: error.path,
          message: error.message
        }))
      }
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      error: {
        message: 'Duplicate Entry',
        details: {
          field: Object.keys(err.keyPattern)[0],
          message: `A contact with this ${Object.keys(err.keyPattern)[0]} already exists`
        }
      }
    });
  }

  // Mongoose CastError (invalid ObjectId)
  if (err instanceof mongoose.Error.CastError) {
    return res.status(400).json({
      success: false,
      error: {
        message: 'Invalid ID Format',
        details: {
          field: err.path,
          message: 'The provided ID is not valid'
        }
      }
    });
  }

  // Default error
  return res.status(500).json({
    success: false,
    error: {
      message: 'Internal Server Error',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }
  });
};

module.exports = errorHandler;