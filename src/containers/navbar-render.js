
import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router'

import logobrand from './logobrand.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'


class NavbarRender extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {

        return (
            <div>
                <Navbar inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand className="logo_brand_navbar" >
                            <Link to={'/'}><span><img src={logobrand} className="logo_brand" alt="logo" /></span><span id="text_brand">CINEWILD</span></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <li><Link to={'/films'}>Liste des films</Link></li>
                            <li><Link to={'/creer-film'}>Ajouter un film</Link></li>
                        </Nav>                        
                        <Nav pullRight>
                            <li><a href='https://fr-fr.facebook.com/'><img src={facebook} className="icon_media" alt="logo" /></a></li>
                            <li><a href='https://www.instagram.com/?hl=fr'><img src={instagram} className="icon_media" alt="logo" /></a></li>
                            <li><a href='https://twitter.com/?lang=fr'><img src={twitter} className="icon_media" alt="logo" /></a></li>
                        </Nav>
                        <Navbar.Text pullRight>Have a wild day!</Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        )

    }
}


export default (NavbarRender)

