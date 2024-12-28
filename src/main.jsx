import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer  toastClassName={() =>
    "inline-block bg-white text-black flex text-sm font-medium shadow-lg rounded-md p-6 whitespace-nowrap"
  }
  bodyClassName={() => "text-center"} position="bottom-center" autoClose={2000} />
    <App />
  </StrictMode>,
)
  