import ReactDOM from "react-dom/client";

import "./index.css";
// App is a component
import App from "./App";
// we create a root (main place) to put our stuff on, and its ID is root. from index.html in public.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
