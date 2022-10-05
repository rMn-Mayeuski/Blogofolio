import  React, { useContext } from 'react';
import { Route, Routes,} from "react-router-dom";
import data from "./SharedLogic/ProjectDate.json";

import Header from './components/Header/Header';
import AddPost from "./Pages/AddPostPage/AddPost";
import MainPage from './Pages/MainPage/MainPage';
import ContentPage from './Pages/ContentPage/ContentPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import SingUpPage from './Pages/SingUpPage/SingUpPage';
import Footer from './components/Footer/Footer';

import "./App.scss";
import SearchPage from './Pages/SearchPage/SearchPage';



const App: React.FC = () => {

  const {results: posts} = data;

  return (
    <>
      <Header/>
      
      <Routes> 
            <Route path='/' element={<SignInPage/>}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/addpost' element={<AddPost/>}/>
            <Route path='/home' element={<MainPage/>}/>
            <Route path='/searchpage' element={<SearchPage/>}/>
            <Route path='/contentpage' element={<ContentPage posts={posts} selectedPost={1}/>}/>
            <Route path='/signup' element={<SingUpPage/>}/>
      </Routes>
      <Footer/>
      
    </>
  );
};

export default App;
