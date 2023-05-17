import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './vues/Home';
import AdminCompte from './vues/AdminCompte';
import AdminModifCompte from './vues/AdminModifCompte';
import Error404 from './vues/404';
import Connexion from './vues/Connexion';

function App() {
  return (
    <>



      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/pfobs" element={<Home/>}/>
          <Route path="/pfobs/login" element={<Connexion/>}/>
          <Route path="/pfobs/compte" element={<AdminCompte/>}/>
          <Route path="/pfobs/modifcompte" element={<AdminModifCompte/>}/>
          <Route path="/pfobs/*" element={<Error404/>} />
       </Routes>

       <Footer />


      </BrowserRouter>


    </>
  );
}

export default App;
