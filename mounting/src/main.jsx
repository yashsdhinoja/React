import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lifecycle from './LifeCycle'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Lifecycle></Lifecycle>
  </StrictMode>,
);
