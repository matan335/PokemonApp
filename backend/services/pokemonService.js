var axios = require('axios')
var fs = require('fs');
var jf = require('jsonfile')
var path = require('path');

module.exports = {
    query
}

var count = 0
function query() {
    axios(`https://pokeapi.co/api/v2/pokemon/`)
        .then(res => res.data)
        .then(resData => {
            resData.results.forEach((pokemonListItem, i) => {
                axios(pokemonListItem.url)
                    .then(subRes => subRes.data)
                    .then(pokemonData => {
                        if (i === resData.results.length - 1) console.log('this is the last pokemon !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                        _createJSON(pokemonData)
                    })
                    .catch(() => console.log('Error', count++))
            });
        })
        .catch(() => console.log('Error', count++))
}

function _createJSON(pokemonData) {
    var fileName = './jsons/pokemon-' + pokemonData.name + '.json'
    fs.stat(fileName, function (err, stat) {
        // if (err == null) {
        // file exist
        // } else if (err.code == 'ENOENT') {
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