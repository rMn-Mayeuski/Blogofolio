import  React from 'react';
import { Route, Routes,} from "react-router-dom";

import Header from './components/Header/Header';
import AddPost from "./Pages/AddPostPage/AddPost";
import MainPage from './Pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className='main'>
      <Header/>
      <Routes> 
            <Route path='/' element={<MainPage/>}/>
            <Route path='/addpost' element={<AddPost/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
