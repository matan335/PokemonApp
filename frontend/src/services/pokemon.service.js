import axios from 'axios'
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/getNewJson'
    : '//localhost:3000/getNewJson';

function createPokemonData() {
    console.log('sending to back')

    axios.post(`${BASE_URL}`)

}

function query() {
    console.log('load query')
    return new Promise(resolve => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(() => console.error('fff'))
            .then(data => data.json()
                .then(resData => {
                    var pokemons = []
                    resData.results.forEach((pokemonData) => {
                        fetch(pokemonData.url)
                            .then(subData => subData.json()
                                .then(pokemonData => pokemons.push(pokemonData)))
                    });
                    resolve(pokemons)
                }))
            .catch(err => {
                fetch('../jsons/pokemon-zubat.json')
                    .then(res => res.json())
                    .then(pokemon => console.log('pokemon:', pokemon))

            })
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



export default {
    createPokemonData,
    query,
    getTeam,
}