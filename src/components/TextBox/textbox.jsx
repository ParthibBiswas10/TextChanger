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
        {/* <h3 className="my-10 text-xl">Text Changer</h3> */}
        <textarea
          className="mt-5 form-control border-5 "
          value={text}
          placeholder="Enter Text Here"
          onChange={changing}
          rows="15"
          ref={textareaRef}
        ></textarea>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
        <button className="btn btn-primary btn-25" onClick={upperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary btn-25" onClick={lowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary btn-25" onClick={clear}>
          Clear
        </button>
        <button className="btn btn-primary btn-25" onClick={copy}>
          Copy
        </button>
      </div>
      <div className="position-relative">
        {showPopup && (
          <div className="popup-compact bg-white text-black px-3 py-1 rounded shadow-lg">
            Copied to Clipboard!
          </div>
        )}
      </div>
      <div className="preview">
        <h2>Preview </h2>
        <p>
          {text === ""
            ? 0
            : text
                .trim()
                .split(" ")
                .filter((word) => word !== "").length}{" "}
          words, {text.length} characters
        </p>
      </div>
    </div>
  );
}
