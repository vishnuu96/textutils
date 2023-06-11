import React,{useState} from 'react'


export default function Textform(props) {

    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
        props.showalert("converted to uppercase","success")
    }
    
    const handleCopy=()=>{
       let newText=text
        navigator.clipboard.writeText(newText)
        console.log(newText)
        props.showalert("Text is copied","success")  
    }
    
    const handleReverseClick=()=>{
       let newText=text.split(' ').reverse().join(' ')
        // newText=newText.reverse()
        setText(newText)
        props.showalert("Text is reversed","success")
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
    const  handleSpaces=()=>{
       let newText=text.split(/[ ]+/)
       setText(newText.join(" "))
       props.showalert("Extra spaces are removed","success")
    } 
    
    const  clearText=()=>{
        setText("")
        props.showalert("Text is cleared","success")
    }   


    const handleLoClick=()=>{
        
        let newText=text.toLowerCase()
        setText(newText)
        props.showalert("converted to lowercase","success")
    }

    const handleOnChange=(event)=>{
        // console.log(" on change")
        setText(event.target.value)
    }
    const [text,setText] = useState("")

  return (
    <>
    {/* style={{color:props.mode==='dark'?"white":"black"}} */}
     <div className='container' style={{color:props.mode==='dark'?"white":"black"}} >
        <h1 className='mb-2' style={{color:props.mode==='dark'?"white":"black"}}>{props.heading} </h1>
       <div className="mb-3">
        {/* <label For="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={props.style} rows="8"></textarea>
       </div>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleLoClick}>Convert to lowercase</button>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleUpClick}>Convert to uppercase</button>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={handleReverseClick}>reverse the text</button>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} mx-1 my-1`} onClick={speak} id="oogle">listen the text</button>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={handleCopy}>copy the text</button>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={handleSpaces}>remove extra spaces</button>
       <button disabled={text.length===0} className={`btn btn-${props.btnColor} my-1 mx-1`} onClick={clearText}>clear the text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?"white":"black"}}>
        <h1>your text summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
// 

// {backgroundColor:props.mode==='dark'?'#8eb3d6':'white',color:props.mode==='dark'?"white":"black"}