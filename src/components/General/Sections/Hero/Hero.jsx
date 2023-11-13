import React from "react";
import useSlidingEffect from "../../../../contexts/useSlidingEffect/useSlidingEffect";
import useFadeInEffect from "../../../../contexts/useFadInEffect/useFadeInEffect";

export default function Hero(){
    const mainHeroText = useSlidingEffect(<h1 className="text-5xl mb-4 fancy-font">Elevate Your Digital Presence</h1>,"bottom", 0.5, "0.5s")
    const heroDescriptionText = useSlidingEffect(<p className="text-xl mb-8">Crafting bespoke web experiences with a curated library of React components, Ahmad Company Ltd empowers your business to launch sophisticated solutions swiftly and efficiently.</p>, "bottom", 0.7, "0.5s", "0.2s")
    const heroActionButton = useFadeInEffect(<button className="bg-white text-blue-950 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
        Explore Our Work
    </button>,
        0.5, "2s", "0.3s")

    return (
        <div className="bg-blue-950 text-white">
            <div className="container mx-auto p-20 text-left min-h-[80vh] flex items-center">
                <div className={"md:max-w-[600px] max-w-full flex flex-col items-start justify-center"}>
                    {mainHeroText}
                    {heroDescriptionText}
                    {heroActionButton}
                </div>
            </div>
        </div>
    );
}