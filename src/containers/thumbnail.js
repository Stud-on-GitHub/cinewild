
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Thumbnail } from 'react-bootstrap'
import shuffle from 'lodash.shuffle'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { readAllMovie } from '../actions/index'
import logo from './logo.png'



const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ readAllMovie }, dispatch)
}


class ThumbnailMovies extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    componentWillMount() {
        this.props.readAllMovie()
    }


    generateThumbnail() {
        const { movies } = this.props
        let arrayMovies
        if (movies) {
            arrayMovies = movies
            const randArrayMovies = shuffle(arrayMovies)   //Make a react-warning-keys 
            const thumbMoviesArray = randArrayMovies.slice(0, 8)
            return (thumbMoviesArray.map((movie) => {
                return (
                    <Col xs={12} md={3} className="thumbnail_movie">
                        <Link to={`/film/${movie.id}`}>
                            <Thumbnail className="thumbnail_movie_link" idkey={movie.id} alt={movie.title} src={logo}>
                                <h4 className="thumbnail_movie_title">{movie.title}</h4>
                            </Thumbnail>
                        </Link>
                    </Col >
                )
            }))
    } else {
    return <p>Pas de film trouvé!</p>
}
    }


render() {

    return (
        <div>
            <Row className="thumbnail_content">
                {this.generateThumbnail()}
            </Row>
        </div>
    )

}
}


export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailMovies)  
