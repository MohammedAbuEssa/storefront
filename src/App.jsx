import React,{useEffect} from 'react'
import Header from './Components/header'
import Main from './Components/main'
import Navbar from './Components/navbar'
import ShoppingList from './Components/shoppingList'
import Item from './Components/item'
import Basket from './Components/basket'
import { connect } from 'react-redux'
import {getApiData} from './store/actions'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'


function App(props) {
  useEffect(()=>{
    props.getApiData()
  },[])
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <Header/>
          <ShoppingList/> 
          <Navbar/>
          <Main/>
          </>
        }/>
        <Route path='/item/:id' element={
          <>
          <Header/>
          <ShoppingList/>
          <Item/>
          </>
        }/>
        <Route path='/basket' element={
          <>
          <Header/>
          <Basket/>
          </>
        }/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

const mapStateToProps = (state) => ({
  storeState: state.storeState
})
const mapDispatchToProps = {getApiData}
export default connect(mapStateToProps,mapDispatchToProps)(App);
