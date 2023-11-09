import React from "react";

// Assume you import your images here
// import image1Src from 'path-to-your-image-1.png';
// import image2Src from 'path-to-your-image-2.png';

export default function Turnover({title, description, imageLeft, imageRight, mainTitle, mainDescription, linkText, linkRef}) {
    return (
        <section className="bg-white py-20">
            <div className={"container flex flex-col gap-1 items-start mx-auto"}>
                <h2 className="text-4xl text-center mb-4 fancy-font">{title}</h2>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mx-auto w-full">
                    {/* Image 1 */}
                    <div className="flex-1 border border-black h-96 overflow-hidden ">
                        <img src={imageLeft} alt="Description of Image 1" className="object-cover w-full h-full" />
                    </div>

                    {/* Text */}
                    <p className="flex-1 border border-black text-left flex flex-col items-start justify-evenly h-96 gap-5 p-8">
                        <p>
                            {mainDescription}
                        </p>
                        <a href={linkRef} className={"font-bold"}>/ {linkText} /</a>
                    </p>

                    {/* Image 2 */}
                    <div className="flex-1 border border-black h-96 overflow-hidden ">
                        <img src={imageRight} alt="Description of Image 2" className="object-cover w-full h-full" />
                    </div>
                </div>
            </div>

        </section>
    );
}
