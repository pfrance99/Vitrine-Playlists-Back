'use strict';

const axios = require('axios');
const local = require('../local.js');
const utility = require('./utility.js');
const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

async function connectToDb(){
    await mongoose.connect('mongodb+srv://' + local.db.id + ':' + local.db.pass + '@' + local.db.url);
    console.log('connectés !');
};

async function getSpotifyToken() {
    let params = { 'grant_type': 'client_credentials', 'client_id': local.spotify.clientId, 'client_secret': local.spotify.clientSecret };
    try {
        let res = await axios.post('https://accounts.spotify.com/api/token', ...utility.formatHeaders(params));
        let content = await res.data;
        //Set en DB le nouveau token d'auth.
        local.spotify.authToken = content.access_token;
        return (content.access_token); 
    } catch (err) {
        console.error(err.message);
        return false;
    }
  }

module.exports = {getSpotifyToken, connectToDb};