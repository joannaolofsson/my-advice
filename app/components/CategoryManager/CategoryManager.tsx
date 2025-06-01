import React, {useState} from 'react'
import styles from './CategoryManger.module.css';
import CategoryDropdown from '../CategoryDropdown/CategoryDropdown';
import TagCategory from '../TagCategory/TagCategory';
import { CategoryManagerProps } from '@/app/types/types';

function CategoryManager({tags, setTags}: CategoryManagerProps) {
    const [availableCategories, setAvailableCategories] = useState<string[]>([]); 

    const handleAddCategory = (newCategory: string) => {
    if (newCategory && !availableCategories.includes(newCategory)) {
      setAvailableCategories([...availableCategories, newCategory]);
    }
  };

  return (
    <div className={styles.selectWrapper}>
        <CategoryDropdown tags={tags || []} setTags={setTags} />
        <TagCategory tags={tags} setTags={setTags} />
    </div>
  )
}

export default CategoryManager;