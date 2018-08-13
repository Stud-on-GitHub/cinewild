
import { combineReducers } from 'redux'
import { reducer as ReducerForm } from 'redux-form'

import ReducerMovies from './reducer-movies'
import ReducerActiveMovie from './reducer-active-movie'


const rootReducer = combineReducers({   
    movies: ReducerMovies,
    activeMovie: ReducerActiveMovie,
    form: ReducerForm   
})


export default rootReducer
