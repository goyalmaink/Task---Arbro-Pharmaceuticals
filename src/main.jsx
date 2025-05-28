import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import YLIMSDashboard from '../pages/dashboard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
     */}
     <YLIMSDashboard></YLIMSDashboard>
  </StrictMode>,
)
