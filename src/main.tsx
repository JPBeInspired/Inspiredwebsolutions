import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

// Remove any max-width limitation that might be affecting the layout
rootElement.style.maxWidth = "none";
rootElement.style.padding = "0";
rootElement.style.margin = "0";
rootElement.style.width = "100%";

createRoot(rootElement).render(<App />);
