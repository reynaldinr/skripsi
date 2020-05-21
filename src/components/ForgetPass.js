import React from 'react';
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ForgetPass.css'

export default class Login extends React.Component {
    render() {
        return (
            <Container>
            <Row className="Row1" >
                <Col sm></Col>
                <Col sm>
                    <Link to="/">
                      <div className="logo-div">
                        <img src="./assets/logo2.png" className="Logo" />
                      </div>
                     </Link>
                    <Paper className="CardF">
                        <div>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className="FormLogin"/>
                        <button type="submit" className="button5">Reset Password</button>
                        </div>
                    </Paper>
                </Col>
                <Col sm></Col>
            </Row> 
         </Container>   
        )
    }
}
