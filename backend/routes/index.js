const express = require('express');

const router = express.Router();

//https://localhost/8080/hello/world
router.get('/hello/world', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
  });

  module.exports = router;