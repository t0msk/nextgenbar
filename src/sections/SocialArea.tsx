import type { Component } from "solid-js";

const SocialArea: Component = () => {
    return (
        <>
            <div class="section-title">Naše sociálne siete</div>
            <div class="flex justify-center pt-10 pb-20">
                <a
                    href="https://www.facebook.com/profile.php?id=100092184429421"
                    target="_blank"
                >
                    <i class="fa-brands fa-facebook fa-3x sm:mx-5 mx-2 text-white hover:text-[#0de0e7]"></i>
                </a>
                <a href="https://www.instagram.com/nextgenbar" target="_blank">
                    <i class="fa-brands fa-instagram fa-3x sm:mx-5 mx-2 text-white hover:text-[#f770f3]"></i>
                </a>
                <a
                    href="https://www.youtube.com/channel/UCwojaC6sumQEfgzRjWFE7Cg"
                    target="_blank"
                >
                    <i class="fa-brands fa-youtube fa-3x sm:mx-5 mx-2 text-white hover:text-[#0de0e7]"></i>
                </a>
                <a href="https://www.twitch.tv/nextgenbar" target="_blank">
                    <i class="fa-brands fa-twitch fa-3x sm:mx-5 mx-2 text-white hover:text-[#f770f3]"></i>
                </a>
                <a
                    href="https://www.patreon.com/NextGenBarSenec"
                    target="_blank"
                >
                    <i class="fa-brands fa-patreon fa-3x sm:mx-5 mx-2 text-white hover:text-[#0de0e7]"></i>
                </a>
            </div>
        </>
    );
};

export default SocialArea;
