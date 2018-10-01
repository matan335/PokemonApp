function query() {
    return new Promise(resolve => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(data => data.json()
                .then(resData => {
                    var pokemons = []
                    resData.results.forEach((pokemonData, i) => {
                        if (i < 100) {
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

export default {
    query,
    getTeam
}