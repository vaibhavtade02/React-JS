import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Vaibhav from './vaibhav.jsx'
createRoot(document.getElementById('root')).render(
  <>
    <Vaibhav />
    <h1>Hello vaibhav</h1>
  </>
)
