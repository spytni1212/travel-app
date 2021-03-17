import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import Footer from './components/Footer/Footer';
import CountryContainer from './components/Country/CountryContainer';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
      <Header />
      <Route path = '/' component = {MainContainer} exact/>
      <Route path = '/country/:countryId' component = {CountryContainer} />
      <Footer />
    </BrowserRouter>  
    </div>
     
  );
}
export default App;
