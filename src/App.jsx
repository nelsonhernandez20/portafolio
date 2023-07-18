import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ButtonFloating from "./components/ButtonFloating";
import ContextTheme from "./context/ContextTheme";
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  return (
    <ContextTheme.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <body
        className={`${isDarkTheme ? "bg-gray-950" : "bg-slate-100"} p-0 m-0`}
      >
        <div className="sticky top-0 z-10">
          <Layout />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div>
          <Footer />
        </div>
        <div className="fixed top-[30%] justify-end right-20">
          <ButtonFloating />
        </div>
      </body>
    </ContextTheme.Provider>
  );
}

export default App;
