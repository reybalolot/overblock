const DailyCard = ({content, colStart}) => {
    return (
        <>
            <div className="max-w-pros h-[12rem] py-1 text-center text-white text-3xl rounded overflow-hidden border border-gray-500 hover:bg-slate-500 anim-300"
                style={{gridColumnStart:colStart}}>
                {content}
            </div>
        </>
    )
}

export default DailyCard;
