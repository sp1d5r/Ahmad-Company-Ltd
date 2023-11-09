import React from "react";

export default function Clients({ logoSources }) {
    return (
        <section className="bg-white overflow-x-auto py-20">
            <div className={"container flex flex-col items-center gap-5 "}>
                <p className={"text-4xl fancy-font"}>Client List</p>
                <p>A list of clients we've helped bring into the new age</p>
                <div className="flex space-x-10 whitespace-nowrap scroll-smooth justify-center">
                    {logoSources.map((logoSrc, index) => (
                        <img
                            key={index}
                            src={logoSrc}
                            alt={`Client Logo ${index + 1}`}
                            className="inline-block h-12 transform hover:scale-110 transition-transform duration-300" // Set the height to control the size of the logos
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
