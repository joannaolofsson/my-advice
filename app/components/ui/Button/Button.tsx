import React from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '@/app/types/types';

function Button({variant = "primary", children, onClick}: ButtonProps) {
  return (
    <div>
       <button className={`${styles.button} ${styles[variant] || ""}`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button