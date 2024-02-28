'use strict';

var express = require('express');
var router = express.Router();
const auth = require('../utilities/auth.js')
 
/* GET users listing. */
router.get('/', async function(req, res, next) {
  let token = await auth.getSpotifyToken();
  res.status(200).send('voilà votre token : ' + token);
});   

module.exports = router;
