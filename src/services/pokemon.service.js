function query() {
    return new Promise(resolve => {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(data => data.json()
                .then(resData => {
                    var pokemons = []
                    resData.results.forEach((element, i) => {
                        if (i < 35) {
                            fetch(element.url)
                                .then(subData => subData.json()
                                    .then(pokemonData => pokemons.push(pokemonData)))
                        }
                    });
                    resolve(pokemons)
                }))
    })
}
export default {
    query
}