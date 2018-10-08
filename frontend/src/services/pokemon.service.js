import axios from 'axios'
const BASE_URL = (process.env.NODE_ENV !== 'development')
    ? '/getNewJson'
    : '//localhost:3000/getNewJson';

const BASE_LIST_URL = (process.env.NODE_ENV !== 'development')
    ? '/list'
    : '//localhost:3000/list';




export default {
    createPokemonData,
    query,
    getTeam,
    loadPokemonList,
    getPages,
    getPokemonData,


}

function getPokemonData(pokemonName) {
    return axios.get(`${BASE_URL}/${pokemonName}`)
        .then(res => res.data)
}

function createPokemonData() {
    axios.post(`${BASE_URL}`)
}

function getPages(pokemonList, pokemonInPage) {
    var numOfPages = Math.ceil(pokemonList.length / pokemonInPage);
    var pages = [];
    for (let i = 0; i < numOfPages; i++) {
        pages[i] = [];
        for (let j = 0; j < pokemonInPage; j++) {
            if (pokemonList[j]) pages[i].push(pokemonList[j]);
        }
        pokemonList.splice(0, pokemonInPage);
    }
    return pages
}

function loadPokemonList() {
    return axios.get(`${BASE_LIST_URL}`)
        .then(res => res.data)
}

function query() {
    console.log('load query')
    return new Promise(resolve => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
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
            .catch(err => {})
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