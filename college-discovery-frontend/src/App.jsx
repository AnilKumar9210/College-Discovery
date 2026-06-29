import { useState } from 'react'
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from './Components/common/ScrollToTop';
import CompareBar from './Pages/Compare/CompareBar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <AppRoutes />
    <ScrollToTop/>
    <CompareBar/>
  </>
  
}

export default App
