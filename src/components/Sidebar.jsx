import { MdOutlineEditNote, MdChecklist, MdAttachFile } from "react-icons/md";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";
import { useState } from "react";

const SideBarNav = ({icon, label, isHidden}) => {

    return (
        <>
            <div className="sidebar-icon flex flex-row hover:bg-primary rounded-md" style={{display:isHidden?'flex':'none'}}>
                <div className="flex-shrink flex items-center justify-center px-2">
                    {icon}
                </div>
                <div className="flex-grow">
                    <a href="#" className="block p-2 font-bold">{label}</a>
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
                <div className="text-2xl font-bold px-4 p-1">To Do</div>
                <div className="flex-1 px-2 py-2 space-y-2">
                    <SideBarNav icon={<MdOutlineEditNote size={'20'}/>} label={'NOTES'} isHidden={toggle}/>
                    <SideBarNav icon={<MdChecklist size={'20'}/>} label={'CHECKLIST'} isHidden={toggle}/>
                    <SideBarNav icon={<MdAttachFile size={'20'}/>} label={'ATTACHMENTS'} isHidden={toggle}/>
                </div>
            </div>
            </div>

            <div className="h-screen bg-secondary text-white">
                <div className="w-full p-3 hover:bg-primary anim-300" onClick={() => toggleSideBar()}>
                    {!toggle ? <FaCaretRight className="anim" /> : <FaCaretLeft className="anim"/>}
                </div>
                <div className="h-auto flex justify-center">
                    😊
                </div>
            </div>
        </>
    );
};

export default SideBar;
