import React,  { useState } from "react";

export default function TextForm(props) {
  document.title = "Word Wiz - Home";
  let [text, setText] = useState("");
  let [preview, setPreview] = useState(false)

  const handlePreview = () => {
    console.log("Preview Clicked");
    console.log(preview)
    setPreview(!preview);
  };
  const handleLoClick = () => {
    console.log("lowercase clicked");
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    console.log("clear clicked");
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const handleExtraSpaces = () => {
    console.log("RES clicked");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const handleCopy = () => {
    console.log("copy clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleOnChange = (e) => {
    console.log("on change");
    setText(e.target.value);
  };
  const handleChangeTitle = (e) => {
    console.log("on change");
    setText(e.target.value);
  };

  function PreviewToggle(){
    if(preview){
      return (<button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handlePreview}
      >
        Edit
      </button>)
    }
    return(
    <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handlePreview}
      >
        Preview
      </button>

    )
  }




  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        {preview ?
            <div className="container my-3">
          <br />
          <h2>Preview</h2>
          <p>{text}</p>
          </div>
            :
            <div className="mb-3">
          <textarea
              className="form-control"
              id="myBox"
              style={{
                backgroundColor: props.mode === "dark" ? "#04134a" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              value={text}
              rows="8"
              placeholder="Enter the Text here..."
              onChange={handleOnChange}
          ></textarea>
            </div>

        }
        <PreviewToggle />
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary m-1"
          onClick={handleClear}
        >
          Clear Text
        </button>

      </div>

    </>
  );
}
