import React from "react";

export default function Hero(){
    return (
        <div className="bg-blue-950 text-white">
            <div className="container mx-auto p-20 text-left min-h-[80vh] flex items-center">
                <div className={"md:max-w-[600px] max-w-full flex flex-col items-start justify-center"}>
                    <h1 className="text-5xl mb-4 fancy-font">Elevate Your Digital Presence</h1>
                    <p className="text-xl mb-8">Crafting bespoke web experiences with a curated library of React components, Ahmad Company Ltd empowers your business to launch sophisticated solutions swiftly and efficiently.</p>
                    <button className="bg-white text-blue-950 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                        Explore Our Work
                    </button>
                </div>
            </div>
        </div>
    );
}