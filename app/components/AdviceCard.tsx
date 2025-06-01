'use client'
import { useState } from "react";
import { useAdvice } from "../context/AdviceContext";
import styles from './AdviceCard.module.css';

export default function AdviceCard()  {
    const [title, setTitle] = useState("Advice #56");
    const [text, setText] = useState("Try to do things that you're incapable of.");
    const { addAdvice } = useAdvice();

    const fetchAdvice = async () => {
        try {
            const res = await fetch("https://api.adviceslip.com/advice?t=", { cache: "no-store"});
            const json = await res.json();
            const slip = json.slip;

            setTitle(`Advice #${slip.id}`);
            setText(slip.advice);
        } catch (err) {
            console.error("Failed to fetch advice", err);
        }
    };

    const handleSave = () => {
        addAdvice({ title, text });
    };

    return (
        <div className={styles.adviceCard}>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className={styles.btnWrapper}>
                <button onClick={fetchAdvice} className={styles.button}>Next</button>
                <button onClick={handleSave} className={styles.button}>Add</button>
            </div>
        </div>
    )
}