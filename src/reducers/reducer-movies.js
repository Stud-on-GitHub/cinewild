
import { AT_MOVIES } from '../actions/action-types'


export default function ReducerMovies(state = [], action) {
    switch (action.type) {
        case AT_MOVIES.READ_ALL:
            return action.payload
        case AT_MOVIES.DELETE:
            return state.filter((movie) => {
                if (movie.id === action.payload) {
                    return false
                } else {
                    return true
                }
            })
        case AT_MOVIES.CREATE:
            return [...state, action.payload]
        default:
            return state                
    }
}