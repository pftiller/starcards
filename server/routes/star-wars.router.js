const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const favoriteSchema = require('../modules/favorite.schema');

let Favorite = mongoose.model('Favorite', favoriteSchema);

// GET 
router.get('/', (req, res) => {
    Favorite.find({}, (error, storedFavorite) => {
        if (error) {
            console.log('error: ', error);
            res.sendStatus(500);
        } else {
            console.log('found: ', storedFavorite);
            res.send(storedFavorite);
        }
    }); 
}); 

// POST
router.post('/', (req, res) => {
    console.log('new entry to be added: ', req.body);
    let newFavorite = new Favorite(req.body);
    newFavorite.save( (error, newStoredFavorite) => {
        if (error) {
            console.log('error: ', error);
            res.sendStatus(500);            
        } else {
            console.log('success: ', newStoredFavorite);            
            res.sendStatus(201);
        }
    }); 
    
}); 

// DELETE
router.delete('/:id', (req, res) => {
    let favoriteId = req.params.id;
    Favorite.findByIdAndRemove(
        {"_id": favoriteId},
        // function(error, removed) 
        (error, removedDocument) => {
            if (error) {
                console.log('error on remove: ', error);
                res.sendStatus(500);
            } else {
                console.log('Document we removed: ', removedDocument);
                res.sendStatus(200);
            }
        }
    )

});


module.exports = router;