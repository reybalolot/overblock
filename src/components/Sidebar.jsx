import { useState } from "react";
import { Link } from "react-router-dom";
import { MdEditDocument, MdDoneAll, MdOutlineCalendarMonth, MdFilePresent, MdOutlineStar  } from "react-icons/md";



const SideBarNav = ({icon, link, label, isHidden}) => {

    return (
        <>
        <Link to={link} className="flex text-sm">
            <div className="sidebar-icon w-full flex flex-row rounded-md text-white hover:bg-accent anim-300">
                <div className="flex-shrink flex items-center justify-center sm:p-0 m-2 md:p-2 rounded-md hover:bg-accent hover:scale-110 anim-300">
                    {icon}
                </div>
                <div className="flex flex-grow items-center text-xs anim-500 p-1 origin-left" style={{scale:isHidden?'1':'0'}}>
                    {label}
                </div>
            </div>
        </Link>
        </>
    )
}

const SideBar = () => {
    const [toggle, setToggle] = useState(false);

    function toggleSideBar() {
        if (toggle) setToggle(false);
        if (!toggle) setToggle(true);
    }

    return (
        <>
            <div className="bg-primary rounded-md m-2 anim-300 border border-secondary w-min md:w-auto">
                <button className="flex h-8 text-xs  text-white font-bold text-center items-center py-3 px-1 rounded-md select-none hover:bg-accent anim-300"
                    style={{margin:toggle?'.5rem .5rem':'.5rem 0.3rem'}}
                    // , width:toggle?'12.5rem':'auto'
                    onClick={() => toggleSideBar()}>
                    TO DO
                </button>
                <div className="border mx-3"></div>
                <div className="flex flex-col flex-grow space-y-2 m-2 m-0 anim-300" style={{width:toggle?'200px':'0px'}}>
                    <SideBarNav link={'/calendar'} icon={<MdOutlineCalendarMonth size={'20'}/>} label={'Calendar'} isHidden={toggle}/>
                    <SideBarNav link={'/daily'} icon={<MdOutlineStar  size={'20'}/>} label={'Daily'} isHidden={toggle}/>
                    <SideBarNav link={'/notes'} icon={<MdEditDocument size={'20'}/>} label={'Notes'} isHidden={toggle}/>
                    <SideBarNav link={'/kanban'} icon={<MdDoneAll size={'20'}/>} label={'Checklist'} isHidden={toggle}/>
                    <SideBarNav link={'/kanban'} icon={<MdFilePresent size={'20'}/>} label={'Attachments'} isHidden={toggle}/>
                </div>
            </div>

        </>
    );
};

export default SideBar;
