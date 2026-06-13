import { useState } from 'react'
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from './Components/common/ScrollToTop';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <AppRoutes />
    <ScrollToTop/>
  </>
  
}

export default App
