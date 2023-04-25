import { Route, Routes } from "react-router-dom";
import About from "./aboutus";
import Home from "./home";
import Moreinfo from "./moreinfo";
import Login from "./login";
import Search from "./search";
import Cowork from "./cowork";
import Admin from "./admin";
import Signup from "./signup";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/moreinfo" element={<Moreinfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cowork/:placeId" element={<Cowork />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
