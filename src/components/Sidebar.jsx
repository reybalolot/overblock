import { MdEditDocument, MdDoneAll, MdOutlineCalendarMonth, MdFilePresent, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useState } from "react";

const SideBarNav = ({icon, label, isHidden}) => {

    return (
        <>
            <div className="sidebar-icon flex flex-row hover:bg-primary rounded-md" style={{display:isHidden?'flex':'none'}}>
                <div className="flex-shrink flex items-center justify-center px-2">
                    {icon}
                </div>
                <div className="flex-grow">
                    <a href="#" className="block p-2 text-xs">{label}</a>
                </div>
            </div>
        </>
    )
}

const SideBar = () => {
    const [toggle, setToggle] = useState(true);

    function toggleSideBar() {
        if (toggle) setToggle(false);
        if (!toggle) setToggle(true);
    }

    return (
        <>
            <div className="anim-300" style={{width:toggle?'200px':'0px'}}>
            <div className="flex flex-col top-0 h-screen bg-secondary text-white">
                <div className="text-xl font-bold pt-2 px-4 p-1" style={{display:toggle?'block':'none'}}>To Do</div>
                <div className="flex-1 px-2 py-2 space-y-2">
                    <SideBarNav icon={<MdOutlineCalendarMonth size={'20'}/>} label={'Calendar'} isHidden={toggle}/>
                    <SideBarNav icon={<MdEditDocument size={'20'}/>} label={'Notes'} isHidden={toggle}/>
                    <SideBarNav icon={<MdDoneAll size={'20'}/>} label={'Checklist'} isHidden={toggle}/>
                    <SideBarNav icon={<MdFilePresent size={'20'}/>} label={'Attachments'} isHidden={toggle}/>
                </div>
            </div>
            </div>

            <div className="h-screen bg-secondary text-white">
                <div className="w-full rounded-md m-1 p-2 hover:bg-primary anim-300" onClick={() => toggleSideBar()}>
                    {!toggle ? <MdKeyboardDoubleArrowRight className="anim" /> : <MdKeyboardDoubleArrowLeft className="anim"/>}
                </div>
                <div className="h-auto flex justify-center text-xs p-2">24</div>
                <div className="h-auto flex justify-center text-xs p-2">23</div>
                <div className="h-auto flex justify-center text-xs p-2">22</div>
                <div className="h-auto flex justify-center text-xs p-2">21</div>
                <div className="h-auto flex justify-center text-xs p-2">20</div>
                <div className="h-auto flex justify-center text-xs p-2">19</div>
                <div className="h-auto flex justify-center text-xs p-2">18</div>
                <div className="h-auto flex justify-center text-xs p-2">17</div>
            </div>
        </>
    );
};

export default SideBar;
