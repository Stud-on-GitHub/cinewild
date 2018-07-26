
import React from 'react'
import {Link} from 'react-router'



const MovieListItem = (props) => {

    const {movie} = props

    function deleteMovie(movie){
        props.deleteMovieCallBack(movie)
    }

    return (
        <tr>
            <td><button className="btn btn-danger" onClick={() => deleteMovie(movie)} >Supprimer</button></td>
            <td><Link className="movie_link" to={`/film/${movie.id}`}>{movie.title}</Link></td> 
            <td>{movie.author}</td>  
            <td>{movie.genre}</td>
            <td>{movie.language}</td>        
        </tr>
    )
    
}


export default MovieListItem