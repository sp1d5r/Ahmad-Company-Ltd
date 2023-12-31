import React from "react";
import useSlidingEffect from "../../../contexts/useSlidingEffect/useSlidingEffect";

export default function Differentiation({}){

    return <div className={"bg-white"}>
        <div className={"container mx-auto py-20 flex justify-center items-center min-h-96"}>
            <div className={"flex-1 text-5xl fancy-font flex flex-col gap-8"}>
                <p className={"hover:underline transition-all duration-500"}>BESPOKE</p>
                <p className={"hover:underline transition-all duration-500"}>ADVANCE</p>
                <p className={"hover:underline transition-all duration-500"}>AFFORDABLE</p>
            </div>
            <div className={"flex-1 h-full flex flex-col gap-2 justify-evenly"}>
                {useSlidingEffect(
                    <p className={"font-bold text-xl fancy-font"}>Custom Solutions</p>,
                    "bottom",
                    0.5,
                    "0.4s",
                    "0s"
                )}

                {useSlidingEffect(
                    <p className={"mb-4"}>
                        We start from the ground up. What makes your business unique and incorporate that into
                        the design principals of your website. No two businesses are the same and the best way to represent
                        this is by differentiating your digital footprint.
                    </p>,
                    "bottom",
                    0.5,
                    "0.4s",
                    "0.1s"
                )}


                {useSlidingEffect(
                    <p className={"font-bold text-xl fancy-font"}>Advance Architecture</p>,
                    "bottom",
                    0.5,
                    "0.4s",
                    "0.2s"
                )}
                {useSlidingEffect(
                    <p className={"mb-2"}>
                        A company made of engineers, our focus is to use elegant design principals with
                        the engineering best practices to deliver consistent high quality products.
                    </p>,
                    "bottom",
                    0.5,
                    "0.4s",
                    "0.3s"
                )}


                {useSlidingEffect(
                    <p className={"font-bold text-xl fancy-font"}>Affordable Solutions</p>,
                    "bottom",
                    0.5,
                    "0.4s",
                    "0.4s"
                )}
                {useSlidingEffect(
                    <p className={"mb-2"}>
                        Recycling the fundamental components that don't change lets us generate interactive prototypes
                        within a matter of a few days. Don't believe us? Try the components yourself!
                    </p>,
                    "bottom",
                    0.5,
                    "0.4s",
                    "0.5s"
                )}
            </div>
        </div>
    </div>
}