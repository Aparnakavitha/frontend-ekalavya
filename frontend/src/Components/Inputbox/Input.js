
import React, { useState } from 'react';
import styles from './Input.module.css'; 

function Input({ width = '100%', height = '57px', label, placeholders, ...rest }) {
  const [clicked, setClicked] = useState(false);

  const handleFocus = () => {
    setClicked(true);
  };
  const handleBlur = () => {
    setClicked(false);
  };

  return (
    <div className={`${styles['input-container']} ${clicked ? styles.clicked : ''}`} style={{ width: width }}>
      <label htmlFor={rest.id} className={styles['input-label']}>
        {label}
      </label>
      {placeholders.map((placeholder, index) => (
        <input
          key={index}
          className={`${styles.input}`}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ height: height }}
        />
      ))}
    </div>
  );
}

export default Input;
