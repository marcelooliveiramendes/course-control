import { createRoot } from 'react-dom/client'
import './config/main.scss'
import { RoutesApp } from './config/routes'

createRoot(document.getElementById('root')!).render(
  <RoutesApp />
)
