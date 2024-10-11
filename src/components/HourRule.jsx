const HourRule = () => {

    const labelArray = [];
    for (let i = 0; i < 24; i++) {
        let hour = 0;
        labelArray.push(
            <div className="h-[12rem] px-1 border-b border-r border-slate-400/[.05] text-center text-sm snap-start" key={i}>
                {i < 10 ? `0${i}`: hour + i}
            </div>
        )
    }

    return (
        <>
        <div>
            <div className="h-10 bg-red-500"></div>
            <div className="h-full grid grid-row-24 grid-cols-1 text-white border-white">
                {labelArray}
            </div>
        </div>
        </>
    )
}

export default HourRule;
