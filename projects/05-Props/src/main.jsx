import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Padre } from './assets/Components/Padre'


createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Padre />
  </StrictMode>,
)
