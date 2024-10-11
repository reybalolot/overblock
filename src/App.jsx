import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import UserContext from './context/UserContext';
import SideBar from './components/SideBar';
import DailyPage from './pages/Daily';
import NotesPage from './pages/Notes';
import './App.css';

function App() {

  const [ user, setUser ] = useState({
    id: null,
    isAdmin: null
  });
  const unsetUser = () => {
    localStorage.clear();
    setUser({
      id: null,
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
        isAdmin: null
      })
    }

  }, [])

  return (
    <>
      <UserContext.Provider value={{ user, setUser, unsetUser }}>
        <div className="w-dvh h-dvh flex bg-secondary">
          <SideBar/>
          <Router>
              <Routes>
                <Route path='/' element={<DailyPage/>}/>
                <Route path='/notes' element={<NotesPage/>}/>
              </Routes>
          </Router>
        </div>
      </UserContext.Provider>
    </>
  )
}

export default App
