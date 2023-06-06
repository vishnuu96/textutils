import React,{useState} from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        // console.log("uppercase was clicked" + text)
        let newText=text.toUpperCase()
        setText(newText)
    }
    
    const handleCopy=()=>{
       let newText=text
        navigator.clipboard.writeText(newText)
        console.log(newText)
       
    }
    
    const handleReverseClick=()=>{
        // console.log("uppercase was clicked" + text)
        let newText=text.split(' ').reverse().join(' ')
        // newText=newText.reverse()
        setText(newText)
    }
      const speak = () => {
           let speech=new SpeechSynthesisUtterance(text)
           window.speechSynthesis.speak(speech)
           const oogle=document.getElementById("oogle")
           if(oogle.innerText==="listen the text"){
            oogle.innerText="stop"
           }
           else{
            oogle.innerText="listen the text"
           
           if(oogle.innerText==="listen the text"){
            window.speechSynthesis.cancel()
           }
        }
    }
        

    const handleLoClick=()=>{
        // console.log("uppercase was clicked" + text)
        let newText=text.toLowerCase()
        setText(newText)
    }

    const handleOnChange=(event)=>{
        // console.log(" on change")
        setText(event.target.value)
    }

    const[text,setText]= useState('');
    // text="new text"; //wrong way to change the state
    // setText("new text");  //correct way to change the state
  return (
    <>
     <div className='container'>
        <h1>{props.heading} </h1>
       <div className="mb-3">
        {/* <label For="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
       </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleReverseClick}>reverse the text</button>
       <button className="btn btn-primary mx-1" onClick={speak} id="oogle">listen the text</button>
       <button className="btn btn-primary my-1 mx-1" onClick={handleCopy}>copy the text</button>
    </div>
    <div className="container my-3">
        <h1>your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}

