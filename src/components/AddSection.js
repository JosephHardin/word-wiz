import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

export default function AddSection({ onAddSection }) {
    const [title, setTitle] = useState('');
    const [type, setType] = useState("text")
    return (
        <>
            <input
                placeholder="Section Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <Form.Select aria-label="select-type" onChange={e =>setType(e.target.value)}>
                <option value="text">Text</option>
                <option value="draw">Free Draw</option>
                <option value="table">Table</option>
            </Form.Select>

            <button onClick={() => {
                setTitle('');
                setType('text')

                onAddSection(title, type); // need to add type
            }}>Add Section</button>
        </>
    )
}
