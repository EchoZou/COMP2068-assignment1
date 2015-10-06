var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello', message: 'Mo Zou' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects');
});

router.get('/service', function(req, res, next) {
  res.render('service', { service1:'Web Development', service2: 'Interface Design', service3: 'Database Build'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { name:'Your name', email:'email', todo:'what I can do for u?' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});




module.exports = router;
