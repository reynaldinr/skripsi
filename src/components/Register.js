import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { Container, Spinner, Card, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'
import { FaCheck } from 'react-icons/fa'

export class Register extends Component {
  state = {
    loading: false,
    finish:false,
    email:false,
    password:false
  }
  register = () => {
    this.setState({ loading: true })
    setTimeout(() => {
      this.setState({ loading: false, finish:true});
    }, 3350)
  }

  render() {
    let { loading, finish} = this.state
    return (
      <Container>
        <Row className="Row1">
          <Col sm></Col>
          <Col sm>
          <div className="logo-div">
            <img alt='logo' src={'./assets/logo2.png'} className="Logo" />
          </div>
          <Card className="CardR">
            <div>
              <TextField id="outlined-basic" label="Nama" variant="outlined" className="FormReg" /> 
            </div>
            <div>
              <TextField id="outlined-basic" label="Email" variant="outlined" className="FormReg"/>
            </div>
            <div>
            <TextField
                  id="filled-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  className="FormLogin"
                />
            </div>
            <div>
              <TextField
                id="standard-textarea"
                label="Alamat"
                placeholder="Alamat"
                multiline
                variant="outlined"
                className="FormLogin"
              />
            </div>
            <div className="createAccount">
            <div style={{ marginTop: "2px" }}>
              { loading ?  
              <button className="button2">
                <span><img src="./assets/340.gif" className="imgLoad2"/></span>
              </button>
              : finish ? <Link to='/login'><button className="button2"><span><FaCheck/></span></button></Link>
              : <button className="button2" onClick={()=>this.register()} disabled={loading}><span>Daftar</span></button>
              }
            </div>
              <row> 
                <small>Sudah Punya Akun?</small> 
                <Link to="/Login"> <small className="text">Masuk</small>  </Link>
              </row>
            </div>
          </Card>
        </Col>
        <Col sm></Col>
      </Row>
    </Container>
    )
  }
}
export default Register
