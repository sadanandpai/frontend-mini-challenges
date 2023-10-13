import React, { useState } from 'react'

export default function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpCLick = () => {
    // console.log("Button was clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
  }

  const handleLowerCLick = () => {
    console.log("Button was clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success");
  }

  const handleOnChange = (event) => {
    console.log("Change");
    setText(event.target.value);
  }

  const clearText = () => {
    console.log("Cleared");
    setText('');
    props.showAlert("Cleared","success");
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking","success");
    const toogle = document.getElementById('toggle')
    if (toogle.textContent == "Speak") {
        toogle.innerHTML = "Stop"
    }
    else {
        toogle.innerHTML = "Speak"
        if (toogle.innerHTML = "Speak"){
            window.speechSynthesis.cancel()
        }
    }
}

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard","success");
  }

  return (
    <>

      <div className="container" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
        <h2 className='mb-4'>{props.heading}</h2>
        <textarea className="form-control my-3" id="myBox" style={{backgroundColor:props.mode==='light'?'white':'#CFE2FF', color:props.mode==='dark'?'white':'black'}} rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleLowerCLick}>Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={handleUpCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1 my-1" onClick={clearText}>Clear Text</button>
        <button type="submit" className="btn btn-primary mx-2 my-2"onClick={handleCopy}  id="toggle">Copy</button>
        <button type="submit" className="btn btn-warning mx-2 my-2"onClick={speak}  id="toggle">Speak</button>        
      </div>
      <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p> 
        <p> Time to read : {text.split(" ").filter((element)=>{return element.length!==0}).length*0.008} words</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something to preview here'}</p>
      </div>

      </>
  )
}
