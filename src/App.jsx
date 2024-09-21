import Sidebar from './components/SideBar';
import './App.css';

function App() {

  return (
    <>
       <div className="flex">
            <Sidebar />
            <div className="flex-1 p-10">
                <h1 className="text-3xl font-bold">Main Content</h1>
                <p className="mt-4">This is where your main content goes.</p>
            </div>
        </div>
    </>
  )
}

export default App
