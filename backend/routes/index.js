const express = require('express');
const apiRouter = require('./api');

const router = express.Router();
router.use('/api', apiRouter);

//http://localhost:8080/hello/world
router.get('/hello/world', function(req, res) {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.send('Hello World!');
  });

  module.exports = router;