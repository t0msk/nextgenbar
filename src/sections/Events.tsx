import type { Component } from "solid-js";

import "solid-slider/slider.css";
import { Slider } from "solid-slider";

import Tekken from "../../assets/images/events/tekken.jpg";
import Standup from "../../assets/images/events/standup.jpg";

const sliderOptions = { loop: true, duration: 1000 };

const Events: Component = () => {
    return (
        <>
            <div class="section-title">Eventy</div>
            <div class="mx-auto">
                <Slider options={sliderOptions}>
                    <div class="slide slide1">
                        <div class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <h5 class="mb-2 text-2xl tracking-tight text-gray-900">
                                Tekken 7 Turnaj
                            </h5>
                            <img class="p-2 mx-auto" src={Tekken} />
                            <p class="text-gray-700">Kedy? 15.07.2023</p>
                            <p class="text-gray-700">Registrácie od 19:00</p>
                            <p class="text-gray-700">
                                Prvá cena: 10€ na bare + japonské prekvapenie,
                                druhá cena: japonské prekvapenie, tretia cena:
                                fotka s vedením baru :)
                            </p>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                            <h5 class="mb-2 text-2xl tracking-tight text-gray-900">
                                Standup
                            </h5>
                            <img class="p-2 mx-auto" src={Standup} />
                            <p class="text-gray-700">
                                Kedy? 28.07.2023 o 19:00
                            </p>
                            <p class="text-gray-700">Vstupné 7€</p>
                            <p class="text-gray-700">
                                Zabávať vás budú Jakub Zitron Ť, Michal
                                Laurinec, ?artin Hatala, Vladimir Mikuláš, Matúš
                                Toderiška a Verča :)
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

export default Events;
