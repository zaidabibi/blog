var express = require('express');
var router = express.Router();
//can import code directly from finalmaybecompressed
var Posts =require('../db.json');
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',posts:Posts.posts });
});
/* GET home page. */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express' });
});
/* GET archive page. */
router.get('/archive', function(req, res, next) {
  res.render('archive', { title: 'Express',posts:Posts.posts});
});
/* GET create  page. */
router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Express',posts:Posts.posts});
});
// /* GET create  page. */
// router.get('/view/:id', function(req, res, next) {
//   request:({
//   url: "http://localhost:8000/posts/ req.params.id"
//   method: "GET",
// )}
//   res.render('view', { title: 'Express', posts: JSON.parse.body});
// });

router.get('/view/:id', function(req, res, next) {
    //make a post request to our database
    request({
    uri: "http://localhost:8000/posts/" + req.params.id,
    method: "GET",
    }, function(error, response, body) {
        console.log(JSON.parse(body));
        //send a response message
        res.render('view', {posts: JSON.parse(body)});
    });
})
module.exports = router;
