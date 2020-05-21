import React, { Component } from 'react'
import {Container, Row, Col, Button, Card, Badge} from 'react-bootstrap';
import {FormControlLabel, Checkbox, FormGroup} from '@material-ui/core'
import {Link} from 'react-router-dom';
import Modal1 from './Modal1';
import './SearchResult.css';
// import Autocomplete from './AutoComplete';

import Autocomplete from '@material-ui/lab/Autocomplete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const menus = [
  { nama: 'Kopi'},
  { nama: 'Ayam'},
  { nama: 'Kopi Gayo' },
  { nama: 'Kain Tenun'},
  { nama: 'Kain Ikat'},
  { nama: 'Gantungan Kunci'},
  { nama: 'Ikan Bawal'},
  { nama: 'Ikan Mas'},
  { nama: 'Ikan Sepat'},
  { nama: 'Ikan Arwana'},
  { nama: 'Ikan Cupang'},
];


let list=[{
  image: './assets/kopi.jpg',
  nama:'Kopi',
  harga:'200',
  provinsi:'jakarta',
  kategori: 'pertanian',
},
{
  image: './assets/teh.jpg',
  nama:'Teh',
  harga:'500',
  kategori: 'pertambangan'
},
{
  image: './assets/cupang.jpg',
  nama:'Ikan Cupang',
  harga:'500',
  kategori: 'perikanan'
},
{
  image: './assets/bawal.jpg',
  nama:'Ikan Bawal',
  provinsi:'sumbar',
  harga:'500'
},
{
  image: './assets/cupang.jpg',
  nama:'Ikan Cupang',
  provinsi:'aceh',
  harga:'500'
},
{
  image: './assets/koki.jpg',
  nama:'Ikan Koki',
  provinsi:'jakarta',
  harga:'500'
},
{
  image: './assets/tenun.jpg',
  nama:'Kain Tenun',
  harga:'500'
},
{
  image: './assets/ganci.jpg',
  nama:'Gantungan Kunci',
  harga:'500'
},
{
  image: './assets/cupang.jpg',
  nama:'Ikan Cupang',
  harga:'500'
}]
export class SearchResult extends Component {
  state={
    pertanian:true,
    data:list,
    dataFiltered:list,
    perikanan:false,
    pertambangan:false,
    pertanian:false,
    jakarta:true,
    aceh:false,
    sumbar:false,
    jakarta:false

  }
  handleChange = (a) =>{
    let {data, pertanian, perikanan, pertambangan} = this.state
    if (a==='pertanian' && pertanian===false){
      console.log('helo')
      let filtered= data.filter(item =>{
        return item.kategori==='pertanian'
      })
      this.setState({
        dataFiltered:filtered,
        pertanian:true
      })
    }
    else if (a==='pertambangan' && pertambangan===false){
      let filtered= data.filter(item =>{
        return item.kategori==='pertambangan'
      })
      this.setState({
        dataFiltered:filtered,
        pertambangan:true
      })
    }
    else if (a==='perikanan' && perikanan===false){
      let filtered= data.filter(item =>{
        return item.kategori==='perikanan'
      })
      this.setState({
        dataFiltered:filtered,
        perikanan:true
      })
    }
    else if(a==='pertanian'){
      this.setState({
        dataFiltered:data,
        pertanian:false
      })
    }
    else if (a==='pertambangan'){
      this.setState({
        dataFiltered:data,
        pertambangan:false
      })
    }
    else if (a==='perikanan'){
      this.setState({
        dataFiltered:data,
        perikanan:false
      })
    }
    else {
      this.setState({
        dataFiltered:data
      })
    }
  }

  handleChang = (b) =>{
    let {data, jakarta, sumbar, aceh} = this.state
    if (b==='jakarta' && jakarta===false){
      console.log('helo')
      let filtered= data.filter(item =>{
        return item.provinsi==='jakarta'
      })
      this.setState({
        dataFiltered:filtered,
        jakarta:true
      })
    }
    else if (b==='sumbar' && sumbar===false){
      let filtered= data.filter(item =>{
        return item.provinsi==='sumbar'
      })
      this.setState({
        dataFiltered:filtered,
        sumbar:true
      })
    }
    else if (b==='aceh' && aceh===false){
      let filtered= data.filter(item =>{
        return item.provinsi==='aceh'
      })
      this.setState({
        dataFiltered:filtered,
        aceh:true
      })
    }
    else if(b==='jakarta'){
      this.setState({
        dataFiltered:data,
        jakarta:false
      })
    }
    else if (b==='sumbar'){
      this.setState({
        dataFiltered:data,
        sumbar:false
      })
    }
    else if (b==='aceh'){
      this.setState({
        dataFiltered:data,
        aceh:false
      })
    }
    else {
      this.setState({
        dataFiltered:data
      })
    }
  }


  handleSearch = () => {
    console.log('Hello')
  }


  render() {
    let {data, dataFiltered} = this.state
    return (
      <Container>
        <Row>
          <Col xs={4}>
            <Card className='CardSR'>
              <Badge variant="dark">Search</Badge>
              <Autocomplete
      id="highlights-demo"
      style={{ width: 300 }}
      options={menus}
      onChange = {() => this.handleSearch()}
      getOptionLabel={option => option.nama}
      renderInput={params => (
        <TextField {...params} label="Highlights" variant="outlined" fullWidth margin="normal" />
      )}
      renderOption={(option, { inputValue }) => {
        const matches = match(option.nama, inputValue);
        const parts = parse(option.nama, matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
              <Badge variant="dark">Kategori</Badge>
              <FormControlLabel
                control={<Checkbox onChange={()=>this.handleChange('pertanian')}/>}
                label="Pertanian"
              />
              <FormControlLabel
                control={<Checkbox onChange={()=>this.handleChange('pertambangan')}/>}
                label="Pertambangan"
              />
              <FormControlLabel
                control={<Checkbox onChange={()=>this.handleChange('perikanan')}/>}
                label="Perikanan"
              />
              <Badge variant="dark">Kategori</Badge>
              <FormControlLabel
                control={<Checkbox onChange={()=>this.handleChang('jakarta')} />}
                label="DKI Jakarta"
              />
              <FormControlLabel
                control={<Checkbox onChange={()=>this.handleChang('sumbar')}/>}
                label="Sumatera Barat"
              />
              <FormControlLabel
                control={<Checkbox onChange={()=>this.handleChang('aceh')}/>}
                label="Aceh"
              />
            </Card>
          </Col>
 
          <Col xs={8}>
            <Row className="RowSR">
              {dataFiltered.map((item, i)=>(
                <Col xs={12} md={3}>
                  <Link to='/Product'>
                    <Card className="CardH">
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Text>
                          <p>{item.nama}</p>
                          <p>{item.harga}</p>
                        </Card.Text>        
                        <ShoppingCartIcon> </ShoppingCartIcon>
                        <FavoriteIcon> </FavoriteIcon>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SearchResult
