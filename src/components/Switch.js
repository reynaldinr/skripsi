import React from 'react';
import Switch from '@material-ui/core/Switch';
import {Modal, InputGroup, FormControl, Button} from 'react-bootstrap'

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: false,
    showModal:false,
  });

  const handleChange = name => event => {
    if(event.target.checked===true){
      setState({ ...state, showModal:true, [name]: event.target.checked });
    }
    else{
      setState({ ...state, [name]: event.target.checked });
    }
    console.log(state.showModal)
}
 const handleClose=()=>{
setState({
  ...state, showModal:false
})
 }

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange('checkedA')}
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Modal show={state.showModal} onHide={()=>{handleClose()}} centered >
        <Modal.Header closeButton onClick={()=>{handleClose()}}> </Modal.Header>
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
          />
       </InputGroup>

        </Modal.Body>
        <Modal.Footer>
            <Button closeButton onClick={()=>{handleClose()}} variant="success"> OK </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}