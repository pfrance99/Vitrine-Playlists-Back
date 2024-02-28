'use strict';

// Vérifier si le fichier est bon.
function fileValidation(file, res) {
    if ( !file){
        res.status(400).send('Aucun fichier envoyé');
    } else if (file.mimetype != "text/csv") {
        res.status(400).send('Mauvais format de fichier'); 
    }
    return;
}

module.exports = {fileValidation};