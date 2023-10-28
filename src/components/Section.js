import React, { useState } from "react";
import {Tiptap} from "./TipTap";

const Section = ({ id, onDelete, title }) => {
    const [description, setDescription] = useState("");
    return (
        <section>
            <h1>{title}</h1>
            <button onClick={() => onDelete(id)}>Delete</button>
            <Tiptap setDescription={setDescription} />
            <hr />
        </section>

    );
};

export default Section;