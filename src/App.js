import React from 'react'
import Header from './components/layout/Header'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
