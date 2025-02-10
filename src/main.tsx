import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import DestinationDetails from './components/DestinationDetails.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/destination/:id" element={<DestinationDetails />} />
      </Routes>
    </BrowserRouter>

  </StrictMode>,
)
