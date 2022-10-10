import  React from 'react';
import {useSelector} from "react-redux";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import AppRouter from '../SharedLogic/AppRouter';
import "./App.scss";
import ModalWindow from '../components/ModalWindow/ModalWindow';

const App: React.FC = () => {

      // @ts-ignore
      const { selectedCard } = useSelector(state => state.selectedCard);

  return (
    <>
      <Header/>
        <AppRouter/>
      <Footer/>
      {!!selectedCard?.id && <ModalWindow />}
    </>
  );
};

export default App;
