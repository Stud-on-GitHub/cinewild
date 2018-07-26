
import React from 'react'
import { Image } from 'react-bootstrap'

import NavbarRender from '../containers/navbar-render'
import pipe from './pipe.jpg'



const NotFound = () => {

    return (
        <div>
            <NavbarRender />
            <div className="img_error_404">
                <Image src={pipe} alt="représentation d'une pipe" title="Ceci n'est pas une page!" responsive />
            </div>
            <div className="tx_error_404">
                <h1>Error 404</h1>
            </div>
        </div>
    )
    
}


export default NotFound
