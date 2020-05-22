import React, {useState} from 'react';
import Switch from './Switch';
import Switch2 from './Switch2';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Container, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Cart.css';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
})

export default function SpanningTable() {
  const classes = useStyles()
  const [products, setProducts] = useState([{
    img:'./assets/kopi.jpg',
    store:'verina',
    qty: 4,
    price: 2500,
    bargain:true,
    bargainPrice:'-'
  },{
    img:'./assets/kopi.jpg',
    store:'sabar',
    qty: 10,
    price: 5000,
    bargain:false,
    bargainPrice:'-'
  },{
    img:'./assets/kopi.jpg',
    store:'subur',
    qty: 2,
    price: 1250,
    bargain:true,
    bargainPrice:'-'
  }])
  const [bargainPrice, setBargainPrice] = useState(0)

  const ccyFormat = (num) =>{
    return `${num.toFixed(2)}`
  }
  
  const totalPrice = (qty, price) => {
    return qty * price;
  }
  const subtotal = (items) => {
    return items.map(({ price, qty }) => (price*qty)).reduce((total, i) => total + i, 0);
  }
  const handleBargainPrice = (i, value) =>{
    let newProducts = products
    setBargainPrice(value)
    newProducts[i].bargainPrice=value
    setProducts(newProducts)
  }
  const invoiceSubtotal = subtotal(products)

  return (
    <Container>
    <TableContainer component={Paper} className="TabCon">
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={6}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Produk</TableCell>
            <TableCell align="right">Toko</TableCell>
            <TableCell align="right">Tawar</TableCell>
            <TableCell align="right">Harga Tawar</TableCell>
            <TableCell align="right">Kuantitas</TableCell>
            <TableCell align="right">Harga</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map( (item, i)=> (
            <TableRow key={i}>
              <TableCell><img alt={item.store} src={item.img} className="kopi"/></TableCell>
              <TableCell align="right">{item.store}</TableCell>
              <TableCell align="right">{item.bargain? <Switch id={i} setBargain={handleBargainPrice}/> : <Switch2/>}</TableCell>
              <TableCell align="right">{item.bargainPrice}</TableCell>
              <TableCell align="right">{item.qty}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{ccyFormat(totalPrice(item.qty, item.price))}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={6} />
            <TableCell colSpan={5}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <div align="right">
    <Link to="/Address">
    <Button className="ButtCO" variant="success">Alamat</Button>
    </Link>
    </div>
    </Container>
  )
}