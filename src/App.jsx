import SideBar from './components/SideBar';
import NotesPage from './pages/NotesPage';
import './App.css';

function App() {

  return (
    <>
       <div className="flex bg-slate-950">
            <SideBar/>
            <NotesPage/>
        </div>
    </>
  )
}

export default App
