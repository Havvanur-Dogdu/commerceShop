import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import HeaderMenu from './components/HeaderMenu'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ProductByCategoryScreen from './screens/ProductByCategoryScreen'
import ProductByFilterScreen from './screens/ProductByFilterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import AllProductScreen from './screens/AllProductScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import ContactScreen from './screens/ContactScreen'
import LegalAndPrivacyScreen from './screens/LegalAndPrivacyScreen'
import CustomerServiceScreen from './screens/CustomerServiceScreen'
import TeslimatScreen from './screens/TeslimatScreen'
import IadelerScreen from './screens/IadelerScreen'
import ChatBox from './components/ChatBot'


const App = () => {
  return (
    <Router>
      <Header />
      <HeaderMenu />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/all-product' component={AllProductScreen} />
          <Route path='/contact' component={ContactScreen} />
          <Route path='/legal-and-privacy' component={LegalAndPrivacyScreen} />
          <Route path='/customer-service' component={CustomerServiceScreen} />
          <Route path='/teslimat' component={TeslimatScreen} />
          <Route path='/iadeler' component={IadelerScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/productlist' component={ProductListScreen} exact />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen} exact
          />
          <Route path='/admin/orderlist' component={OrderListScreen} />
          <Route path='/admin/products/:id/edit' component={ProductEditScreen} />
          <Route path='/category/:category' component={ProductByCategoryScreen} exact />
          <Route path='/page/:pageNumber/category/:category/filter/:filter' component={ProductByFilterScreen} exact />
          <Route path='/category/:category/filter/:filter' component={ProductByFilterScreen} exact />

          <Route path='/page/:pageNumber/category/:category' component={ProductByCategoryScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber/category/:category' component={ProductByCategoryScreen} exact/>
          <Route path='/search/:keyword/page/:pageNumber/category/:category/filter/:filter' component={ProductByFilterScreen}/>
          <Route path='/filter/:filter' component={ProductByFilterScreen} exact />
          <Route path='/page/:pageNumber/filter/:filter' component={ProductByFilterScreen} exact />
          <Route path='/search/:keyword/page/:pageNumber/filter/:filter' component={ProductByFilterScreen} />

          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route path='/' component={HomeScreen} exact />
        </Container>
        <Route path='/about-us' component={AboutUsScreen} />
      </main>
      <Footer />
      <ChatBox />
    </Router>
  )
}

export default App
