var axios = require('axios')
var fs = require('fs');
var jf = require('jsonfile')
var path = require('path');

module.exports = {
    getList,
    getByName

}

function getList() {
    return require('../../frontend/src/jsons/pokemonList.json')
}

function getByName(pokemonName) {
    return require(`../../frontend/src/jsons/pokemon-${pokemonName}.json`)
}

function query() {
    var pokemonList = [];
    axios(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => res.data)
        .then(resData => {
            resData.results.forEach((pokemonListItem, i) => {
                pokemonList.push(pokemonListItem.name)
                if (i === resData.results.length - 1) {
                    console.log('this is the last pokemon !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                    _createPokemonList(pokemonList)
                }

            })
        })
        .catch(() => console.log('Error'))
}

function _createJSON(pokemonData) {
    var fileName = './jsons/pokemon-' + pokemonData.name + '.json'
    fs.stat(fileName, function (err, stat) {
        if (err && err.code == 'ENOENT') {
            // file does not exist
            console.log('add new pokemon', pokemonData.name)
            fs.writeFile(fileName, JSON.stringify(pokemonData), function (err) {
                if (err) {
                    console.log('error has ecoured in pokemon', pokemonData.name, err)
                }
                else console.log('The "data to append" was appended to file!');
            })

        }
    });

}

function _createPokemonList(pokemonList) {
    console.log('pokemonList.length', pokemonList.length)
    var filePath = '../frontend/src/jsons/pokemonList.json';
    var json = {}
    json.pokemons = pokemonList

    fs.writeFile(filePath, JSON.stringify(json), function (err) {
        if (err) {
            console.log('error has ecoured in pokemon', pokemonData.name, err)
        }
        else console.log('The "data to append" was appended to file!');
    })


}