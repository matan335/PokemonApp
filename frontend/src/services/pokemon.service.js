import axios from 'axios'
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/getNewJson'
    : '//localhost:3000/getNewJson';

function createPokemonData(pokemons) {
    var copy = JSON.parse(JSON.stringify(pokemons))
    console.log('sending to back', copy)
    copy.forEach(pokemon => {
        //todo fix payload too large
        // axios.post(`${BASE_URL}`, { data: _observerClean(pokemon) })
        axios.post(`${BASE_URL}`, { data: `got pokemon ${pokemon.name}` })
    })
}

function query() {
    return new Promise(resolve => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(data => data.json()
                .then(resData => {
                    var pokemons = []
                    resData.results.forEach((pokemonData, i) => {
                        if (i < 2) {
                            fetch(pokemonData.url)
                                .then(subData => subData.json()
                                    .then(pokemonData => pokemons.push(pokemonData)))
                        }
                    });
                    resolve(pokemons)
                }))
    })
}

function getTeam() {
    return new Promise(resolve => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(data => data.json()
                .then(resData => {
                    var pokemons = []
                    resData.results.forEach((pokemonData, i) => {
                        if (i === 100) {
                            fetch(pokemonData.url)
                                .then(subData => subData.json())
                                .then(pokemonData => pokemons.push(pokemonData))
                        } else if (i === 10) {
                            fetch(pokemonData.url)
                                .then(subData => subData.json())
                                .then(pokemonData => pokemons.push(pokemonData))
                        } else if (i === 35) {
                            fetch(pokemonData.url)
                                .then(subData => subData.json())
                                .then(pokemonData => pokemons.push(pokemonData))
                        }
                    });
                    resolve(pokemons)
                }))
    })
}

function _observerClean(obj) {
    return Object.keys(obj).reduce(
        (res, e) => Object.assign(res, { [e]: obj[e] }),
        {}
    )
}
export default {
    createPokemonData,
    query,
    getTeam
}