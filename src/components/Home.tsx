import React, { FC } from "react";
import Hero from "./Hero/Hero"
import Services from "./Services/Srevices";

const Home: FC = () => {
    return (
        <>
            <Hero />
            <Services />
        </>
    )
}

export default Home;