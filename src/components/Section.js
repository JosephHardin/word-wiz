import React, {useState} from "react";
import TextForm from "./TextForm";
import { Tiptap } from "./TipTap"

export default function Section(props) {
    let name = "Butt"
    const [description, setDescription] = useState("");
    const [inputList, setInputList] = useState([]);

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


    const onAddSectionBtnClick = event => {
        setInputList(inputList.concat( <Tiptap setDescription={setDescription} />));
    };




    return (
        <>
            <h1> {name} </h1>

            <button onClick={onAddSectionBtnClick}>Add Section</button>
            {inputList}
            



        </>
    );
}