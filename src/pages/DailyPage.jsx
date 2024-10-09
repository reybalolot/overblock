import HourRule from "../components/HourRule";
import DailyCard from "../components/dailypage/DailyCard";

const DailyPage = () => {

    let cardArray = []
    for (let i = 0; i < 24; i++) {
        cardArray.push(
            <>
                <div className="w-[200%] flex flex-row justify-start">
                    <DailyCard key={i} content={i}/>
                    <DailyCard key={i+1} content={i+1}/>
                    <DailyCard key={i+2} content={i+2}/>
                    <DailyCard key={i+3} content={i+3}/>
                    <DailyCard key={i+4} content={i+4}/>
                    <DailyCard key={i+5} content={i+5}/>
                    <DailyCard key={i+6} content={i+6}/>
                </div>
            </>
        )
    }

    return (
        <>
        <div className="w-full max-h-full my-2 me-2 rounded-md overflow-y-scroll no-scrollbar bg-primary snap-mandatory snap-y">
            <div className="w- text-white px-4 snap-start bg-red-500 rounded-ss-md">WEEK GOES HERE</div>
            <div className="flex flex-row mt-6">
                <HourRule/>
                <div className="flex flex-col h-full w-full">
                    <div className="max-w-full grid grid-rows-24 grid-cols-1 gap-1 overflow-x-scroll no-scrollbar snap-mandatory snap-x">
                        {cardArray}
                    </div>
                </div>
            </div>
                <div className="h-[80%]"></div>
        </div>
        </>
    )
}

export default DailyPage;
