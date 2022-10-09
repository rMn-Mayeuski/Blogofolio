import  React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import AppRouter from './SharedLogic/AppRouter';
import "./App.scss";

const App: React.FC = () => {

  return (
    <>
      <Header/>
        <AppRouter/>
      <Footer/>
    </>
  );
};

export default App;
