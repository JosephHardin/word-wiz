import React, {useState} from "react";
import { Tiptap } from "./TipTap";
import Section from "./Section"

export default function Editor(props) {
    const section = {title:"Title", type:"text", id:50, eyeColor:"blue"};
    const [description, setDescription] = useState("");
    const [sections, setSections] = useState([]);


    function PreviewButton (){
        return(<h1> <button> Preview and Save </button> </h1>)

    }
    const handleSectionAddition = (event) => {
        event.preventDefault();
        section.title = event.target.title.value
        if (sections.length > 0 )
        {

            section.id = Math.max(...sections.map(o => o.id)) + 1

        }
        else
        {
            section.id = 1

        }

        setSections(sections.concat(<Section id = {section.id}
                                             title = {section.title}
                                             onDelete={handleDeleteSection}   />));
    }
    function handleSectionDelete(event,buttonId){
        alert("You Deleted this section" + buttonId)

    }


    const handleDeleteSection = (id) => {
        const updatedSections = sections.filter((sectionId) => sectionId !== id);
        setSections(updatedSections);
    };


    return (
        <>
            <PreviewButton />


            <form onSubmit={handleSectionAddition}>
                <label>
                    Editor Title: <input name="title"/>
                </label>
                <hr />
                <p>
                    Type:
                    <label>
                        <input type="radio" name="myRadio" value="text" />
                        Text
                    </label>
                    <label>
                        <input type="radio" name="myRadio" value="option2" />
                        Table
                    </label>

                </p>
                <input type="submit" value="Add Editor"/>
            </form>

            {sections}



            <PreviewButton />



        </>
    );
}