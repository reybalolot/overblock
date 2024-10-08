const HourRule = () => {

    const labelArray = [];
    for (let i = 0; i < 24; i++) {
        let hour = 0;
        labelArray.push(
            <div className="h-[12rem] p-1 rounded border border-white text-center text-sm snap-start">
                {i < 10 ? `0${i}`: hour + i}
            </div>
        )
    }

    return (
        <>
        <div className="h-full mx-2 grid grid-row-24 grid-cols-1 gap-1 text-white">
            {labelArray}
        </div>
        </>
    )
}

export default HourRule;
