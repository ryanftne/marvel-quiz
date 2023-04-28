import '../../App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header';
import Welcome from '../Welcome';
import Landing from '../Landing';
import Login from '../Login';
import SignUp from '../SignUp';
import Footer from '../Footer';
import ErrorPage from '../ErrorPage';
import React from 'react';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
      <Route exact path='/' element={<Landing/>} />
      <Route path='/welcome' element={<Welcome/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route element={<ErrorPage/>} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
