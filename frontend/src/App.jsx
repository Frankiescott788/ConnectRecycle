import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/home/home";
import Footer from "./components/footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Signin from "./components/pages/Forms/signin";
import Signup from "./components/pages/Forms/signup";
import Explore from "./components/pages/Explore/explore";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/explore" element={<Explore />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
