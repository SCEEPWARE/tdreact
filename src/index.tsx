import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.js";

const rootNode = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);