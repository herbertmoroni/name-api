const Contact = require('../models/contact');

// @swagger
// /contacts:
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @swagger
// /contacts/{id}:
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createContact = async (req, res) => {
      /*  #swagger.parameters['newContact'] = {
            in: 'body',
            description: 'Contact information.',
            required: true,
            schema: {
                firstName: "Erika",
                lastName: "Gois",
                email: "eripoli39@hotmail.com",
                favoriteColor: "Blue",
                birthday: "1976-05-02"
            }
    } */
  try {
    const contact = new Contact(req.body);
    const newContact = await contact.save();
    res.status(201).json({ _id: newContact._id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateContact = async (req, res) => {
    /*  #swagger.parameters['updateContact'] = {
            in: 'body',
            description: 'Updated contact information.',
            required: true,
            schema: {
                firstName: "Erika",
                lastName: "Gois",
                email: "eripoli39@hotmail.com",
                favoriteColor: "Blue",
                birthday: "1976-05-02"
            }
    } */
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};