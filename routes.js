var controllers = require('./controllers.js');
var router = require('express').Router();

// router.get('/', function(req, res) {
//   console.log('i have arrived');
//   res.send('Birds home page')
// });

router.get('/names', controllers.names.get);
router.post('/names', controllers.names.post);

module.exports = router;