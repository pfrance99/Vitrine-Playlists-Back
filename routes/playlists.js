'use strict';

var express = require('express');
var router = express.Router();
const auth = require('../utilities/auth.js')
const playlistsModel = require('../models/playlists.js')
 
/*  Retourne toutes les playlists
      QUERY :
      # visibility : Bool / true : affiche seulement les playlists visibles, false : ne tient pas compte de la visibilité
*/

router.get('/', async function(req, res, next) {
  var visibility = true;
  if(req.query.visibility && req.query.visibility === 'false') {
    visibility = false;  
  };
  console.log(visibility);
   var arrayPlaylists = await playlistsModel.getAll(visibility);
  // let token = await auth.getSpotifyToken();
  res.status(200).send('voilà vos playlists : ' + arrayPlaylists);
});

/*  Route pour créer une nouvelle playlist
      BODY :
      # playlistId : String (id Spotify de la playlist)
      # playlistTitle: String (titre de la playlist à afficher en db)
      # playlistIsVisible: bool (true ou false si on veut afficher la playlist ou non) // Par défaut true
*/

router.put('/', async function(req, res, next){
  let visibility = !!req.body.playlistIsVisible ? req.body.playlistIsVisible : true;
// console.log(req.body.playlistId);
// console.log(req.body.playlistTitle);
// console.log(visibility);
await playlistsModel.addOne(req.body.playlistId, req.body.playlistTitle, visibility);
  console.log('done');
  res.status(200).send('voilà votre token : ');
})

module.exports = router;