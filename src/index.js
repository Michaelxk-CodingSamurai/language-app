import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./index.css";

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<Main name="Language App" />);

// During an update, there is no need to pass the container again
root.render(<Main name="Language App" />);


