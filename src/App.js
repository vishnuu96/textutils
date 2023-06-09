// import logo from './logo.svg';

import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import TextForm from "./components/Textform"
import React, { useState } from 'react'
import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")
  const [textMode,settextMode] = useState("Enable dark mode")
  const [textforgreen,settextforgreen] = useState("enable green dark mode")
  const [textforRose,settextforRose] = useState("enable rose dark mode")
    // for button styling
  const [btnColor, setbtnColor] = useState("primary")

  const [alert,setalert] = useState(null)

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

   const toggleMode=()=>{
    
    if(mode==="light"){
      setMode("dark")
      settextMode("Enable light mode")
      document.body.style.backgroundColor="#042743"
      showAlert("dark mode has been enabled","success")
      setbtnColor("primary")
      // document.title="TextUtils - Dark mode"
      // setInterval(() => {
      //   document.title="TextUtils is amazing now"
      // }, 2000);
      // setInterval(() => {
      //   document.title=" install TextUtils"
      // }, 1500);
    }
    else{
      setMode("light")
      settextMode("Enable dark mode")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled","success")
      setbtnColor("primary")
      // document.title="TextUtils - light mode"
    }
  }

  const toggleModeGreen=()=>{
    if(mode==="light"||mode==="dark"){
      setMode("dark")
      settextforgreen(" green dark mode")
      document.body.style.backgroundColor="#274f16"
      showAlert("green mode has been enabled","success")
      setbtnColor("success")
    }
    // else{
    //   setMode("light")
    //   settextforgreen("Enable green mode")
    //   document.body.style.backgroundColor="white"
    //   showAlert("light mode has been enabled","success")
    // }
    
  }
  const toggleModeRose=()=>{
    if(mode==="light"||mode==="dark"){
      setMode("dark")
      settextforRose(" rose dark mode")
      document.body.style.backgroundColor="#8d280f"
      showAlert("rose mode has been enabled","success")
      setbtnColor("danger") 
    }
  }

  return (
    <>
    <BrowserRouter>
     <Navbar title="TextUtils" 
    //  this to fix the light or dark mode for nav bar
     mode={mode} 
    //  to write and update default dark button text
     text={textMode}
      //  function to be called when clicked on default dark mode
      toggleMode={toggleMode} 
    //  this is to write and update the text for green button
     textforGreen={textforgreen} 
    //  function to be called when clicked on green mode button 
     toggleModeGreen={toggleModeGreen}
    //  to wrte and update the text for rose button
    textforRose={textforRose}
    // function to call when clicked on rose mode button
    toggleModeRose={toggleModeRose}
      aboutText="About TextUtils" />
     {/* <Navbar  /> */}
     <Alert  alert={alert}/>
     <div className="container my-3">
      <Routes>
        <Route exact path="/About" element={<About/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Textform heading="Enter the text to analyze"  btnColor={btnColor} showalert={showAlert} mode={mode}/>}/>
      </Routes>
      
     {/* <Textform heading="Enter the text to analyze"  btnColor={btnColor} showalert={showAlert} mode={mode}/> */}
     

     </div>
     </BrowserRouter>
    </>
  );
}

export default App;
// text={textMode}
// toggleMode={toggleMode}