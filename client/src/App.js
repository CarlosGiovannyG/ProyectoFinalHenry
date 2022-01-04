import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  
    return (
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/Menu" element={<Menu />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/LogIn" element={<LogIn />} /> */}
            </Routes>
        </React.Fragment>
    );
  }
  
  export default App;