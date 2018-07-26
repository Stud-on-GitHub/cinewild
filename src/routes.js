
import React, { Component } from 'react'  
import { Router, Route, browserHistory } from 'react-router'

import MovieList from './containers/movie-list'
import MovieForm from './containers/movie-form'
import Movie from './containers/movie'
import NotFound from './components/not-found'
import Home from './components/home'


class Routes extends Component {

        render() {

            return (
                <div>
                    <Router history={browserHistory}>
                        <Route path="/" component={Home}/>
                        <Route path="/films" component={MovieList}/>
                        <Route path="creer-film" component={MovieForm}/>
                        <Route path="film/:id" component={Movie}/>
                        <Route path="*" component={NotFound}/>
                    </Router>
                </div>
            )

        }
    }


export default Routes