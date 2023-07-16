import type { Component } from "solid-js";

const FindUs: Component = () => {
    return (
        <>
            <div class="section-title">Kde nás nájdete</div>
            <div class="section-body">
                Štúrova 820/44, 903 01 Senec
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3725.127847628184!2d17.406767187769713!3d48.21474704713918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c9ddc6ee63ab5%3A0x2656b6f8eb4b35e0!2sNextGenBar!5e0!3m2!1sen!2ssk!4v1689374177907!5m2!1sen!2ssk"
                    width="100%"
                    height="450"
                    style="border:0;"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    class="mx-auto p-8"
                ></iframe>
            </div>
        </>
    );
};

export default FindUs;
