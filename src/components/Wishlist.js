import React, { Component } from 'react'
import {Row, Col, Card, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './SearchResult.css'
export class Wishlist extends Component {
  render() {
    return (
        <Container>
            <Row className="RowW">
                       <Col xs={3}>
                           <Link to='/Product'>
                           <Card className="CardSR">
                            <Card.Img variant="top" src="./assets/kopi.jpg" /> 
                                 <Card.Body>
                                    <Card.Text>
                                       Kopi
                                    </Card.Text>
                                    
                                    <ShoppingCartIcon> </ShoppingCartIcon>
                                    <FavoriteIcon> </FavoriteIcon>
                                   </Card.Body>
                           </Card>
                           </Link>
                        </Col>
          </Row>
          </Container>
    )
  }
}

export default Wishlist
