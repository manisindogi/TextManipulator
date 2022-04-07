import React,{useState} from 'react'




export default function Textform(props) {

    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success");
    }
    const handleLoClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text cleared!", "success");
    }
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success");
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }


    const [text, setText]= useState('');
  return (
      <>
        <div className= "container" style={{color:props.mode==='dark'?'white':'#303552'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#303552'}} rows="8"></textarea>
            </div>
            <button disabled ={text.lengt===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppecrase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>

        <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#303552'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.lenghth!==0}).length} Words and {text.length} Characters.</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.lenghth!==0}).length} Minutes to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
        </div>
     </>
    )
}
