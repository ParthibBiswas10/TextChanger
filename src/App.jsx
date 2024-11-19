import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import TextBox from './components/TextBox/textbox'
import './App.css'

function App() {
 
  return (
    <>
    <header>
    <Navbar/>
    </header>
     <div className="container">
      
     <TextBox/>
     </div>
    </>
  )
}

export default App
