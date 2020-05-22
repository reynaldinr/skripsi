import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Container, Card, Row, Col, Spinner} from 'react-bootstrap';
import './Product.css'
import { connect } from 'react-redux';
import { addToCart } from '../reducers/cartAction'

export class Product extends Component {
  state = {
    loading: false,
    finish:false,
    loading2: false,
    finish2:false,
    styleImg:'GamKopi-fly',
    value: 1
  }

  addCart = () => {
    this.props.add_Cart(this.state.value)
    this.setState({
      styleImg: 'GamKopi-flying'
    })
    setTimeout(() => this.setState({ //ngulang atau sekali
      styleImg: 'GamKopi-fly'
    }), 400)
  }

  cart = () => {
    this.setState({ loading2: true })
    setTimeout(() => {
      this.setState({ loading2: false, finish2:true});
    }, 3000)
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    let { loading, finish, loading2, finish2} = this.state
    return (
      <Container>
        <Card className="CardPr">
        <Row>
          <Col sm={6}>
            <img src="./assets/kopi.jpg" className={this.state.styleImg}/>
            <div>
              <img src="./assets/kopi.jpg" className='GamKopi'/>
            </div>
          </Col>
          <Col sm={6} className="Col1">
            <h1 className="txtt"> KOPI </h1>
            <h2 className="txtt"> Harga</h2>
            <h4 className="txtt"> Rp. 14.000</h4>
            <h4 className="txtt"> Kuantitas </h4>
            <div className="def-number-input number-input">
              <button onClick={this.decrease} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.value} onChange={()=> console.log('change')} type="number" />
              <button onClick={this.increase} className="plus"></button>
            </div>
            <div>
              <Row className="R1">
                <div style={{ marginTop: "2px" }}>
                { loading2 ?  
                  <button className="button3">
                    <span><img src="assets/lop.gif" id="item__img" className='imgLoad'/>  </span>
                  </button>
                  : finish2 ? <Link to='/Wishlist'><button className="button4"><span>Ditambahkan Ke Wishlist</span></button></Link>
                  : <button className="button3" onClick={()=>this.cart()} disabled={loading2}><span>Tambah Ke Wishlist</span></button>
                }
                </div>
                <div style={{ marginTop: "2px" }}>
                  { loading ?  
                  <button className="button4">
                    <span><Spinner animation="border" /></span>
                  </button>
                  : finish ? <Link to='/login'><button className="button4"><span>Tambah Ke Keranjang</span></button></Link>
                  : <button className="button4" onClick={()=>this.addCart()} style={this.state.stylebtn} disabled={loading}><span>Tambah Ke Keranjang</span></button>
                  }
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  )
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    add_Cart:(data) =>{dispatch(addToCart(data))}
  }
}
export default connect(null, mapDispatchToProps)(Product)
