
import { AT_MOVIES } from '../actions/action-types'


export default function ReducerActiveMovie(state=null, action) {
    switch (action.type) {
        case AT_MOVIES.READ:
            return action.payload
        default:
            return state
    }
}