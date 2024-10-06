import SideBar from './components/SideBar';
import './App.css';

function App() {

  return (
    <>
       <div className="flex">
            <SideBar />
            <div className="flex-1 p-10 text-black">
                <h1 className="text-3xl font-bold">Main Content</h1>
                <p className="mt-4">This is where your main content goes.</p>
            </div>
        </div>
    </>
  )
}

export default App
