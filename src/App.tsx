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

import ArticlesVue from './vues/ArticlesVue';
import ArticleVue from './vues/ArticleVue';
import ArticleUpdateVue from './vues/ArticleUpdateVue';
import ArticleCreateVue from './vues/ArticleCreateVue';

import ClientsVue from './vues/ClientsVue';
import ClientVue from './vues/Client';
import ClientCreate from './vues/ClientCreate';
import ClientUpdate from './vues/ClientUpdate';

import CommandesVue from './vues/CommandesVue';
import CommandeUpdateVue from './vues/CommandeUpdateVue';
import CommandeVue from './vues/CommandeVue';

function App() {
  return (
    <>



      <BrowserRouter>
      <Header />

        <Routes>
          <Route path="/pfobs" element={<Home/>}/>
          <Route path="/pfobs/login" element={<Connexion/>}/>
          <Route path="/pfobs/compte" element={<AdminCompte/>}/>
          <Route path="/pfobs/updateadmin/:id" element={<AdminModifCompte/>}/>
          <Route path="/pfobs/*" element={<Error404/>} />

          <Route path="/pfobs/articles" element={<ArticlesVue/>}/>
          <Route path="/pfobs/articlecreate" element={<ArticleCreateVue/>}/>
          <Route path="/pfobs/article/:id" element={<ArticleVue/>}/>
          <Route path="/pfobs/articleupdate/:id" element={<ArticleUpdateVue/>}/>

          <Route path="/pfobs/clients" element={<ClientsVue/>}/>
          <Route path="/pfobs/clientcreate" element={<ClientCreate/>}/>
          <Route path="/pfobs/client/:id" element={<ClientVue/>}/>
          <Route path="/pfobs/updateclient/:id" element={<ClientUpdate/>}/>


          <Route path="/pfobs/commandes" element={<CommandesVue/>}/>
          <Route path="/pfobs/commande/:id" element={<CommandeVue/>}/>
          <Route path="/pfobs/updatecommande/:id" element={<CommandeUpdateVue/>}/>



       </Routes>

       <Footer />


      </BrowserRouter>


    </>
  );
}

export default App;
