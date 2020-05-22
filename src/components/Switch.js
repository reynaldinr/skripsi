import React, {useState} from 'react';
import Switch from '@material-ui/core/Switch'
import {Modal, InputGroup, FormControl, Button} from 'react-bootstrap'

export default function Switches(props) {
  const [checkbox, setCheckbox] = useState(false)
  const [price, setPrice] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    setShowModal(true)
    setCheckbox(e.target.checked)
  }
  const handleClose = () => setShowModal(false)
  const submitPrice = () => {
    props.setBargain(props.id, price)
    setShowModal(false)
    console.log(price)
  }

  return (
    <div>
      <Switch
        checked={checkbox}
        onChange={(e)=>handleChange(e)}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Modal show={showModal} onHide={handleClose} centered={true} >
        <Modal.Header closeButton onClick={handleClose}></Modal.Header>
        <Modal.Body className="Bod2">
          <h5> PRODUK BISA DITAWAR</h5>
          <h6> MASUKAN HARGA PENAWARAN</h6>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Rp.</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Harga"
            aria-label="Harga"
            aria-describedby="basic-addon1"
            onChange={(e)=>setPrice(e.target.value)}
            type='number'
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button closeButton onClick={()=>submitPrice()} variant="success"> OK </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}