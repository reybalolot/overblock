import SideBar from './components/SideBar';
import Kanban from './pages/Kanban';
// import DailyPage from './pages/DailyPage';
// import NotesPage from './pages/NotesPage';
import './App.css';

function App() {

  return (
    <>
       <div className="w-dvh h-dvh flex bg-secondary">
            <SideBar/>
            <Kanban/>
            {/* <DailyPage/> */}
            {/* <NotesPage/> */}
        </div>
    </>
  )
}

export default App
