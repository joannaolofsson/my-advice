import React from 'react';
import styles from './CategoryInput.module.css';
import { CategoryInputProps } from '@/app/types/types';
import Button from '../ui/Button/Button';

function CategoryInput({ customTag, setCustomTag, handleAddCustomTag }: CategoryInputProps) {
  return (
    <div className={styles.inputWrapper}>
      <input
        placeholder="Or add new"
        value={customTag}
        onChange={(e) => setCustomTag(e.target.value)}
        className={styles.input}
      />
      <Button onClick={handleAddCustomTag}>Add</Button>
    </div>
  );
}

export default CategoryInput;
