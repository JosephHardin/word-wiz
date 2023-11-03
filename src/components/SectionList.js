import React, { useState } from 'react';
import { TipTap } from "./TipTap";
import Canvas from "./Canvas";

export default function SectionList({
                                     sections,
                                     onChangeSection,
                                     onDeleteSection,
                                     onMoveUpSection,
                                     onMoveDownSection
                                 }) {
    return (
        <ul>
            {sections.map(section => (
                <li key={section.id}>
                    <Section
                        section={section}
                        onChange={onChangeSection}
                        onDelete={onDeleteSection}
                        onMoveUp={onMoveUpSection}
                        onMoveDown={onMoveDownSection}
                    />
                </li>
            ))}
        </ul>
    );
}

function SectionType(type, setDescription) {
    console.log(type)
    switch (type){
        case 'text': {
            return <TipTap setDescription={setDescription}/>
        }
        case 'draw': {
            return <Canvas />
        }
        default: {
            return <p>DID NOT GET TYPE</p>
        }
    }
}

function Section({ section, onChange, onDelete , onMoveUp, onMoveDown}) {
    const [isEditing, setIsEditing] = useState(false);
    let sectionContent;
    let setDescription
    if (isEditing) {
        sectionContent = (
            <>
                <input
                    value={section.title}
                    onChange={e => {
                        onChange({
                            ...section,
                            title: e.target.value
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save New Title
                </button>
            </>
        );
    } else {
        sectionContent = (
            <>
                <h3>{section.title} </h3>

                <button onClick={() => setIsEditing(true)}>
                    Edit Section Title
                </button>
            </>
        );
    }
    return (
        <>

            {sectionContent}
            {SectionType(section.sectionType, setDescription)}
            <button onClick={() => onDelete(section.id)}>
                Delete
            </button>
            <button onClick={() => onMoveUp(section.id)}>
                Move Up
            </button>
            <button onClick={() => onMoveDown(section.id)}>
                Move Down
            </button>
            <hr />
        </>
    );
}
