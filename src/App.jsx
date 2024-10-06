import SideBar from './components/SideBar';
import NotesPage from './pages/NotesPage';
import './App.css';

function App() {

  return (
    <>
       <div className="flex">
            <SideBar />
            <NotesPage/>
        </div>
    </>
  )
}

export default App
