import { Route, Routes } from "react-router-dom";
import About from "./permanent/About";
import Home from "./homepage";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App