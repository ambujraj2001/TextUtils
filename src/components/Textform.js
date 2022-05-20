import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "Success");
  };
  const handlelowclick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "Success");
  };
  const handleclearclick = () => {
    setText("Enter Text Here");
    props.showAlert("Text Cleared", "Success");
  };
  const handlecopyclick = () => {
    console.log(text);
    let v = document.getElementById("exampleFormControlTextarea1");
    v.select();
    navigator.clipboard.writeText(v.value);
     props.showAlert("Text Copied to Clipboard", "Success");
  };
  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Text Here");
  return (
    <>
      <br />
      <div className="container">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="6"
            value={text}
            onChange={handleonchange}
          ></textarea>

          <button className="btn btn-primary my-2" onClick={handleupclick}>
            Convert to UpperCase
          </button>

          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handlelowclick}
          >
            Convert to LowerCase
          </button>

          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handleclearclick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary my-2 mx-2"
            onClick={handlecopyclick}
          >
            Copy Text
          </button>
        </div>
      </div>

      <div
        className={`container text-${props.mode === "light" ? "dark" : "light"}`}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
