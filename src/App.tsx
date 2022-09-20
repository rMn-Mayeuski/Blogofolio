import  React from 'react';
import { Route, Routes,} from "react-router-dom";

import Header from './components/Header/Header';
import AddPost from "./Pages/AddPostPage/AddPost";
import MainPage from './Pages/MainPage/MainPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import Footer from './components/Footer/Footer';

import "./App.scss";
import ContentPage from './Pages/ContentPage/ContentPage';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Routes> 
            <Route path='/' element={<MainPage/>}/>
            <Route path='/addpost' element={<AddPost/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/contentpage' element={<ContentPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
