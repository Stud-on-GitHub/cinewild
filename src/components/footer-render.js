
import React from 'react'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'



const FooterRender = () => {

    return (
        <div>
            <Col xs={9} md={3} className="footer_render" >
                <Row>
                    <Col xs={9} md={4} className="footer_col_left">
                        <h5>Services</h5>
                        <p>Web design</p>
                        <p>Development</p>
                        <p>Hosting</p>
                    </Col>
                    <Col xs={9} md={4} className="footer_col_center">
                        <h5>About</h5>
                        <p>Company</p>
                        <p>Team</p>
                        <p>Careers</p>
                    </Col>
                    <Col xs={9} md={4} className="footer_col_right">
                        <h5>Company Name</h5>
                        <p>Altera sententia est, quae definit amicitiam paribus officiis ac voluntatibus. Hoc quidem est nimis exigue et exiliter ad calculos vocare amicitiam.Iamque lituis cladium concrepantibus internarum non celate ut antea turbidum saeviebat ingenium a veri consideratione detortum.</p>
                    </Col>
                </Row>
            </Col>
        </div>
    )

}


export default FooterRender