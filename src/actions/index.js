
import axios from 'axios'

import { AT_MOVIES } from './action-types'



const END_POINT = 'http://localhost:3030'  //Lancer la cmd dans un terminal:  json-server --watch fillDB.js --port 3030


export function readAllMovie() {
    return function (dispatch) {
        axios.get(`${END_POINT}/films`).then((response) => {  
            dispatch({ type: AT_MOVIES.READ_ALL, payload: response.data })
        })
    }
}


export function readMovie(id) {
    return function (dispatch) {
        axios.get(`${END_POINT}/films/${id}`).then((response) => {   
            dispatch({ type: AT_MOVIES.READ, payload: response.data })
        })
    }
}


export function deleteMovie(id) {
    return function (dispatch) {
        axios.delete(`${END_POINT}/films/${id}`).then((response) => {   
            dispatch({ type: AT_MOVIES.DELETE, payload: id })
        })
    }
}


export function createMovie(movie) {
    return function (dispatch) {
        axios.post(`${END_POINT}/films`,   
            {
                title: movie.title,
                content: movie.content,
                author: movie.author,
                genre: movie.genre,
                language: movie.language
            }).then((response) => {
                dispatch({ type: AT_MOVIES.CREATE, payload: response.data })
            })
    }
}