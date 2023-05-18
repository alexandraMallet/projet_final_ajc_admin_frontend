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
import ArticleCreate from './vues/ArticleCreate';
import ArticleVue from './vues/Article';
import ArticleUpdate from './vues/ArticleUpdate';

import ClientsVue from './vues/ClientsVue';
import ClientVue from './vues/Client';
import ClientCreate from './vues/ClientCreate';
import ClientUpdate from './vues/ClientUpdate';

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

          <Route path="/pfobs/articles" element={<ArticlesVue/>}/>
          <Route path="/pfobs/articlecreate" element={<ArticleCreate/>}/>
          <Route path="/pfobs/article/:id" element={<ArticleVue/>}/>
          <Route path="/pfobs/updatearticle/:id" element={<ArticleUpdate/>}/>

          <Route path="/pfobs/clients" element={<ClientsVue/>}/>
          <Route path="/pfobs/clientcreate" element={<ClientCreate/>}/>
          <Route path="/pfobs/client/:id" element={<ClientVue/>}/>
          <Route path="/pfobs/updateclient/id" element={<ClientUpdate/>}/>


       </Routes>

       <Footer />


      </BrowserRouter>


    </>
  );
}

export default App;
