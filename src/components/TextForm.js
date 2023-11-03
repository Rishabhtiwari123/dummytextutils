import React,{useState} from 'react'
export default function TextForm({heading,myStyle,showAlert}) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        showAlert("Converted to uppercase!",'success')

    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        showAlert("Converted to lowercase!",'primary')
    }
    const handleClearClick=()=>{
        let newText=''
        setText(newText)
        showAlert('Cleared Successfully','success')
    }
    const handleCopy=()=>{
       let text=document.getElementById('myBox');
       text.select();
       text.setSelectionRange(0,999);
       navigator.clipboard.writeText(text.value)
        showAlert('Copied to Clipboard','success')
    }
    const [text,setText]=useState('')
  return (
    <>
    <div className='container my-3' style={myStyle}>
        <h1>{heading}</h1>
<div className="mb-3">
  <textarea  value={text} onChange={(e)=>{setText(e.target.value)}} className="form-control" id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={myStyle}>
        <h1>Your text summary</h1>
        <p>{text.split(' ').length===0?0:text.split(' ').length} words {text.length} characters</p>
        <p>{0.008*text.split(' ').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
