import type { Component } from "solid-js";

import logo from "../assets/images/next-gen_logo.svg";

import TimeTable from "./sections/TimeTable";
import SocialArea from "./sections/SocialArea";
import AboutUs from "./sections/AboutUs";
import FindUs from "./sections/FindUs";
import Events from "./sections/Events";
import Program from "./sections/Program";

const App: Component = () => {
    return (
        <main class="text-white font-russo container mx-auto max-w-[768px]">
            <img class="w-full p-5 mx-auto" src={logo} />
            <AboutUs />
            <TimeTable />
            <Program />
            <Events />
            <FindUs />
            <SocialArea />
        </main>
    );
};

export default App;
