import React from 'react';
import { TextField, FormControlLabel, Checkbox} from '@material-ui/core';
import { Container, Row, Col, Card, Form, Modal, Spinner, Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'



export default class Login extends React.Component {
  state = {
    loading: false,
    showModal: false,
    email:false,
    password:false
  }
  closeModal(){
    this.setState({
      showModal:false
    })
  }
  login = () => {
    this.setState({ loading: true });
    //Faking API call here
    setTimeout(() => {
      this.setState({ loading: false, showModal:true });
    }, 3000)
    localStorage.setItem('Login', 'info login')
  }
  input = (a) =>{
    this.setState({
      [a]:true,
    })
  }
  render() {
    const { classes } = this.props;
    let { loading, email, password } = this.state
    return (
      <Container>
        <Row className="Row1">
          <Col sm></Col>
          <Col sm>

            <Link to="/" align="center">
              <div className="logo-div">
                <img src="./assets/logo2.png" className="Logo" />
              </div>
            </Link>
            <Card className="Card">
              <div>
                <TextField id="outlined-basic" onChange={()=>this.input('email')} label="Email" variant="outlined" className="FormLogin"/>
              </div>
              <div> 
                <TextField
                  id="filled-password-input"
                  onChange={()=>this.input('password')}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  className="FormLogin"
                />
              </div>
              <div>
                <Form.Check type="checkbox" label="Remember Me" />
                <Link to="/ForgetPass" ><subtitle1 className="text"> Lupa Password?</subtitle1></Link>
              </div>
              <div style={{ marginTop: "2px" }}>
                {email && password ? 
                <>
                <button className="button" onClick={()=>this.login()} disabled={loading}>
                  {loading && (
                      <i class="fa fa-spinner fa-pulse fa-2x" style={{ marginRight: "5px" }}/>
                  )}
                  {loading && <span> </span>}
                  {!loading && <span>Masuk</span>}
                </button>
                </>
                : 
                <button className="button" disabled={loading} >
                  <span>Masuk</span>
                </button>
                } 
              </div>
              {/* <ButtonLoad onClick={()=>this.login()}/> */}
              <div><small >Belum Punya Akun?</small>
              <Link to="/Register"> <small className="text"> Daftar </small> </Link></div>
            </Card>
          </Col>
          <Col sm></Col>
        </Row> 
        <Modal show={this.state.showModal} onHide={()=>this.closeModal()} centered={true}>
          <Modal.Header closeButton onClick={()=>this.closeModal()} className="head1"> </Modal.Header>
          <Modal.Body className="Bod2">
              <h5> Berhasil Masuk</h5>
              <a href='/'><Button variant="success" className="ButtLog">BERANDA</Button></a>
          </Modal.Body>
        </Modal>
      </Container>   
    )
  }
}
