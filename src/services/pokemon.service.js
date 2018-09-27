function query() {
    return new Promise(function (resolve, reject) {
        fetch(`https://pokeapi.co/api/v2/pokemon/`)
            .then(data => data.json()
                .then(res => {
                    var pokemons = []
                    res.results.forEach(element => {
                        console.log(element)
                        fetch(element.url)
                            .then(subData => subData.json()
                                .then(pokemonData => pokemons.push(pokemonData)))
                    });
                    resolve(pokemons)
                }))
    })
}
export default {
    query
}