'use client'
import { useState } from "react";
import styles from './AdviceSection.module.css';
import Button from "../ui/Button/Button";
import { useAdvice } from "../../context/AdviceContext";
import CategoryManager from "../TagManager/TagManager";
import { fetchAdviceData } from "@/app/services/fetchAdviceData";

export default function AdviceSection() {
    const [title, setTitle] = useState("Advice #56");
    const [category, setCategory] = useState<string>("");
    const [text, setText] = useState("Try to do things that you're incapable of.");
    const [tags, setTags] = useState<string[]>([]);

    const { addAdvice } = useAdvice();

    const fetchAdvice = async () => {
        try {
            const slip = await fetchAdviceData();
            setTitle(`Advice #${slip.id}`);
            setText(slip.advice);
            setTags([]);
            setCategory("");
        } catch (err) {
            console.error("Failed to fetch advice", err);
        }
    };

    const handleSave = () => {
        addAdvice({ title, text, tags });
    };

    return (
        <div className={styles.container}>
            <div className={styles.adviceRow}>
                <span className={styles.adviceTitle}>{title}</span>
                <h2>{text}</h2>
                <Button variant="primary" onClick={fetchAdvice}>Skip</Button>
            </div>
            <div className={styles.selectRow}>
                <CategoryManager tags={tags} setTags={setTags} />
                <Button variant="secondary" onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}