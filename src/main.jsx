import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Issue8411App from './issue-8411-render-logic/App'
import Issue8314App from './issue-8314-this-binding/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Can swap these out depending on which one you are demoing */}
    <Issue8411App />
  </StrictMode>,
)