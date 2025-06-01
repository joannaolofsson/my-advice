'use client';
import { useAdvice } from "../../context/AdviceContext";
import { useState } from "react";
import Button from "../ui/Button/Button";
import styles from './AdviceListSection.module.css';
import TagCategory from "../TagCategory/TagCategory";



export default function AdviceList() {
    const { adviceList, editAdvice, deleteAdvice } = useAdvice();
      const [tags, setTags] = useState<string[]>([]);
    
    return (
       <ul className={styles.container}>
        {adviceList.map((adviceItem, i) => (
        <li key={i}>
      <div className={styles.listRows}>
        <p>{adviceItem.text}</p>
        <p>{adviceItem.category}</p>
       {/*<p className={styles.tags}>
            {adviceItem.tags?.slice(0, 3).join(", ") || "None"}
            {adviceItem.tags?.length > 3 && " ..."}
        </p>*/}

        <div className={styles.listTags}>
            <TagCategory tags={adviceItem.tags?.slice(0, 3) || []} setTags={setTags} />
        </div>

        <div className={styles.btnWrapper}>
          <Button
            variant="secondary"
            onClick={() => {
              const newTitle = prompt("Edit title", adviceItem.title);
              const newText = prompt("Edit text", adviceItem.text);
              const newCategory = prompt("Edit category", adviceItem.category);
              const newTagsString = prompt(
                "Edit tags (comma separated)",
                adviceItem.tags?.join(", ") || ""
              );
              if (
                newTitle !== null && newTitle.trim() !== "" &&
                newText !== null && newText.trim() !== "" &&
                newCategory !== null && newCategory.trim() !== "" &&
                newTagsString !== null
              ) {
                const newTags = newTagsString
                  .split(",")
                  .map(tag => tag.trim())
                  .filter(Boolean);

                editAdvice(i, {
                  title: newTitle.trim(),
                  text: newText.trim(),
                  category: newCategory.trim(),
                  tags: newTags,
                });
              }
            }}
          >
            Edit
          </Button>

          <Button
            variant="secondary"
            onClick={() => deleteAdvice(i)}
          >
            Delete
          </Button>
        </div>
      </div>
    </li>
  ))}
</ul>

    );
}
