import React from "react";
import TextForm from "./TextForm";

export default function Section(props) {
    // let [myStyle, setMyStyle] = useState({
    //   color: "black",
    //   backgroundColor: "white",
    //   border: "1px solid white",
    // });
    document.title = "Word Wiz - About";
    let myStyle = {
        color: props.mode === "light" ? "#030a24" : "#d4ddfa",
        backgroundColor: props.mode === "light" ? "#d4ddfa" : "#030a24",
    };


    return (
        <>
            <TextForm
                heading="Enter Text to analyze"
                //mode={mode}
                //showAlert={showAlert}
            />
        </>
    );
}