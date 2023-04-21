import { Route, Routes } from "react-router-dom";
import About from "./permanent/About";
import Home from "./homepage";
import Moreinfo from "./permanent/Moreinfo";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/moreinfo" element={<Moreinfo />} />
            </Routes>
        </>
    )
}

export default App