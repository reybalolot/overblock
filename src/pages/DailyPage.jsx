import HourRule from "../components/HourRule";

const DailyPage = () => {

    return (
        <>
        <div className="w-dvw h-dvh min-h-full overflow-y-scroll">
            <div className="flex flex-row min-h-dvh">
                <HourRule/>
                <div className="me-2">
                    <div className="w-5 h-1/6 text-center text-xs">a</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DailyPage;
