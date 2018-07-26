
import React from 'react'
import { Carousel } from 'react-bootstrap'

import pix1 from './pix1.jpg'
import pix2 from './pix2.jpg'
import pix3 from './pix3.jpg'



const CarousselRender = () => (

    <div>
        <Carousel className="carousel">
            <Carousel.Item>
                <img width={700} height={300} alt="description" src={pix1} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={700} height={300} alt="description" src={pix2} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={700} height={300} alt="description" src={pix3} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
    
)


export default CarousselRender
