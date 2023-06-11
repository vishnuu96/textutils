// import React,{useState} from 'react'

export default function About(props) {
//     const [myStyle, setmyStyle] = useState({
//     color:"black",
//     backgroundColor:"white"
//    })
// let myStyle={
//     color:props.mode==='dark'?"white":'black',
//     backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
// }
//    const [btnText,setBtnText] = useState("Enable dark mode")

//    const toggleClick=()=>{
//     if(myStyle.color==="black"){
//         setmyStyle({
//             color:"white",
//             backgroundColor:"black",
//             border:"1px solid white"
//         })
//         setBtnText("Enable light mode")
//     }
//     else{
//         setmyStyle({
//             color:"black",
//             backgroundColor:"white"
//         })
//         setBtnText("Enable dark mode")
//     }
//    }
    return (
        // #042743
        <div className='container'>
            <h1 className='my-3' style={{color:props.mode==='dark'?"white":'black'}}>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item"style={props.style} >
                    <h2 className="accordion-header" style={props.style}>
                        <button className="accordion-button"  type="button" style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <strong>Analyze your text</strong>
                           
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.style}>
                           Texutils gives you a way to analyze your text quickly and efficiently.Be it word,charactercount
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.style}>
                    <h2 className="accordion-header"style={props.style}>
                        <button className="accordion-button collapsed"type="button" style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={props.style}>
                           Textutils is afree character counter tool that provides instant character count and word count statistics for a given text.TextUtils report the number of eords and characters.Thus it is suitable for writing text with word/character limit
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={props.style} >
                    <h2 className="accordion-header"style={props.style}>
                        <button className="accordion-button collapsed" type="button" style={props.style} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser compatibile
                            </strong> 
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body"style={props.style}>
                           This word counter software works in any web browsers such as chrome,firefix,internet Explorer,safari,opera.It suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc. 
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" class="btn btn-primary my-3" onClick={toggleClick}>{btnText}</button>
            </div> */}
        </div>
    )
}
