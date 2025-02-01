const express = require('express');
const router = express.Router();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

router.use('/contacts', require('./contacts'));
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = router;