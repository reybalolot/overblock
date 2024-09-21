const Sidebar = () => {
    return (
        <div className="w-80 h-screen bg-gray-800 text-white flex flex-col">
            <div className="p-4 text-2xl font-bold">To Do</div>
            <nav className="flex-1 px-2 py-4 space-y-2">
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Dashboard</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Profile</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
                <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Logout</a>
            </nav>
        </div>
    );
};

export default Sidebar;
