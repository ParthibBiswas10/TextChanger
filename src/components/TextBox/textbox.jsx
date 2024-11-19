import React,{useState} from 'react'

export default function Textbox() {
const [text, setText]=useState('Enter Text Here');
const upperCase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
}
const changing=(e)=>{
    setText(e.target.value);
}
  return (
    <div>
    
<div className="mt-5 mb-1 flex flex-col justify-center items-center">
<h2>Text Changer</h2>

  <textarea className="mt-5 form-control border-5 border-b-slate-950" value={text} onChange={changing} id="exampleFormControlTextarea1" rows="15"></textarea>
</div>
<button className="btn btn-primary" onClick={upperCase} >UpperCase</button>
    </div>
  )
}
