
import { combineReducers } from 'redux'
import ReducerMovies from './reducer-movies'
import { reducer as ReducerForm } from 'redux-form'

import ReducerActiveMovie from './reducer-active-movie'


const rootReducer = combineReducers({   
    movies: ReducerMovies,
    activeMovie: ReducerActiveMovie,
    form: ReducerForm   
})


export default rootReducer
