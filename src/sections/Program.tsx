import type { Component } from "solid-js";

const Program: Component = () => {
    return (
        <>
            <div class="section-title">
                Program
                <p class="text-sm p-2">08.07.2023 - 21.07.2023</p>
            </div>
            <div class="section-body">
                <h2 class="console-title text-green-600">XBOX:</h2>
                <ul>
                    <li>Sekiro: Shadows Die Twice</li>
                    <li>RIMs Racing</li>
                    <li>Burnout Paradise Remastered</li>
                </ul>
                <p class="font-thin p-2">+ NHL 22, FIFA 21</p>
                <h2 class="console-title text-blue-500">PlayStation 5:</h2>
                <ul>
                    <li>Crash Bandicoor 4: Its About Time</li>
                    <li>Puyo Puyo Tetris 2</li>
                    <li>Sonic Frontiers</li>
                </ul>
                <p class="font-thin p-2">
                    + Tekken 7, Mortal Kombat XL, Mortal Kombat 11
                </p>
                <h2 class="console-title text-red-600">Nintendo Switch:</h2>
                <ul>
                    <li>Metroid Prime Remastered</li>
                    <li>Hades</li>
                    <li>Super Mario 3D World + Bowsers</li>
                </ul>
                <p class="font-thin p-2">
                    <strong>ŠPECIÁL JÚL:</strong> Taiko no Tatsujin: Drum 'n'
                    Fun!
                </p>
            </div>
        </>
    );
};

export default Program;
