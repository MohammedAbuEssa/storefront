import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Components/Header/Header"
import Footer from './Components/Footer/Footer'
import Categories from "./Components/Categories/Categories.jsx"
import { Provider } from "react-redux";
import store from './Store/index';

function App() {
  return <>
 <Provider store={store}>  
 <Header/>
  <Categories/>
  <Footer/>
  </Provider>
  </>
}

export default App
