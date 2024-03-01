'use strict';

// Faire tous les appels de fonction vers l'API Spotify

// getPlaylists

const axios = require('axios');
const local = require('../local.js');
const utility = require('./utility.js')

//Retourne un Array avec toutes les playlists et leurs informations
// async function getAllPlaylists(){

// }

async function getPlaylistData(playlistId) {

    //appel DB pour récupérer la liste d'ids toutes les playlists qui sont en visibility: true
    //Retourne un array avec tous les playlistsId à aller chercher

    try {
        let res = await axios.get('https://accounts.spotify.com/api/playlists', ...utility.formatHeaders({}));
        let content = await res.data;
        return (content.access_token); 
    } catch (err) {
        console.error(err.message);
        return false;
    }
  }




// module.exports = {fileValidation};