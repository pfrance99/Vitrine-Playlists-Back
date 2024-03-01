'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
    playlistId: { type: String, required: true },
    title : { type: String, required: true },
    visibility : { type: Boolean, required: true }
});

const Playlists = mongoose.model('Playlists', playlistSchema);

/*  Retourne toutes les playlists de la DB
        PARAMS :
        # onlyvisible : bool / true : n'affiche que les playlists dont la visibility = true / false : affiche toutes les playlists
*/
const getAll = async onlyvisible => {
    var params = { $or: [{visibility: true}]};
    if(onlyvisible == false){ // Ajoute aussi les playlists qui sont a visibility : false
        params.$or.push({visibility: false});
    }
    return await Playlists.find(params).exec();
};

const getOne = async id => await Playlists.find({playlistId: id}).exec();

/*  Ajoute une nouvelle playlist en DB
        PARAMS :
        # id : String (id Spotify de la playlist)
        # title: String (titre de la playlist à afficher en db)
        # visible: bool (true ou false si on veut afficher la playlist ou non)
*/
async function addOne(id, title, visible){
    let newPlaylist = new Playlists({ playlistId: id, title: title, visibility: visible });
    await newPlaylist.save();
} 

module.exports = {getAll, getOne, addOne}; 