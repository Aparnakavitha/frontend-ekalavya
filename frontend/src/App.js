import React from "react";
import "./App.css";
import RouterComponent from "./routes/Router";
import { GoogleOAuthProvider } from "@react-oauth/google";


const App = () => {
  return (
    <GoogleOAuthProvider clientId="129038097874-1albul8aknf7348ljuhiro03sl8dhn43.apps.googleusercontent.com">
      <div className="App">
        <header className="App-header">
          <RouterComponent />
        </header>
      </div>
    </GoogleOAuthProvider>
    

  );
};

export default App;
