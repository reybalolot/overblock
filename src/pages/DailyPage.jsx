import HourRule from "../components/HourRule";
import DailyCard from "../components/dailypage/DailyCard";

const DailyPage = () => {

    return (
        <>
        <div className="w-full max-h-full my-2 me-2 rounded-md overflow-y-scroll bg-primary">
            <div className="flex flex-row">
                <HourRule/>
                <DailyCard/>
            </div>
        </div>
        </>
    )
}

export default DailyPage;
