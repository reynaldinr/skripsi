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
  ...state, showModal:false, checkedA:false
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
        <Modal.Body className="Bod">
          <h5 centered> PRODUK TIDAK BISA DITAWAR</h5>
        </Modal.Body>
        <Modal.Footer>
            <Button closeButton onClick={()=>{handleClose()}} variant="success" className="ButtSw"> OK </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}