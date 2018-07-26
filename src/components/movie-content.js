
import React from 'react'



const MovieContent = ({ movie }) => {

    if(!movie){
        return <div>Pas de film trouvé</div>
    }
    return (
        <div>
            <h1 className="title_page">{movie.title}</h1>
            <p>{movie.content}</p>
            <p>Réalisateur: {movie.author}</p>
            <p>Genre: {movie.genre}</p>
            <p>Langue: {movie.language}</p>
        </div>
    )
    
}


export default MovieContent
