
export default {
    state: {
        team: []
    },
    getters: {
        team: state => state.team
    },
    mutations: {
        addToTeam(state, { pokemon }) {
            if (state.team.length < 6) state.team.push(pokemon)
        }

    },
    actions: {

    }
}
