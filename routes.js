var router = require('express').Router();

router.get('/names', controller.names.get);
router.post('/names', controller.names.post);
router.get('/places', controller.places.get);
router.post('/places', controller.places.post);

module.exports = router;