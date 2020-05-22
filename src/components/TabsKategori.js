import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Col, Row, Image} from 'react-bootstrap'
import './TabsKategori.css'

export class TabsKategori extends Component {
  render() {
    return (
      <div className="category">
        <Row className="RowCat">
          <Col xs={3} md={3}>
            <Link to="/SearchResult">
              <div className="border-round">
              <Image src="./assets/perikanan.png" className="imgTabs"/>
              </div>
              <p className="textP"> PERIKANAN </p>
            </Link>
          </Col>
          <Col xs={3} md={3}>
            <Link to="/SearchResult">
            <div className="border-round"> 
              <Image src="./assets/elektronik.png" className="imgTabs" />
            </div>
            <p className="textP"> ELEKTRONIK </p>
            </Link>
          </Col>
          <Col xs={3} md={3}>
            <Link to="/SearchResult">
            <div className="border-round"> 
              <Image src="./assets/kosmetik.png" className="imgTabs" />
            </div>
            <p className="textP"> KECANTIKAN </p>
            </Link>
          </Col>
        </Row> 
        <Row className="RowCat">
          <Col xs={3} md={3}>
            <Link to="/SearchResult">
              <div className="border-round">
                <Image src="./assets/perhiasan.png" className="imgTabs"/>
              </div>
              <p className="textP"> PERHIASAN </p>
            </Link>
            

          </Col>
          <Col xs={3} md={3}>
            <Link to="/SearchResult">
              <div className="border-round">
                <Image src="./assets/medis.png" className="imgTabs" />
              </div>
              <p className="textP"> KESEHATAN </p>
            </Link>
          </Col>
          <Col xs={3} md={3}>
            <Link to="/SearchResult">
              <div className="border-round">
                <Image src="./assets/makanan.png" className="imgTabs"/>
              </div>
              <p className="textP"> MAKANAN </p>
            </Link>
          </Col>
        </Row> 
        <Row className="RowCat">
        <Col xs={3} md={3} centered={true}>
            <Link to="/SearchResult">
              <div className="border-round">
                <Image src="./assets/tangan.png" className="imgTabs"/>
              </div>
              <p className="textP"> INDUSTRI </p>
            </Link>
          </Col>
        <Col xs={3} md={3}>
          <Link to="/SearchResult">
            <div className="border-round">
              <Image src="./assets/kehutanan.png" className="imgTabs"/>
            </div>
            <p className="textP"> KEHUTANAN </p>
          </Link>
        </Col>
        <Col xs={3} md={3}>
          <Link to="/SearchResult">
            <div className="border-round">
              <Image src="./assets/pertanian.png" className="imgTabs" />
            </div>
            <p className="textP"> PERHIASAN </p>
          </Link>
        </Col>
      </Row> 
    </div>
    )
  }
}
export default TabsKategori