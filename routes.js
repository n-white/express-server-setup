var controllers = require('./controllers');
var router = require('express').Router();

router.get('/names', controllers.names.get);
router.post('/names', controllers.names.post);
// router.get('/places', controllers.places.get);
// router.post('/places', controllers.places.post);

module.exports = router;