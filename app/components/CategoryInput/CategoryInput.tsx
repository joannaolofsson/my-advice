import React from 'react';
import styles from './CategoryInput.module.css';
import { CategoryInputProps } from '@/app/types/types';

function CategoryInput({ customTag, setCustomTag, handleAddCustomTag }: CategoryInputProps) {
  return (
    <div>
      <input
        placeholder="Or add new"
        value={customTag}
        onChange={(e) => setCustomTag(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleAddCustomTag}>Add</button>
    </div>
  );
}

export default CategoryInput;
