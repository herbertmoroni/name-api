
const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsController');
const { contactValidationRules, idValidationRules, validateRequest } = require('../middleware/validateContact');

router.get('/', contactsController.getAllContacts);
router.get('/:id', idValidationRules, validateRequest, contactsController.getContactById);
router.post('/', contactValidationRules, validateRequest, contactsController.createContact);
router.put('/:id', [...idValidationRules, ...contactValidationRules], validateRequest, contactsController.updateContact);
router.delete('/:id', idValidationRules, validateRequest, contactsController.deleteContact);

module.exports = router;