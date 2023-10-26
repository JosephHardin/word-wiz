import React, {useState} from "react";
import TextForm from "./TextForm";

export default function Section(props) {
    let name = "Butt"
    const Input = () => {
        return <>

                <label>
                    Title: <input name="myInput" />
                </label>
                <hr />
                <label>
                    Checkbox: <input type="checkbox" name="myCheckbox" />
                </label>
                <hr />
                <p>
                    Type:
                    <label>
                        <input type="radio" name="myRadio" value="option1" />
                        Text
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option2" />
                        Insert File (Notebook sections, images, other-file types)
                    </label>

                </p>

            </>
    };

    const [inputList, setInputList] = useState([]);

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<TextForm heading={"Fart"} />));
    };




    return (
        <>
            <h1> {name} </h1>

            <button onClick={onAddBtnClick}>Add Section</button>
            {inputList}


        </>
    );
}