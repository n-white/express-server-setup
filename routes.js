var controllers = require('./controllers.js');
var router = require('express').Router();

// router.get('/', function(req, res) {
//   console.log('i have arrived');
//   res.send('Birds home page')
// });
router.route('/names')
	.get(controllers.names.get)
	.post(controllers.names.post);

module.exports = router;