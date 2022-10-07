import  React, { useContext, useEffect, useState } from 'react';
import { Route, Routes, useParams,} from "react-router-dom";
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
import { IPost } from './components/ListPosts/Test';
import ReserPassPage from './Pages/ResetPassPage/ReserPassPage';
import NewPassPage from './Pages/NewPassPage/NewPassPage';



const App: React.FC = () => {

  const { id } = useParams()

  const [post, setPost] = useState<IPost | null>(null)

  const {results: posts} = data;

  useEffect(() => {
    // @ts-ignore
    const selectedPost = posts.find(p => p.id === +id)
    if (selectedPost) {
        setPost(selectedPost)
    }
}, [post])

  return (
    <>
      <Header/>
        <Routes> 
          <Route path='/' element={<SignInPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/reset' element={<ReserPassPage/>}/>
          <Route path='/newpass' element={<NewPassPage/>}/>
          <Route path='/addpost' element={<AddPost/>}/>
          <Route path='/home' element={<MainPage/>}/>
          <Route path='/searchpage' element={<SearchPage/>}/>
          <Route path='/contentpage' element={<ContentPage posts={post}/>}/>
          <Route path='/contentpage/:id' element={<ContentPage posts={post}/>}/>
          <Route path='/signup' element={<SingUpPage/>}/>
        </Routes>
      <Footer/>
    </>
  );
};

export default App;
