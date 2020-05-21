import React from 'react';
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
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, harga) {
  return qty * harga;
}

function createRow(prod, toko, tawar, qty, harga) {
  const price = priceRow(qty, harga);
  return { prod, toko, qty, tawar, harga, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((total, i) => total + i, 0);
}

const rows = [
  createRow(<img src="./assets/kopi.jpg" className="kopi"></img>, 'verina',<Switch/>, 4, 2500),
  createRow(<img src="./assets/kopi.jpg" className="kopi"></img>, 'sabar',<Switch2/>, 10, 5000),
  createRow(<img src="./assets/kopi.jpg" className="kopi"></img>, 'subur',<Switch/>, 2, 1250),
];

const invoiceSubtotal = subtotal(rows);
export default function SpanningTable() {
  const classes = useStyles();

  return (
    <Container>
    <TableContainer component={Paper} className="TabCon">
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={5}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>prod</TableCell>
            <TableCell align="right">toko</TableCell>
            <TableCell align="right">tawar</TableCell>
            <TableCell align="right">qty</TableCell>
            <TableCell align="right">harga</TableCell>
            <TableCell align="right">total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.prod}>
              <TableCell>{row.prod}</TableCell>
              <TableCell align="right">{row.toko}</TableCell>
              <TableCell align="right">{row.tawar}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.harga}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={5} />
            <TableCell colSpan={4}>Subtotal</TableCell>
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
  );
}