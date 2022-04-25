var express = require('express');
var router = express.Router();
var Document= require('../model/document');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Document page');
});


router.get('/list', function(req, res, next) {
	
	Document.find(function(err,data){
		if (err) throw err;
		res.json(data);
	});
});

router.get('/addform', function(req, res, next) {
  res.render("addform.twig");
});

router.post('/addaction', function(req, res, next) {
var d =new Document({
	Titre:req.body.titre,
	Description:req.body.description,
	Format:req.body.format
});
d.save
console.log('ajout effectuè avec succés');
res.redirect('/document/show')
});

module.exports = router;
