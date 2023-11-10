import { Link, Routes, Route } from "react-router-dom";

import AboutUs from "./AboutUs";
import OwrMission from "./OwrMission";
import OwrValues from "./OwrValues";

const About = () => {
    return (

        <>
            <h2>About Page</h2>

            <nav>
                <Link to="us">About Us</Link>
                <Link to="mission">Owr Mission</Link>
                <Link to="values">Our Values</Link>
            </nav>

            <Routes>
                <Route path="us" element={<AboutUs />} />
                <Route path="mission" element={<OwrMission />} />
                <Route path="values" element={<OwrValues />} />               
            </Routes>

        </>
    );
};

export default About;