import React, { useState } from 'react'
import './text.css';

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

    const handleCopy = () => {
        var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text has been Copied", "success")
    }

    const handleExtraSpaces = () => {
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
            <div className="container-l3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}  >
                <h2 className='mb-3' >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter Something Here...' value={text} style={{ backgroundColor: props.mode === 'dark' ? 'rgb(22, 30, 30)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="12" ></textarea>
                </div>
                <button disabled={text.length===0} style={{ borderRadius: 12, cursor: "pointer", color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'white' : 'black' }} className="btn btn mx-1 my-1" onClick={handleUpClick}>Convert Text To Uppercase</button>
                <button disabled={text.length===0} style={{ borderRadius: 12, cursor: "pointer", color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'white' : 'black' }} className="btn btn mx-1 my-1" onClick={handleLoClick}>Convert Text To LowerCase</button>
                <button disabled={text.length===0} style={{ borderRadius: 12, cursor: "pointer", color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'white' : 'black' }} className="btn btn mx-1 my-1" onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length===0} style={{ borderRadius: 12, cursor: "pointer", color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'white' : 'black' }} className="btn btn mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} style={{ borderRadius: 12, cursor: "pointer", color: props.mode === 'dark' ? 'black' : 'white', backgroundColor: props.mode === 'dark' ? 'white' : 'black' }} className="btn btn mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
                <div className="container my-3">
                    <h1>Your Text Summary</h1>
                    <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters.</p>
                    <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:'Nothing to preview!'}</p>
                </div>
            </div>

        </>
    )
}

