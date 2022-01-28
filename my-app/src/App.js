import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Service from "./Components/Service"
import StudentList from "./Components/studentList";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path ="/students" element={<StudentList/>}/>
      </Routes>
      <Footer/>
     
    </>
  )
};

export default App;
