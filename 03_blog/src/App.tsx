import React, { Fragment } from 'react';
import './App.css';
import { Footer } from './components/Home/Footer/Footer';
import { Header } from './components/Home/Header/Header';
import { Main } from './components/Home/Main/Main';

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
