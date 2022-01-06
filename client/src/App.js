import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';
import { Menu } from "./Components/Menu";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                {/*<Route path="/SignUp" element={<SignUp />} />
                <Route path="/LogIn" element={<LogIn />} /> */}
            </Routes>
        </BrowserRouter>
    );
  }
  
  export default App;