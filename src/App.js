import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Navigation from './components/Navigation/navigation';
import Profil from './components/Content/profil';
import Footer from './components/Footer/footer';

const App = () => (
  <div className="app">
    <Header />
    <Navigation />
    <Profil />
    <Footer />
  </div>
);

export default App;
