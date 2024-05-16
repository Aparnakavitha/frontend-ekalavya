import React from 'react'; 
import styles from './SkillTag.module.css';

function skillTag(props){
  const {
    title,
    subTitle,
    onCloseIcon,
  } = props;
  
  return (
    <div className={styles.card}>
      <div className={styles.innerbox}>
        <a className={styles.title}>{title}</a>

      </div>
      
    </div>
  );
}

export default skillTag;
