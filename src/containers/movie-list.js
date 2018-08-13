
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FormGroup } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
import { Table } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

import { readAllMovie, deleteMovie } from '../actions/index'
import MovieListItem from '../components/movie-list-item'
import NavbarRender from '../components/navbar-render'



const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ readAllMovie, deleteMovie }, dispatch)
}


class MovieList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            genreSelected: "",
            langSelected: "",
            searchText: ""
        }
    }


    handleChangeText = (e) => {
        this.setState({ searchText: e.target.value })
    }  


    componentWillMount() {
        this.props.readAllMovie()
    }  


    deleteMovieCallBack(movie) {
        this.props.deleteMovie(movie.id)
    }


    filterText(MovieList) {
        return MovieList.filter((movie) => {
            if ((movie.title === this.state.searchText) || (movie.author === this.state.searchText)) {
                return true
            } else {
                return false
            }
        })
    }


    filterGenre(MovieList) {
        return MovieList.filter((movie) => {
            if (movie.genre === this.state.genreSelected) {
                return true
            } else {
                return false
            }
        })
    }


    filterLang(MovieList) {
        return MovieList.filter((movie) => {
            if (movie.language === this.state.langSelected) {
                return true
            } else {
                return false
            }
        })
    }


    renderMoviesList() {
        const { movies } = this.props
        let arrayMovies
        if (movies) {
            if (this.state.searchText) {
                arrayMovies = this.filterText(movies)
                if (this.state.genreSelected) {
                    arrayMovies = this.filterGenre(arrayMovies)
                    if (this.state.langSelected) {
                        arrayMovies = this.filterLang(arrayMovies)
                    }
                } else if (this.state.langSelected) {
                    arrayMovies = this.filterLang(arrayMovies)
                }
            } else if(this.state.genreSelected) {
                arrayMovies = this.filterGenre(movies)
                if (this.state.langSelected) {
                    arrayMovies = this.filterLang(arrayMovies)
                }
            }else if(this.state.langSelected) {
                arrayMovies = this.filterLang(movies)
            }else {
                arrayMovies = movies
            }
            return (arrayMovies.map((movie) => {
                return <MovieListItem key={movie.id} movie={movie} deleteMovieCallBack={(movie) => this.deleteMovieCallBack(movie)} />
            }))
        }
    }
 

    render() {

        return (
            <div>
                <NavbarRender />
                <h1 className="title_page">Liste des films</h1>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <FormControl onKeyUp={this.handleChangeText} type="text" className="input_text" placeholder="Rechercher un film..." />
                    </FormGroup>
                    <FormGroup controlId="idGenre">
                        <FormControl onChange={(e) => this.setState({ genreSelected: e.target.value })} className="input_select" componentClass="select" placeholder="Genre"> {/* placeholder non fonctionnel !?*/}
                            <option value="">Genre</option>
                            <option value="animation">animation</option>
                            <option value="biopic">biopic</option>
                            <option value="comédie">comédie</option>
                            <option value="documentaire">documentaire</option>
                            <option value="drame">drame</option>
                            <option value="fantastique">fantastique</option>
                            <option value="science-fiction">science-fiction</option>
                            <option value="horreur">horreur</option>
                            <option value="guerre">guerre</option>
                            <option value="histoire">histoire</option>
                            <option value="policier">policier</option>
                            <option value="thriller">thriller</option>
                            <option value="aventure">aventure</option>
                        </FormControl>
                    </FormGroup>
                    <FormGroup controlId="idLang">
                        <FormControl onChange={(e) => this.setState({ langSelected: e.target.value })} className="input_select" componentClass="select" placeholder="Langue"> {/* placeholder non fonctionnel !?*/}
                            <option value="">Langue</option>
                            <option value="français">français</option>
                            <option value="anglais">anglais</option>
                            <option value="espagnol">espagnol</option>
                        </FormControl>
                    </FormGroup>
                </Form>
                <Table className="table" responsive>
                    <thead>
                        <tr>
                            <th className="first_col_th"></th>
                            <th>Titre</th>
                            <th>Réalisateur</th>
                            <th>Genre</th>
                            <th>Langue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderMoviesList()}
                    </tbody>
                </Table>
            </div >

        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)


