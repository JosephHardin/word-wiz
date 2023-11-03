import React, {useState, useReducer} from "react";

//import Section from "./Section"
import SectionList from "./SectionList";
import AddSection from "./AddSection"
import Preview from "./Preview"

function sectionsReducer(sections, action) {
    switch (action.type) {
        case 'added': {
            return [...sections, {
                id: action.id,
                title: action.title,
                sectionType : action.sectionType,
                done: false
            }];
        }
        case 'changed': {
            return sections.map(t => {
                if (t.id === action.section.id) {
                    return action.section;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return sections.filter(t => t.id !== action.id);
        }
        case 'up':{


            let ind = 0
            for(let i = 0; i < sections.length; i++){

                if(sections[i].id === action.id) {ind = i}
            }
            if(ind === 0) {return sections}
            const temp = sections[ind]
            sections[ind] = sections[ind-1]
            sections[ind-1] = temp
            return [...sections]

        }
        case 'down':{


            let ind = 0
            for(let i = 0; i < sections.length; i++){

                if(sections[i].id === action.id) {ind = i}
            }
            if(ind === sections.length - 1) {return sections}
            const temp = sections[ind]
            sections[ind] = sections[ind+1]
            sections[ind+1] = temp
            return [...sections]

        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default function SectionApp() {
    const [sections, dispatch] = useReducer(
        sectionsReducer,
        initialSections
    );
    const [edit, setEdit] = useState(true)

    function handleAddSection(title, sectionType) {
        console.log(sectionType)
        dispatch({
            type: 'added',
            id: nextId++,
            title: title,
            sectionType:  sectionType
        });
    }

    function handleChangeSection(section) {
        dispatch({
            type: 'changed',
            section: section
        });
    }
    function handleMoveUpSection(sectionId) {
        dispatch({
            type: 'up',
            id: sectionId
        });
    }
    function handleMoveDownSection(sectionId) {
        dispatch({
            type: 'down',
            id: sectionId
        });
    }

    function handleDeleteSection(sectionId) {
        dispatch({
            type: 'deleted',
            id: sectionId
        });
    }
    function handleEdit(editState){
        setEdit(editState)
        if (editState){
            alert("You Can Now Edit")
        }
        else{
            alert("You Are in Preview")
        }
    }

    return (
        <>
            <h1>Page Title</h1> <h1>Date</h1>
            <AddSection
                onAddSection={handleAddSection}

            />
            <SectionList
                sections={sections}
                onChangeSection={handleChangeSection}
                onDeleteSection={handleDeleteSection}
                onMoveUpSection={handleMoveUpSection}
                onMoveDownSection={handleMoveDownSection}
            />

            <Preview onEdit={handleEdit} />
        </>
    );
}

let nextId = 3;
const initialSections = [
    { id: 0, title: 'Introduction', sectionType: 'text', done: true },
    { id: 1, title: 'Methods', sectionType: 'text', done: false },
    { id: 2, title: 'Conclusion', sectionType: 'text', done: false }
];
