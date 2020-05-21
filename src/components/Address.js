import React, { Component } from 'react'
import { Form, Button, Card, Container, Row, Col} from 'react-bootstrap';
import './Address.css'

export class Address extends Component {
    render() {
        return (
            <div>
                <Container>
                <Card className='TabCon'>
                <Row>
                <Col sm='2'></Col>
                <Col sm='6'>
                <Form className="FormI">
  <Form.Group >
    <Form.Label>Label Alamat</Form.Label>
    <Form.Control type="Label" placeholder="Rumah/Kantor/Lainnya" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Nama Penerima</Form.Label>
    <Form.Control type="Penerima" placeholder="Nama Penerima" />
  </Form.Group>

  <Form.Group>
    <Form.Label>Provinsi</Form.Label>
    <Form.Control as="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>

  <Form.Group >
    <Form.Label>Kabupaten/Kota
    </Form.Label>
    <Form.Control type="Penerima" placeholder="Nama Penerima" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Kecamatan</Form.Label>
    <Form.Control type="Penerima" placeholder="Nama Penerima" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Kode POS</Form.Label>
    <Form.Control type="Penerima" placeholder="Nama Penerima" />
  </Form.Group>

  <Form.Group >
    <Form.Label>Alamat Lengkap</Form.Label>
    <Form.Control type="Penerima" placeholder="Nama Penerima" />
  </Form.Group>

</Form>
</Col>
<Col sm='4'></Col>
</Row>
</Card>
<Button variant="success" className="ButtAdd">
    Submit
  </Button>
</Container>
            </div>
        )
    }
}

export default Address