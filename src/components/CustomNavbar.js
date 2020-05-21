import React, { Component } from 'react';
import { Container, Navbar, NavItem, Nav, Form, FormControl, Button, Dropdown} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './CustomNavbar.css'
import { shadows } from '@material-ui/system';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux'

class CustomNavbar extends Component {
  state={
    login:false
  }
  logout=()=>{
    localStorage.removeItem('Login')
    this.setState({
      login:false
    })
  }
  componentDidMount(){
    if (localStorage.getItem('Login')){
      this.setState({
        login:true
      })
    }
    else{
      this.setState({
        login:false
      })
    }
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="NavBar" fixed="top" >
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <div className="logo-div">
                  <img src="./assets/logo.png"
                    width="190"
                    height="35"/>
                </div>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"> </Nav>
                <Nav>
                { this.state.login? <>
                  <Link to="/Cart" fill="red">
                    <ShoppingCartIcon variant="filled"/>{this.props.addedItems}
                  </Link>
                  <div className="border"> </div>
                    <Dropdown>
                      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                       <AccountCircleIcon/>
                      </Dropdown.Toggle>
                   <Dropdown.Menu>       
                    <Dropdown.Item href="/EditProfile">Profile</Dropdown.Item>
                    <Dropdown.Item href="/Wishlist">Wishlist</Dropdown.Item>
                    <a href='/'><Dropdown.Item onClick={()=>this.logout()}>Log Out</Dropdown.Item></a>
                   </Dropdown.Menu>
                </Dropdown>
                    
                    </> :
                    <Link to="/Login">
                        <p>Masuk</p>
                    </Link>
    }
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
         </div>
        )
    }
}
const mapStateToProps = (state)=>{
  return {
    addedItems:state.addedItems
  }
}
export default connect(mapStateToProps, null)(CustomNavbar)