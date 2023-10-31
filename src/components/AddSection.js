import React, { useState } from 'react';

export default function AddSection({ onAddSection }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Section Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddSection(title);
            }}>Add Section</button>
        </>
    )
}
