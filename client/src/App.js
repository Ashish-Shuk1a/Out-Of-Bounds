import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUpUser from "./components/SignUpUser";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Profile from "./components/Profile";
import Event from "./components/Event/Event";

function App() {
  const [isTopOfpage, setIsTopOfpage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfpage(true);
      if (window.scrollY !== 0) setIsTopOfpage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <BrowserRouter>
      <Navbar isTopOfpage={isTopOfpage} />
      <Routes>
        <Route path="/signup" element={<SignUpUser />} />
        <Route path="/" element={<Hero />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Event />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
