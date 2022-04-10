import React from 'react';
import "./assets/css/style.css";
import About from './components/About';
import AddPage from './components/AddPage';
import Counter from './components/Counter';
import Future from './components/Future';
import Header from './components/Header';
import Hero from './components/Hero';
const App = () => {
  return (
    <>
      
    <Header/>
    <Hero/>
    <About/>
    <Future/>
    <Counter/>
    <AddPage/>

    </>
  );
};

export default App;