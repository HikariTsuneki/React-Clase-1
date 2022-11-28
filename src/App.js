import React from "react";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Novedades from "./pages/Novedades";
import Libros from "./pages/Libros";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/libros" element={<Libros />} />
          <Route path="/novedades" element={<Novedades />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
