import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./components/App";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<App />);
