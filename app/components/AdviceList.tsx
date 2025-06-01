'use client'

import { useAdvice } from "../context/AdviceContext";

export default function AdviceList() {
    const { adviceList, editAdvice, deleteAdvice } = useAdvice();

    return (
        <ul>
            {adviceList.map((advice, i) => (
                <li key={i}>
                    <div>
                        <h4>{advice.title}</h4>
                        <p>{advice.text}</p>
                    </div>
                    <div>
                        <button onClick={() => {
                            const newTitle = prompt("Edit title", advice.title);
                            const newText = prompt("Edit text", advice.text);
                            if (newTitle && newText) editAdvice(i, { title: newTitle, text: newText });
                        }}
                    >
                        Edit
                        </button>
                        <button onClick={() => deleteAdvice(i)}>
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
}