import React, {useState, useReducer} from "react";

//import Section from "./Section"
import SectionList from "./SectionList";
import AddSection from "./AddSection"


function sectionsReducer(sections, action) {
    switch (action.type) {
        case 'added': {
            return [...sections, {
                id: action.id,
                title: action.title,
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
            console.log(action)

            let ind = 0
            for(let i = 0; i < sections.length; i++){
                console.log(sections[i])
                if(sections[i].id === action.id) {ind = i}
            }
            if(ind === 0) {return sections}
            const temp = sections[ind]
            sections[ind] = sections[ind-1]
            sections[ind-1] = temp
            return [...sections]

        }
        case 'down':{
            console.log(action)

            let ind = 0
            for(let i = 0; i < sections.length; i++){
                console.log(sections[i])
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

    function handleAddSection(title) {
        dispatch({
            type: 'added',
            id: nextId++,
            title: title,
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

    return (
        <>
            <h1>Prague itinerary</h1>
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
        </>
    );
}

let nextId = 3;
const initialSections = [
    { id: 0, title: 'Introduction', done: true },
    { id: 1, title: 'Methods', done: false },
    { id: 2, title: 'Conclusion', done: false }
];
