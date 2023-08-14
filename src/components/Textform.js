import React, {useState} from "react";


export default function Textform(props) {
    const[Text, setText] = useState("Enter text here");

    const ConvertUp =()=>{

        console.log("You have clicked on UpperCase Button" + Text);
        let newtext = Text.toUpperCase();
        setText(newtext)

        
    }
    
    const ConvertLow =()=>{

        console.log("You have clicked on UpperCase Button" + Text);
        let lowText = Text.toLowerCase();
        setText(lowText)

    }

    const Clear = ()=>{

        let clear = '';
        setText(clear)
    }

    const ReverseString = ()=>{

        let reverse = Text.split('').reverse().join("");
        setText(reverse)
    }

    const Copy =()=>{


        let copy = document.getElementById('myBox');
        copy.select();
        navigator.clipboard.writeText(copy.value);
    }

    const RmSpace =()=>{

        let rm = Text.split(/[ ]+/);
        setText(rm.join(" "))
    }

    const onChange =(event)=>{

        console.log("Onchange");
        setText(event.target.value);
    }

    
    return (

    <>
    
    
    <div className="container">
      <div className="mb-3">
        <label for="myBox" class="form-label">
          {/* <b>{props.heading} </b> */}
        </label>
        <textarea
          className="form-control" value={Text} onChange={onChange} id="myBox" rows="3"
        ></textarea>

      </div>
      <button className="btn btn-secondary" onClick={ConvertUp}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3"  onClick={ConvertLow}>Convert to LowerCase</button>
      <button className="btn btn-success mx-3"  onClick={ReverseString}>Reverse Text</button>
      <button className="btn btn-warning mx-3"  onClick={Copy}>Clipboard Copy</button>
      <button className="btn btn-info mx-3"  onClick={RmSpace}>Remove Extra Space</button>
      <button className="btn btn-danger mx-3"  onClick={Clear}>Clear</button>
    </div>
    <div className="container my-5" >

        <p>{Text.split(" ").length-1} words and {Text.length} Characters</p>



    </div>

    </>
  );
}
