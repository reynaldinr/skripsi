import React from 'react';
import { Paper, TextField } from '@material-ui/core'
import { Container, Row, Col } from 'react-bootstrap'
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
                <img alt="logo" src="./assets/logo2.png" className="Logo" />
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
