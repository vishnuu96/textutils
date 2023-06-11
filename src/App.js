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
  // const [textforgreen,settextforgreen] = useState("enable green dark mode")
  // const [textforRose,settextforRose] = useState("enable rose dark mode")
    // for button styling
  const [btnColor, setbtnColor] = useState("primary")
  const [myStyle, setmyStyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [textStyle,settextStyle] = useState({
      color:"black",
      backgroundColor:'white'
    })
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
      setmyStyle({
        color:'white',
        backgroundColor:'rgb(36 74 104)'
      })
      settextStyle({
        backgroundColor:'rgb(71 115 155)',
        color:"white"
      })
    }
    else{
      setMode("light")
      settextMode("Enable dark mode")
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enabled","success")
      setbtnColor("primary")
      setmyStyle({
        color:'black',
        backgroundColor:'white'
      })
      settextStyle({
        color:"black",
        backgroundColor:'white'
      })
    }
  }

  // const toggleModeGreen=()=>{
  //   if(mode==="light"||mode==="dark"){
  //     setMode("dark")
  //     settextforgreen(" green dark mode")
  //     document.body.style.backgroundColor="#274f16"
  //     showAlert("green mode has been enabled","success")
  //     setbtnColor("success")
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor: 'rgb(14 49 14)'
        
  //     })
  //     settextStyle({
  //       color:'white',
  //       backgroundColor:"rgb(63 129 87) "
       
  //     })
  //   }
  // }
  // const toggleModeRose=()=>{
  //   if(mode==="light"||mode==="dark"){
  //     setMode("dark")
  //     settextforRose(" rose dark mode")
  //     document.body.style.backgroundColor="#6a1f44"
  //     showAlert("rose mode has been enabled","success")
  //     setbtnColor("danger") 
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor: 'rgb(100 38 107)'
       
  //     })
      
  //     settextStyle({
  //       color:'white',
  //       backgroundColor:"rgb(136 63 117)"
  //     })
  //   }
  // }
  
  // const toggle={
  //   blue:toggleMode,
  //   green:toggleModeGreen,
  //   rose:toggleModeRose
  // }

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
      // toggleBlue={toggle.blue}
    //  this is to write and update the text for green button
    //  textforGreen={textforgreen} 
    //  function to be called when clicked on green mode button 
    //  toggleModeGreen={toggleModeGreen}
    // toggleGreen={toggle.green}
    //  to wrte and update the text for rose button
    // textforRose={textforRose}
    // function to call when clicked on rose mode button
    // toggleModeRose={toggleModeRose}
    // toggleRose={toggle.rose}
      aboutText="About TextUtils" />
     {/* <Navbar  /> */}
     <Alert  alert={alert}/>
     <div className="container my-3">
      <Routes>
        <Route exact path="/About" element={<About mode={mode} style={myStyle}/>}/>
      </Routes>
      <Routes>
        <Route exact path="/" element={<Textform heading="Try TextUtils - Word Counter,Character Counter, Remove extra spaces" style={textStyle} btnColor={btnColor} showalert={showAlert} mode={mode}/>}/>
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