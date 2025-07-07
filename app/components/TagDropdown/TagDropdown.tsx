'use client';
import React, { useState } from 'react';
import styles from './TagDropdown.module.css';
import { availableCategories } from '../options';
import CategoryInput from '../CategoryInput/CategoryInput';
import { TagProps } from '@/app/types/types';

function TagDropdown({ tags, setTags }: TagProps) {
  const [category, setCategory] = useState<string>("");
  const [customTag, setCustomTag] = useState("");
  const [isAddingCustomTag, setIsAddingCustomTag] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "custom") {
      setIsAddingCustomTag(true);
    } else if (value === "deselect") {
      setTags([]);
      setCategory("");
      setIsAddingCustomTag(false);
    } else {
      setIsAddingCustomTag(false);
      setCategory(value);
      if (value && !tags.includes(value)) {
        setTags([...tags, value]);
      }
    }
  };

  const handleAddCustomTag = () => {
    const newTag = customTag.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setCustomTag("");
      setIsAddingCustomTag(false);
    }
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.selectWrapper}>
        <label htmlFor="">
          <span className={styles.headLabel}>Choose tag</span>
        </label>
        <select value={category} onChange={handleSelectChange} className={styles.select}>
          <option value="" className={styles.searchTag}>Choose tags</option>
          {availableCategories.map((option) => (
            <option key={option.value} value={option.label} className={styles.option}>
              {option.label}
            </option>
          ))}
          <option value="custom" className={styles.option}>Add Custom Tag...</option>
        </select>
      </div>
      {isAddingCustomTag && (
        <CategoryInput
          customTag={customTag}
          setCustomTag={setCustomTag}
          handleAddCustomTag={handleAddCustomTag}
        />
      )}
    </div>
  );
}

export default TagDropdown;
