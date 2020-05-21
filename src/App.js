import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/CustomNavbar';
import ForgetPass from './components/ForgetPass';
import Product from './components/Product';
import Cart from './components/Cart';
import Address from './components/Address';
import SearchResult from './components/SearchResult';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer';
import Wishlist from './components/Wishlist'
import cartReducer from './reducers/cartReducer'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
const store = createStore(cartReducer)

function App() {
  return (
  <Provider store={store}>
   <Router>
   <div>     
    <Navbar />
    <Route exact path='/' component={Home} />
    <Route path='/Login' component={Login} />    
    <Route path='/Register' component={Register} />
    <Route path='/ForgetPass' component={ForgetPass} />
    <Route path='/Product' component={Product}/>
    <Route path='/Cart' component={Cart}/>
    <Route path='/Address' component={Address}/>
    <Route path='/SearchResult' component={SearchResult}/>
    <Route path='/EditProfile' component={EditProfile}/>
    <Route path='/Wishlist' component={Wishlist}/>
    <Footer/>
   </div>
  </Router>
  </Provider>
  );
}

export default App;
