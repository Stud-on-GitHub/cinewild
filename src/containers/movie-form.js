
import React, { Component } from 'react'
import { Link } from 'react-router'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { createMovie } from '../actions/index'



const formConfig = {
    form: "createMovieForm",
    fields: ['title', 'content', 'author', 'genre', 'language'],
    validate: validate
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ createMovie }, dispatch)
}


function validate(values) {
    const errors = {}
    if (!values.title) {
        errors.title = "veuillez définir le titre"
    }
    if (!values.content) {
        errors.content = "veuillez définir la description"
    }
    if (!values.author) {
        errors.author = "veuillez définir le réalisateur"
    }
    if (!values.genre) {
        errors.genre = "veuillez définir le genre"
    }
    if (!values.language) {
        errors.language = "veuillez définir la langue"
    }
    return errors
}


class MovieForm extends Component {

    //This method is declared using an arrow function initializer solely to guarantee its binding
    createMovie = movie => {
        this.props.createMovie(movie)
        browserHistory.push('/')
    }

    render() {

        const { fields, handleSubmit, errors } = this.props

        return (
            <div>
                <h1 className="title_page">Nouveau film</h1>
                <form onSubmit={handleSubmit(this.createMovie)} >
                    <div className={`form-group ${fields.title.touched && fields.title.invalid ? 'has-error' : ''}`}>   
                        <label>Titre</label>
                        <input className="form-control input_text" type="text" {...fields.title} />
                        <div>{fields.title.touched && errors.title}</div>
                    </div>
                    <div className={`form-group ${fields.content.touched && fields.content.invalid ? 'has-error' : ''}`}>
                        <label>Description</label>
                        <input className="form-control input_text" type="textarea" {...fields.content} />
                        <div>{fields.content.touched && errors.content}</div>
                    </div>
                    <div className={`form-group ${fields.author.touched && fields.author.invalid ? 'has-error' : ''}`}>
                        <label>Réalisateur</label>
                        <input className="form-control input_text" type="text" {...fields.author} />
                        <div>{fields.author.touched && errors.author}</div>
                    </div>
                    <div className={`form-group ${fields.genre.touched && fields.genre.invalid ? 'has-error' : ''}`}>
                        <label>Genre</label>
                        <input className="form-control input_text" type="text" {...fields.genre} />
                        <div>{fields.genre.touched && errors.genre}</div>
                    </div>

                    <div className={`form-group ${fields.language.touched && fields.language.invalid ? 'has-error' : ''}`}>
                        <label>Langue</label>
                        <input className="form-control input_text" type="text" {...fields.language} />
                        <div>{fields.language.touched && errors.language}</div>
                    </div>
                    <div className="buttons_form">
                        <Link to={'/'} className="button_space"><button className="btn btn-danger">Retour</button></Link>
                        <button className="btn btn-primary" type="submit" disabled={this.props.invalid}>Créer</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default connect(null, mapDispatchToProps)(reduxForm(formConfig)(MovieForm))