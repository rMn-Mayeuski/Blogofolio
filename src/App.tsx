import  React from 'react';
import Header from './components/Header/Header';
import Tabs from './components/Tabs/Tabs';
import Title from './components/Title/Title';
import AddPost from "./Pages/AddPostPage/AddPost"
import "./App.scss"
import ListPosts from './components/ListPosts/ListPosts';
import { Route, Routes,} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className='main'>
      <Header/>
      <Title/>
      <Tabs/>
      <ListPosts/>
      <Routes> 
            <Route path='/addpost' element={<AddPost/>}/>
      </Routes>
    </div>
  );
};

export default App;
