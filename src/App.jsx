import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import UserContext from './context/UserContext';
import SideBar from './components/SideBar';
import Daily from './pages/Daily';
import Notes from './pages/Notes';
import Kanban from './pages/Kanban';
import './App.css';

function App() {

  const [ user, setUser ] = useState({
    id: null,
    username: null,
    isAdmin: null
  });
  const unsetUser = () => {
    localStorage.clear();
    setUser({
      id: null,
      username: null,
      isAdmin: null
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setUser(jwtDecode(token));
    } else {
      setUser({
        id: null,
        username: null,
        isAdmin: null
      })
    }

  }, [])

  return (
    <>
    <UserContext.Provider value={{ user, setUser, unsetUser }}>
      <div className="w-dvh h-dvh flex bg-neutral-900">
        <Router>
        <SideBar/>
          <Routes>
            <Route path='/' element={<Daily/>}/>
            <Route path='/daily' element={<Daily/>}/>
            <Route path='/notes' element={<Notes/>}/>
            <Route path='/kanban' element={<Kanban/>}/>
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
    </>
  )
}

export default App
