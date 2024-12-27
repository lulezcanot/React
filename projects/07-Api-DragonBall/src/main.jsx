import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { API } from './Componentes/API'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <API />
  </StrictMode>,
)
