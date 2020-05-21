import React, { Component } from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import './Footer.css'

export class Footer extends Component {
  render() {
    return (
   
      <div className="footer row no-margin fixedBottom">
           <Container>
        <Row>
        <Col md='4'> 
        <h3> HUBUNGI KAMI</h3>
        <ul>
          <li>  Jalan Srimahi Raya nomor 35, Bandung</li>
          <li>  Sahid Sudirman Centre lantai 21, Jalan Jendral Sudirman kavling 86, Jakarta 10220 </li>
          <li> Jl. Ahmad Yani, No. 120-122, Medan - Sumatera Utara 20111 </li>
          <li>(+62) 811-9192-232</li> 
          <li>  info@potensiana.com </li>
                  </ul>
        </Col>
        <Col md='4'>

        <h3> BANTUAN </h3>
        <h5>Daftar Komoditas</h5>
        <h5>E-Regency</h5>
<h5>Beriklan</h5>
<h5> Info Mitra</h5>
        </Col>
        
  <Col md='4'>
  <h3> DOWNLOAD </h3>
    <div> <img src="./assets/google_play.png" className="picF" /> </div>
    <div> <img src="./assets/apple_store.png" /> </div>
  </Col>
  </Row>
  </Container>
      </div>
    )
  }
}

export default Footer
