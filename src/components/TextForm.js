import React, { useState } from 'react';


export default function TextForm(props) {
    
    const handleUpperCase=()=>{
        console.log("You clicked Button" + text);
        let newText=text.toUpperCase();
        setText(newText);
    } 
    const handleOnChange=(event)=>{
        console.log("Onchange function");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');
    // text="new Text"; // we can't set text value like this--> Wrong way
    // setText("New Text");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="mytext"rows="10" onChange={handleOnChange} value={text}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>

    </div>
  );
}
