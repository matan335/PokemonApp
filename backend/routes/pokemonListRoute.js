var pokemonService = require('../services/pokemonService.js')

module.exports = (app) => {
    // Example new object
    app.get('/list', (req, res) => {
        var list = pokemonService.getList().pokemons
        res.json(list)
    })
}