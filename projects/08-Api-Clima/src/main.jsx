import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Api } from './Componentes/Api'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Api/>
  </StrictMode>,
)
