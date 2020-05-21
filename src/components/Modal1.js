import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Modal1 extends React.Component {
    constructor()
    {
        super()
        this.state={
            show:false
        }
    }

    handleModal()
    {
        this.setState({show:!this.state.show})
    }
    render(){
        return (
            <div>
                <Modal show={this.state.show} >
                <Modal.Header closeButton onClick={()=>{this.handleModal()}}> </Modal.Header>
                <Modal.Body>
                    Hi, react
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/Login"><Button> Login </Button> </Link>
                    <Link to="/Register"><Button> Register </Button> </Link> 
                </Modal.Footer>
                </Modal>
            </div>
        );
    }
} 

export default Modal1;