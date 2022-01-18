import React from "react";
import AuthProvider from "./Auth/AuthProvider";
import Rout from "./Routes/Routes";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <AuthProvider>
        <Rout />
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;