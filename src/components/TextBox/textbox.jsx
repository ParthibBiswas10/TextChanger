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
          ref={textareaRef} // Reference to the textarea for copying text...using ref={textareaRef} i set a reference to the textarea element, so that I can access it later for copying text by using textareaRef.current.select() to select the text inside the textarea.
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
          {text === "" ? 0 : text.split(" ").length} words, {text.length}{" "}
          characters
        </p>
      </div>
    </div>
  );
}

/*
  note: 
🔹 d-flex flex-column flex-md-row justify-content-center gap-3 mt-3
This builds on the previous setup by adding responsive behavior:

d-flex
(Same as above — enables flex layout.)

flex-column
Sets the flex direction to vertical by default — so items stack top → bottom on small screens. 

flex-md-row
At medium screens (≥768 px) and above, the layout switches to horizontal row (flex-direction: row). 

justify-content-center, gap-3, mt-3
Behave exactly the same as described above — centering along the main axis, spacing items, and adding vertical margin.



*/
