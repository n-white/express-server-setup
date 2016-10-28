var controllers = require('./controllers.js');
var router = require('express').Router();

// router.get('/', function(req, res) {
//   console.log('i have arrived');
//   res.send('Birds home page')
// });
router.route('/postarticle')
	.post(controllers.article.postArticle);

router.route('/getarticle')
	.post(controllers.article.getArticle);

module.exports = router;

	// .get(controllers.phraseQuery.getPhrase)