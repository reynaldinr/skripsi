import React, { Component } from 'react'
import { Form, Button, Card, Container, Row, Col, Image} from 'react-bootstrap';
import './Cart.css'
import Upload from './Upload.js'

export class EditProfile extends Component {
    render() {
        return (
            <div>
                          <div>
                <Container>
                <Card className='TabCon'>
                <Row>
                <Col sm='2'></Col>
                <Col sm='6' className="Col2">
                <Col xs={6} md={4}>
                  <Image src="./assets/ava.png" className="ava" roundedCircle />
                </Col>
                  <Upload />
                  
               <Form>
                 <Form.Group >
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="Label" placeholder="Nama" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="Penerima" placeholder="Email" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Password </Form.Label>
                  <Form.Control type="Password" placeholder="Password" />
                </Form.Group>

                <Form.Group >
                  <Form.Label>Alamat Lengkap</Form.Label>
                  <Form.Control type="Penerima" placeholder="Nama Penerima" />
                </Form.Group>

            </Form>
        </Col>
        <Col sm='4'> </Col>
        </Row>
        </Card>
        <Button variant="success" className="ButtonE">
            Save
          </Button>
        </Container>
                    </div>
                    </div>
                )
            }
        }

        export default EditProfile
