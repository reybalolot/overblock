import HourRule from "../components/HourRule";
import WeekRule from "../components/WeekRule";

const DailyPage = () => {

    let cardCols = [];
    let cardRows = [];
    for (let i = 0; i < 12 * 7; i++) {
        cardCols.push(
            <>
                 <div className="h-4 border border-slate-400/[.05] hover:bg-red-300"></div>
            </>
        )
    }
    for (let i = 0; i < 24; i++) {
        cardRows.push(
            <>
                <div className="w-full grid grid-cols-7">
                    {cardCols}
                </div>
            </>
        )
    }

    return (
        <>
        <div className="w-full max-h-full my-2 me-2 rounded-md overflow-y-scroll no-scrollbar bg-primary snap-mandatory snap-y">
            <div className="flex flex-row">
                <HourRule/>
                <div className="w-full">
                    <WeekRule/>
                    <div className="grid grid-rows-[2016]">
                        {cardRows}
                    </div>
                </div>
            </div>
                <div className="h-[80%]"></div>
        </div>
        </>
    )
}

export default DailyPage;
