import React from "react";
import Hero from "../../components/General/Sections/Hero/Hero";
import SectionsSection from "../../components/General/Sections/SectionsSection/SectionsSection";
import Navbar from "../../components/Nav/Nav";
import Clients from "../../components/pages/landing/Clients";
import Logo1 from "../../assets/Screenshot 2023-11-08 at 12.05.26.png";
import Logo2 from "../../assets/Screenshot 2023-11-08 at 12.05.42.png";
import Turnover from "../../components/pages/landing/Turnover";
import TurnoverLeftImage from "../../assets/TurnoverLeft.png";
import TurnoverRightImage from "../../assets/TurnoverRight.png";
import Differentiation from "../../components/pages/landing/Differentiation";
import ComponentLibrary from "../../components/pages/landing/ComponentLibrary";

export default function LandingPage({}){
    console.log("here");
    return (
        <div>
            <Navbar />
            <Hero />
            <Clients logoSources={[Logo1, Logo2,Logo1, Logo2,Logo1, Logo2,Logo1, Logo2]}/>
            <Turnover
                title={"Rapid Turnover"}
                description={"Our team builds a comprehensive component library that allows us to build and deploy your custom website within a matter of weeks."}
                imageLeft={TurnoverLeftImage}
                imageRight={TurnoverRightImage}
                mainTitle={"Fastest Turnover"}
                mainDescription={"Typically when working with agencies the design and development process can take upwards of 20+ weeks. For some clients this is an appropriate amount of time, however here at the Ahmad Company we've developed components for re-deployability."}
                linkText={"See the Collection"}
                linkRef={"/somewhere special"}
            />
            <Differentiation />
            <ComponentLibrary />
        </div>
    )
}