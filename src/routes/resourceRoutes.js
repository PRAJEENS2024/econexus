const express = require('express');
const resourceController = require('../controllers/resourceController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Protect all routes below this line
router.use(authMiddleware.protect);

router
  .route('/')
  .get(resourceController.getAllResources)
  .post(resourceController.createResource);

module.exports = router;