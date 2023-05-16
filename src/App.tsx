import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './vues/Layout';
import Home from './vues/Home';
import AdminCompte from './vues/AdminCompte';
import AdminModifCompte from './vues/AdminModifCompte';

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="home" element={<Home/>}/>
          <Route path="compte" element={<AdminCompte/>}/>
          <Route path="modifcompte" element={<AdminModifCompte/>}/>



        </Routes>

      </BrowserRouter>

      <Footer />

    </>
  );
}

export default App;
