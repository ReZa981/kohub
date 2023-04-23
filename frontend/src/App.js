import {Route, Routes } from "react-router-dom";
import About from "./aboutus/index";
import Home from "./home/index";
import Moreinfo from "./moreinfo/index";
import Login from "./login/index";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/moreinfo" element={<Moreinfo />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default App