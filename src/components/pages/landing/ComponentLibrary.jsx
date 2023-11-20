import React, {useState} from "react";

export default function ComponentLibrary(){
    const [currentItem, setCurrentItem] = useState(0);

    const components = [
        {
            title: "Elevate Your Website with Our Expert 'Sections' Components",
            description: <>
                <b>Container Components: The Backbone of Web Design</b>
                <p>Our Container Components are the cornerstone of your website's structure. Expertly designed, they adapt fluidly to any content, ensuring your site is as robust as it is visually appealing.</p>
                <b>Split Left and Right Components: Versatile and Responsive</b>
                <p>Experience seamless adaptability with our Split Left and Right Components. Perfect for any device, they ensure your site's layout is always optimal, whether viewed on mobile or desktop.</p>
                <b>Your Go-To for Innovative Web Layouts</b>
                <p>Built by seasoned professionals, our 'Sections' components are a blend of elegance and functionality, making your website stand out effortlessly.</p>
            </>,
            action: "view library",
            imageSrc: "https://placehold.co/600x400",
        },
        {
            title: "Bring Your Site to Life with Our Dynamic Animations",
            description: <>
                <b>Engaging Motion Design</b>
                <p>Captivate your audience with our cutting-edge animations. Tailored for engagement, they add a layer of sophistication and interaction to your website.</p>
                <b>Smooth and Efficient</b>
                <p>Our animations are optimized for performance, ensuring a smooth user experience without compromising on your site’s speed and responsiveness.</p>
                <b>Customizable for Your Brand</b>
                <p>Adaptable to your brand's style, our animations enhance your digital identity, making your website uniquely yours.</p>
            </>,
            action: "explore animations",
            imageSrc: "https://placehold.co/600x400",
        },
        {
            title: "Define Your Brand Voice with Our Typography Suite",
            description: <>
                <b>Crisp and Clear Fonts</b>
                <p>Our typography collection is designed for readability and impact, ensuring your message is not just seen but felt.</p>
                <b>Wide Range of Styles</b>
                <p>From classic to contemporary, our diverse font selection caters to any aesthetic, empowering your brand’s unique voice.</p>
                <b>Seamless Web Integration</b>
                <p>Easy to integrate and customize, our typography tools are built for convenience and creative expression.</p>
            </>,
            action: "view typography options",
            imageSrc: "https://placehold.co/600x400",
        },
        {
            title: "Interactive Buttons for Enhanced User Engagement",
            description: <>
                <b>Designed for Interaction</b>
                <p>Our buttons are more than just clickable elements; they're designed for maximum user engagement and interaction.</p>
                <b>Customizable to Fit Your Style</b>
                <p>Whether it’s bold and modern or subtle and classic, our buttons can be tailored to match your site’s aesthetic perfectly.</p>
                <b>Optimized for Responsiveness</b>
                <p>Every button is meticulously crafted to ensure it performs seamlessly across all devices and platforms.</p>
            </>,
            action: "discover button styles",
            imageSrc: "https://placehold.co/600x400",
        },
        {
            title: "Streamline User Interaction with Our Intuitive Forms",
            description: <>
                <b>User-Friendly Design</b>
                <p>Our forms are designed for ease of use, encouraging user interaction and improving conversion rates.</p>
                <b>Secure and Reliable</b>
                <p>Built with security in mind, our forms protect user data while providing a seamless experience.</p>
                <b>Customizable for Any Need</b>
                <p>Whether for sign-ups, contacts, or feedback, our forms are fully customizable to suit any purpose.</p>
            </>,
            action: "explore form options",
            imageSrc: "https://placehold.co/600x400",
        }
    ]


    return <section className={"bg-blue-950 h-[95vh] flex flex-col py-10"}>
        <div className={" container flex flex-col h-full gap-10"}>
            <div className={""}>
                <h1 className={"text-5xl fancy-font text-white"}>Component Library</h1>
            </div>

            <div className={"flex-1 flex gap-5 flex-col w-full"}>
                <div className={"flex-1 w-full flex gap-5 items-center"}>
                    <img src={components[currentItem].imageSrc} alt={"placeholder"} className={"aspect-square object-cover"}/>
                    <div className={"flex flex-col gap-5 text-white"}>
                        <h3 className={"text-3xl font-bold fancy-font"}>{components[currentItem].title}</h3>
                        <div className={"flex flex-col gap-5"}>
                            {components[currentItem].description}
                        </div>
                        <button className="bg-white text-blue-950 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300">
                            {components[currentItem].action}
                        </button>
                    </div>
                </div>


                <div className={"flex justify-center items-center gap-5"}>
                    <button onClick={()=>{
                        if (currentItem !== 0) {
                            setCurrentItem(item => item - 1)
                        }
                    }} className={"rounded-full border-white border h-5 w-5 flex justify-center items-center text-white p-4"}>
                        <p className={currentItem  > 0 ?'text-white' : 'text-gray-600'}>{"<"}</p>
                    </button>

                    <p className={"text-white text-bold text-xl"}>{currentItem + 1}</p>

                    <button onClick={()=>{
                        if (currentItem !== components.length -1) {
                            setCurrentItem(item => item + 1);
                        }
                    }} className={"rounded-full border-white border h-5 w-5 flex justify-center items-center text-white p-4"}>
                        <p className={currentItem < components.length - 1 ?'text-white' : 'text-gray-600'}>{">"}</p>
                    </button>
                </div>

            </div>
        </div>
    </section>
}