import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import EditUserScreen from './screens/EditUserScreen';
import ProductListScreen from './screens/ProductListScreen';
import EditProductScreen from './screens/EditProductScreen';

function App() {
  return (
    <Router className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/admin/userlist' element={<UserListScreen />} />
            <Route path='/admin/productlist' element={<ProductListScreen />} />

            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/products/:id' element={<ProductScreen />} exact />
            <Route path='/cart/:id?' element={<CartScreen />} />
            <Route path='/admin/user/:id/edit' element={<EditUserScreen />} />
            <Route
              path='/admin/product/:id/edit'
              element={<EditProductScreen />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
