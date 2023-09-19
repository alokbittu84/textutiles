import React, {useState} from "react";

export default function TextForm(props) {
    const[text,setText] =useState("Write the text");

    const handleClick=(e)=>{
      if(text==="Write the text"){
      setText("");}
    }

   const handleChange=(e)=>{
     setText(e.target.value);

    }
    const upperCase =()=>{
      const newText=text.toUpperCase();
        setText(newText);
        props.handleAlert("success",": uppercase has done.")
    }
    const lowerCase =()=>{
      const newText=text.toLowerCase();
        setText(newText);
        props.handleAlert("success",": lowercase has done.")
    }
    
    const handleCopy=()=>{
      const copyText = document.getElementById("myBox");
      copyText.select();
      navigator.clipboard.writeText(copyText.value);
      props.handleAlert("success",": Copy has done.")
    }
    
    const handleSpaces=()=>{
      let newText=text.replace(/\s+/g,' ');
      setText(newText);
      props.handleAlert("success",": spaces has been removed.")
    }

    const handleClearClick = ()=>{ 
      let newText = '';
      setText(newText);
      props.handleAlert("Text Cleared!", "success");
  }

  return (
    
    <div  className="container" style={{marginLeft:"30px"}}>
      <h1>Write anything ....</h1>
      <div className="mb-3">
        <textarea className="form-control" onClick={handleClick} onChange={handleChange} value={text} rows="8" id="myBox"></textarea>
      </div>
      <button className="btn btn-primary  mx-1" disabled={text.length===0} onClick={upperCase}>ToUpperCase</button>
      <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={lowerCase}>ToLowerCase</button>
      <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleSpaces}>Remove extra spaces</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/g).filter((e)=>e.length!==0).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/g).filter((e)=>{return e.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  );
}
