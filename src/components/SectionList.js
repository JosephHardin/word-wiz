import React, { useState } from 'react';
import { TipTap } from "./TipTap";
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
                    Edit Title
                </button>
            </>
        );
    }
    return (
        <>

            {sectionContent}
            <TipTap setDescription={setDescription}/>
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
