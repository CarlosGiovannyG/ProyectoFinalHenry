import React from "react";
import AuthProvider from "./Auth/AuthProvider";
import Rout from "./Routes/Routes";


function App() {
    return (
        <AuthProvider>
            <Rout/>
      </AuthProvider>  
    );
  }
  
  export default App;