import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
=======
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
>>>>>>> 613e290076c1a205cc81ad1cab06a18707f283e0
  </StrictMode>,
)
