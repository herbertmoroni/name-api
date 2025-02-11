const Contact = require('../models/contact');
const asyncHandler = require('../middleware/asyncHandler');

exports.getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    success: true,
    data: contacts
  });
});

exports.getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  
  if (!contact) {
    return res.status(404).json({
      success: false,
      error: {
        message: 'Contact not found'
      }
    });
  }

  res.status(200).json({
    success: true,
    data: contact
  });
});

exports.createContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);

  res.status(201).json({
    success: true,
    data: {
      _id: contact._id
    }
  });
});

exports.updateContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  
  if (!contact) {
    return res.status(404).json({
      success: false,
      error: {
        message: 'Contact not found'
      }
    });
  }
  
  res.status(200).json({
    success: true,
    data: contact
  });
});

exports.deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  
  if (!contact) {
    return res.status(404).json({
      success: false,
      error: {
        message: 'Contact not found'
      }
    });
  }
  
  res.status(200).json({
    success: true,
    data: null
  });
});
