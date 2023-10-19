
import { useState } from 'react';
import './App.css';

import Register from './components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatHome from './components/ChatHome';
import Login from './components/Login';

function App() {
  const [user,setUser]=useState({})
  const [login,setLogin]=useState(false)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login setLogin={setLogin} setUser={setUser}/>}/>
          <Route path='/register' element={<Register/>}/>
          
          <Route path='/' element={<ChatHome setLogin={setLogin} user={user} login={login}/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
