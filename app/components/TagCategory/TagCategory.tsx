import { TagProps } from "@/app/types/types";
import styles from './TagCategory.module.css';

const TagCategory = ({ tags, setTags }: TagProps) => {
  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className={styles.badgeWrapper}>
      {tags.map((tag, index) => (
        <div key={index} className={styles.badge}>
          {tag} 
          <span className={styles.removeBtn} onClick={(e) => {
            e.stopPropagation(); 
            handleRemoveTag(tag);
          }}>
            &times;
          </span>
        </div>
      ))}
    </div>
  );
};

export default TagCategory;
