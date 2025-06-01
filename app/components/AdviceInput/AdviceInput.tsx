import { useState } from "react";
import Input from "../CategoryInput/CategoryInput";
import styles from './AdviceInput.module.css';
import { AdviceInputProps } from "@/app/types/types";

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value); 
};

export const AdviceInput = ({ customTag, setCustomTag, handleAddCustomTag }: AdviceInputProps) => {
    const [availableCategories, setAvailableCategories] = useState<string[]>([]); // fix typo in setter

  const handleAddCategory = (newCategory: string) => {
    if (newCategory && !availableCategories.includes(newCategory)) {
      setAvailableCategories([...availableCategories, newCategory]);
    }
  };
  return (
    <div className={styles.customTag}>
        <div className={styles.inputWrapper }>
        <label htmlFor="name" className={styles.inputLabel}>Tag</label>
       <Input onAddCategory={handleAddCategory} />  
        </div>
      <button onClick={handleAddCustomTag} className={styles.inputBtn}>Add Tag</button>
    </div>
  );
};
