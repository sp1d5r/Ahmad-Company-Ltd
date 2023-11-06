import React from "react";

export default function Hero(){
    return (
        <div className="bg-blue-950 text-white">
            <div className="container mx-auto p-20 text-left min-h-[80vh] flex flex-col items-start justify-center">
                <h1 className="text-5xl font-bold mb-4">Ahmad Company Ltd</h1>
                <p className="text-xl mb-8">Tailwind + React Components for agency scaling.</p>
                <button className="bg-white text-blue-950 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition duration-300">
                    See the collection
                </button>
            </div>
        </div>
    );
}