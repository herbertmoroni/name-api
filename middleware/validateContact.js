const { body, param, validationResult } = require('express-validator');

// Utility function to validate MongoDB ObjectId
const isValidObjectId = (value) => {
  const objectIdPattern = /^[0-9a-fA-F]{24}$/;
  return objectIdPattern.test(value);
};

// Validation rules for contact data
const contactValidationRules = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('First name must be between 2 and 50 characters'),
    
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Last name must be between 2 and 50 characters'),
    
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
    
  body('favoriteColor')
    .trim()
    .notEmpty()
    .withMessage('Favorite color is required')
    .isLength({ min: 2, max: 30 })
    .withMessage('Favorite color must be between 2 and 30 characters'),
    
  body('birthday')
    .notEmpty()
    .withMessage('Birthday is required')
    .isISO8601()
    .withMessage('Invalid date format - use YYYY-MM-DD')
    .custom((value) => {
      const birthDate = new Date(value);
      const currentDate = new Date();
      if (birthDate > currentDate) {
        throw new Error('Birthday cannot be in the future');
      }
      return true;
    })
];

// Validation for ID parameter
const idValidationRules = [
  param('id')
    .custom((value) => {
      if (!isValidObjectId(value)) {
        throw new Error('Invalid contact ID format');
      }
      return true;
    })
];

// Middleware to handle validation errors
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  next();
};

module.exports = {
  contactValidationRules,
  idValidationRules,
  validateRequest
};