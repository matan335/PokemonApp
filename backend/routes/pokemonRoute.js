const pokemonService = require('../services/pokemonService');
var fs = require('fs');
var jf = require('jsonfile')
var file = 'example.json'

module.exports = (app) => {
    // Example new object
    app.post('/getNewJson', (req, res) => {
        const pokemons = req.body;
        console.log('pokemons got:',pokemons)
        // var found
        // Read the file
        // jf.readFile(file, function (err, obj) {
        //     // Loop through all the objects in the array
        //     for (i = 0; i < obj.length; i++) {
        //         // Check each id against the newThing
        //         if (obj[i].id !== data.id) {
        //             found = false;
        //             console.log('thing ' + obj[i].id + ' is different. keep going.');
        //         } else if (obj[i].id == data.id) {
        //             found = true;
        //             console.log('found it. stopping.');
        //             break;
        //         }
        //     }
        //     // if we can't find it, append it to the file
        //     if (!found) {
        //         console.log('could not find it so adding it...');
        //         fs.appendFile(file, ', ' + JSON.stringify(data) + ']', function (err) {
        //             if (err) throw err;
        //             console.log('done!');
        //         });
        //     }
        // })
    });

    // List of users


    // Single user by ID
    // app.get('/user/:userId', (req, res) => {
    //     const userId = req.params.userId;
    //     return userService.getById(userId)
    //         .then(user => res.json(user))
    //         .catch(err => console.log('An error accord while querying user data.', err));
    // });

    // // Add user
    // app.post('/user', (req, res) => {
    //     const userData = req.body;
    //     userService.addUser(userData.user)
    //         .then(user => res.json(user))
    //         .catch(err => console.log('An error accord while creating new user.', err));
    // });

    // // Update user
    // app.put('/user/:userId', (req, res) => {
    //     const user = req.body;
    //     userService.updateUser(user)
    //         .then(user => res.json(user))
    //         .catch(err => console.log('An error accord while saving user data.', err));
    // });

}
