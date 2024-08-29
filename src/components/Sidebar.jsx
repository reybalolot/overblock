import Titlebar from "./Titlebar";
import Note from "./Note";
import Checklist from "./Checklist";

function Sidebar() {
    return (
        <div className="sidebar">
            <Titlebar />
            <Note/>
            <Checklist />
        </div>
    )
}

export default Sidebar;
