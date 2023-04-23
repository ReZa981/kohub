import { Route, Routes } from "react-router-dom";
import About from "./aboutus";
import Home from "./home";
import Moreinfo from "./moreinfo";
import Login from "./login";
import Search from "./search";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/moreinfo" element={<Moreinfo />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </>
    )
}

export default App