import HourRule from "../components/HourRule";
import DailyCard from "../components/dailypage/DailyCard";

const DailyPage = () => {

    let cardArray = []
    for (let i = 0; i < 168; i++) {
        cardArray.push(<DailyCard key={i}/>)
    }

    return (
        <>
        <div className="w-full max-h-full my-2 me-2 rounded-md overflow-y-scroll bg-primary snap-mandatory snap-y">
            {/* <div className="w- text-white px-4 fixed bg-red-500 rounded-ss-md">WEEK GOES HERE</div> */}
            <div className="flex flex-row mt-6">
                <HourRule/>
                <div className="flex flex-col w-full h-full">
                    <div className="w-full grid grid-rows-24 grid-cols-7 gap-1 overflow-hidden">
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
