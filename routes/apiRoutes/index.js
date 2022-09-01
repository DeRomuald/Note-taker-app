const router = require('express').Router();

const notetakerRoutes = require('../apiRoutes/notetakerRoutes');
router.use(notetakerRoutes);

module.exports = router;