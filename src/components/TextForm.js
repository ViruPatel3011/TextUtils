import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    console.log("You clicked Button" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowerCase = () => {
    console.log("You clicked Button" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    console.log("You clicked Button" + text);
    let newText = "";
    setText(newText);
  };

  const handleCopyText = () => {
    const textarea = document.getElementById("mytext"); // Replace "textareaId" with the actual id of your textarea element
    const text = textarea.value;
    console.log("You clicked Button" + text);
    let newText =text;
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Onchange function");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text="new Text"; // we can't set text value like this--> Wrong way
  // setText("New Text");
  return (
    <>
      <div className="container">
        <h1 className="my-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            rows="10"
            onChange={handleOnChange}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-info" onClick={handleUpperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-info mx-3" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-info mx-3" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-info mx-3" onClick={handleCopyText}>
          Copy to Clipboard
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>
          {text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.trim().split(/\s+/).length} minutes to read</p>

        <h2>Preview for you to See </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
