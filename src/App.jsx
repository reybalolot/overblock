import SideBar from './components/SideBar';
import DailyPage from './pages/DailyPage';
// import NotesPage from './pages/NotesPage';
import './App.css';

function App() {

  return (
    <>
       <div className="flex bg-secondary">
            <SideBar/>
            <DailyPage/>
            {/* <NotesPage/> */}
        </div>
    </>
  )
}

export default App
