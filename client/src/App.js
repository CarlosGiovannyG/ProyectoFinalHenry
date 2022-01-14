import React from "react";
import AuthProvider from "./Auth/AuthProvider";
import Rout from "./Routes/Routes";
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <AuthProvider>
        <Rout />
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;