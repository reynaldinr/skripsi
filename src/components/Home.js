import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Container, Modal, Jumbotron, Row, Col, Button, Carousel, CarouselItem, Form, FormControl, Card, Nav, Tabs, Tab} from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { MdSearch } from 'react-icons/md';
import './Home.css'
import Modal1 from './Modal1';
import Tabs1 from './TabsKategori';
import AutoComplete from './AutoComplete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tabs2 from './TabsKategori2';

export class Home extends Component {
   state={
      show:false,
      login:false
   }
   showModal=()=>{
      this.setState({
         show:true
      })
   }
   closeModal=()=>{
      this.setState({
         show:false
      })
   }
   componentDidMount(){
      if(localStorage.getItem('Login')){
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
            <Container>
             <Carousel className="Caro" >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./assets/car.jpg"
                    />
                    <Carousel.Caption>
                    <h3>POTENSIANA</h3>
                    <h6>PUSAT PERDAGANGAN ONLINE BERBASIS BLOCKCHAIN</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./assets/car.jpg"
                    />

                    <Carousel.Caption>
                    <h3>POTENSIANA</h3>
                    <h6>PUSAT PERDAGANGAN ONLINE BERBASIS BLOCKCHAIN</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./assets/car.jpg"               />
                    <Carousel.Caption>
                    <h3>POTENSIANA</h3>
                    <h6>PUSAT PERDAGANGAN ONLINE BERBASIS BLOCKCHAIN</h6>
                    </Carousel.Caption>
                </Carousel.Item>
             </Carousel>

             <Row className="RowH">
                 <Col className="ColKat" xs={4} >
                    <Typography variant="h5" align="center" className="typ"> KATEGORI </Typography>
                     <Tabs defaultActiveKey="barang" id="uncontrolled-tab-example" align="center">
                        <Tab eventKey="barang" title="Barang">
                        <Tabs1 />
                        </Tab>
        
                       <Tab eventKey="provinsi" title="Provinsi">
                       <Tabs2 />
                       </Tab>
                    </Tabs>
                 </Col>
                 <Col xs={8}>
                     <Row>
                      <AutoComplete /> 
                     
                     <Link to="/SearchResult">
                       <div className="search-icon">  
                        <MdSearch/>
                      </div>
                     </Link>
                     </Row>
                     
                     <Row >
                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                    <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                      
                                    <ShoppingCartIcon/>
                                    <FavoriteIcon />
                                  
                                   </Card.Body>
                           </Card>
                           </>

                        }
                        
                        </Col>

                        <Col xs={3}>
                        { localStorage.getItem('Login')? 
                           <Link to='/Product'>
                              <Card className="CardH">
                              <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                 </Card.Body>
                              </Card>
                           </Link>
                           :
                           <>
                           <Card className="CardH" onClick = {()=>this.showModal()}>
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                              <Card.Body>
                              <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                 <ShoppingCartIcon variant="top"/>
                                 <FavoriteIcon variant="top"/>
                              </Card.Body>
                           </Card>
                           </>
                        }
                        </Col>
                  <Col xs={3}>
                           {localStorage.getItem('Login')? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card className="CardH" onClick = {()=>this.showModal()}>
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>

                        }
                        
                        </Col>
                        <Col xs={3}>
                           {localStorage.getItem('Login')? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>
                }
        
                        </Col>
                   </Row>

                   <Row >
                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>

                        }
                        
                        </Col>

                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>
                    }
                  </Col>
                  <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>

                        }
                        
                        </Col>
                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>
                }
        
                        </Col>
                   </Row>
                
                   <Row >
                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>

                        }
                        
                        </Col>

                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>
                    }
                  </Col>
                  <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>

                        }
                        
                        </Col>
                        <Col xs={3}>
                           {this.state.login? 
                           <Link to='/Product'>
                           <Card className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                           :
                           <>
                           <Card onClick = {()=>this.showModal()} className="CardH">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                 <Card.Text className="textC">
                                       Kopi
                                    </Card.Text>
                                    <Card.Text className="textC"> Rp. 50.000 </Card.Text>
                                    
                                    <ShoppingCartIcon variant="top"/>
                                    <FavoriteIcon variant="top"/>
                                  
                                   </Card.Body>
                           </Card>
                </>
                }
        
                        </Col>
                   </Row>
                   
                 </Col>
            </Row>
            <Modal show={this.state.show} onHide={()=>this.closeModal()}centered={true}>
                <Modal.Header closeButton onClick={()=>this.closeModal()} className="ModalS1"> <img src="assets/logo2.png" className="logmod" centered={true}/></Modal.Header>
                <Modal.Body className="ModalS">
                  <p> KAMU HARUS <h4>MASUK / DAFTAR</h4> TERLEBIH DAHULU</p>
                </Modal.Body>
                <Modal.Footer className="ModalS">
                    <Link to="/Login"><Button className="butt"> Masuk </Button> </Link>
                    <Link to="/Register"><Button className="butt" variant="success"> Daftar </Button> </Link> 
                </Modal.Footer>
                </Modal>
                </Container>
        )
    }
}

export default Home
