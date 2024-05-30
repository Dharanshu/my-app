import React, { useState } from 'react'

export default function TextForm(props) {

    // const myStyle = {
    //     color: "white",
    //     backgroundColor: "lightgrey",
    //     padding: "10px",
    //     fontFamily: "Sans-Serif"
    // };

    const handleUpClick = () => {
        console.log("UpperCase clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to Uppercase", "success")
    }
    
    const handleLoClick = () => {
        console.log("LowerCase clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Text has been converted to Lowercase", "success")
    }
    const handleClrClick = () => {
        console.log("clear")
        let newText = ('');
        setText(newText)
        props.showAlert("Text has been Cleared", "success")
    }
    
    const handleCopy = () =>{
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied", "success")
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces between Text has been removed", "success")
    }

    const handleOnChange = (event) => {
        console.log("onchange");
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    // text = "new text";    // Wrong way to change the state.
    // setText("new text");  // Right way to change the state.
    return (
        <>       
         <div className="container " style={{color: props.mode==='dark'?'white':'black'}}  >
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter Something Here...' value={text} style={{backgroundColor: props.mode==='dark'?'#292929':'white', color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="12" ></textarea>
            </div>
            <button style={{ borderRadius:12,  cursor: "pointer", color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black'}} className="btn btn mx-1" onClick={handleUpClick}>Convert Text To Uppercase</button>
            <button style={{ borderRadius:12,  cursor: "pointer", color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black'}} className="btn btn mx-1" onClick={handleLoClick}>Convert Text To LowerCase</button>
            <button style={{ borderRadius:12,  cursor: "pointer", color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black'}} className="btn btn mx-1" onClick={handleClrClick}>Clear Text</button>
            <button style={{ borderRadius:12,  cursor: "pointer", color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black'}} className="btn btn mx-1" onClick={handleCopy}>Copy Text</button>
            <button style={{ borderRadius:12,  cursor: "pointer", color: props.mode==='dark'?'black':'white', backgroundColor: props.mode==='dark'?'white':'black'}} className="btn btn mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split (" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split (" ").length}Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </div>

        </>
    )
}

