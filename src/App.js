import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FirstPage from './components/FirstPage';
import Header from './components/Header';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FinalPage from './components/FinalPage';
import './components/Style.css'

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
      </div>
      <Routes>
       <Route path="/" element={<FirstPage />} exact={true}></Route>
       <Route path="/Secondpage" element={<SecondPage />}></Route>
       <Route path="/Thirdpage" element={<ThirdPage />}></Route>
       <Route path="/FinalPage" element={<FinalPage />}></Route>
        </Routes>  
    
    </BrowserRouter>
  );
}

export default App;
