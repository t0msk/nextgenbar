import type { Component } from "solid-js";

import TimeTableDay from "../components/TimeTableDay";

const TimeTable: Component = () => {
    return (
        <>
            <div class="section-title">Otváracie hodiny</div>
            <TimeTableDay day="Pondelok" time="16:00 - 22:00" />
            <TimeTableDay day="Utorok" time="16:00 - 22:00" />
            <TimeTableDay day="Streda" time="16:00 - 22:00" />
            <TimeTableDay day="Štvrtok" time="16:00 - 22:00" />
            <TimeTableDay day="Piatok" time="16:00 - 22:00" />
            <TimeTableDay day="Sobota" time="10:00 - 22:00" />
            <TimeTableDay day="Nedeľa" time="10:00 - 22:00" />
        </>
    );
};

export default TimeTable;
