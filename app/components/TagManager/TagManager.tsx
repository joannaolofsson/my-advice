import React from 'react';
import styles from './TagManger.module.css';
import TagDropdown from '../TagDropdown/TagDropdown';
import TagList from '../TagList/TagList';
import { TagDropdownProps } from '@/app/types/types';

function TagManager({ tags, setTags }: TagDropdownProps) {
  return (
    <div className={styles.selectWrapper}>
      <TagList tags={tags} setTags={setTags} />
      <TagDropdown tags={tags} setTags={setTags} />
    </div>
  );
}

export default TagManager;
