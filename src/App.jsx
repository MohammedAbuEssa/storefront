import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CategoryList from './Components/Categories/Categories';
import Products from './Components/Products/Products';
import { Provider } from 'react-redux';
import store from './Store/index';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<CategoryList/>} />
            <Route path="/products/:categoryx" element={<Products />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
