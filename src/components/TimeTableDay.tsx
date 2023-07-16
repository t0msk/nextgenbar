import type { Component } from "solid-js";

interface Props {
    day: string;
    time: string;
}

const TimeTableDay: Component<Props> = ({ day, time }) => {
    return (
        <>
            <div class="flex text-base justify-between m-auto mt-2 sm:w-5/12 w-10/12 min-w-fit hover:bg-white hover:bg-opacity-10">
                <div>
                    <span class="font-bold text-gray-400">{day}</span>
                </div>
                <div>{time}</div>
            </div>
        </>
    );
};

export default TimeTableDay;
