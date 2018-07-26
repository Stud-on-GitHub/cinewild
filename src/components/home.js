
import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'

import ThumbnailMovies from '../containers/thumbnail'
import NavbarRender from '../containers/navbar-render'
import CarousselRender from './caroussel-render'
import FooterRender from './footer-render'



class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    
    render() {
        
        return (
            <div>             
                <Grid>
                    <div>
                        <NavbarRender />
                    </div>
                    <div>
                        <CarousselRender />
                    </div>
                    <div>
                        <h2 className="title_sugestion">Les meilleurs films</h2>
                    </div>
                    <div>
                        <ThumbnailMovies />
                    </div>
                    <div>
                        <FooterRender />
                    </div>
                </Grid>
            </div>
        )
    }

}


export default (Home)