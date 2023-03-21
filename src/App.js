import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/main.css'

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects"
import IndProject from "./Pages/IndProject"
import Contacts from "./Pages/Contacts"
import ScrollToTop from "./Utils/scrollToTop";


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop/>  {/* // Данный код был перенес с сайта https://v5.reactrouter.com/web/guides/scroll-restoration, для того, чтобы при переходи на другие страницы (Home, Projects, Contacts) боковой скрол сразу оказывался на верху, то есть показывал страницу с ее начала. Чтобы он работал в App.js после Router добавили ScrollToTop. */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/indproject/:id" element={<IndProject/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
