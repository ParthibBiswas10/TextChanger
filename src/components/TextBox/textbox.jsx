import React, { useState, useRef } from "react";

export default function Textbox() {
  const [showPopup, setShowPopup] = useState(false);
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    setText("");
  };
  const copy = () => {
    textareaRef.current.select(); // Select the text inside the textarea
    navigator.clipboard.writeText(textareaRef.current.value);
    setShowPopup(true); // Show popup
    setTimeout(() => setShowPopup(false), 1000);
  };
  const changing = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <div className="mt-5 mb-1 flex flex-col justify-center items-center">
        <h2>Text Changer</h2>

        <textarea
          className="mt-5 form-control border-5 border-b-slate-950"
          value={text}
          placeholder="Enter Text Here"
          onChange={changing}
          rows="15"
          ref={textareaRef}
        ></textarea>
      </div>
      <button className="btn btn-primary mt-3 btn-25" onClick={upperCase}>
        UpperCase
      </button>
      <button className="btn btn-primary mx-5 mt-3 btn-25" onClick={lowerCase}>
        LowerCase
      </button>
      <button className="btn btn-primary mx-3 mt-3 btn-25" onClick={clear}>
        Clear
      </button>

      <button className="btn btn-primary mx-3 mt-3 btn-25" onClick={copy}>
        Copy
      </button>
      {showPopup && (
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-slate-600 text-black p-2 rounded shadow-lg ">
          Copied to Clipboard!
        </div>
      )}
    </div>
  );
}
