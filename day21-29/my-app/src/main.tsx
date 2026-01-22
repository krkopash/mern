// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./styles.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Day26-Day27/AuthContext";
import SmartErrorBoundary from "./Day26-Day27/SmartErrorBoundary";
import "./Day26-Day27/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SmartErrorBoundary>
          <App />
        </SmartErrorBoundary>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
