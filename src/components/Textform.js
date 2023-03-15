import React, {useState} from 'react'
import Navbar from './Navbar'
import Proptypes from 'prop-types'
function Textform(props) {

   const handleUpClick =() =>{
    console.log("uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
   }
    

    const handleLowclick =()=>{
        let newText1= text.toLowerCase();
        setText(newText1);
        props.showAlert("converted to lowercase")

    }
    
    const handleClearClick =()=>
    {
        let newText2 = '';
      setText(newText2);
    }
    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    
    const handleCopy =()=>{
      var text = document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value)

    }
    
    const handleExtraSpaces =()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "))
    }

  const [text,setText] = useState('');
  return (<>
    <div>
        <h2>{props.heading}</h2>
<div className="mb-3">
  <label for="mybox" className="form-label">{props.textbox}</label>
  <textarea className="form-control" value={text} onChange = {handleOnChange} id="mybox" rows="12"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowclick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

</div>

  <div className='container my-4' >
    <h1>Your Text Summary</h1>
    <p>There is total {text.split(" ").length} words and {text.length} characters</p>
  </div>
  </>)
}

export default Textform

