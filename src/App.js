import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Claudiu");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <div>
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/contact"> Contact</Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
