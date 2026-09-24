import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LoginForm from "./login_form"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginForm/>
  </StrictMode>,
)
