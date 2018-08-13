
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { readMovie } from '../actions/index'
import NavbarRender from '../components/navbar-render'
import MovieContent from '../components/movie-content'



const mapStateToProps = (state) => {
    return {
        movie: state.activeMovie
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ readMovie }, dispatch)
}


class Movie extends Component {

    componentWillMount() {
        this.props.readMovie(this.props.params.id)
    }

    
    renderMovieContent() {
        const { movie } = this.props
        if (movie) {
            return <MovieContent movie={movie} />
        }
    }


    render() {

        return (
            <div>
                <NavbarRender />
                {this.renderMovieContent()}
                <div className="buttons_add">
                    <Link to={'/'}><button className="btn btn-primary">Accueil</button></Link>
                </div>
            </div>
        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movie)
