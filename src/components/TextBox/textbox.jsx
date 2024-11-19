import React, { useState } from "react";

export default function Textbox() {
  const [text, setText] = useState("");
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
    </div>
  );
}
