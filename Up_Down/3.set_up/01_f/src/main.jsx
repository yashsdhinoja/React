import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sudha from './sudha.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>
      <Sudha/>  
  </StrictMode>
);