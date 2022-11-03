import  React, { FC } from 'react';
import {useSelector} from "react-redux";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ModalWindow from '../components/ModalWindow/ModalWindow';

import AppRouter from '../SharedLogic/AppRouter';
import "./App.scss";

const App: FC = () => {

  const {selectedCard} = useSelector((state: any) => state.selectedCard);

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
