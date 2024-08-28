import React from 'react'
import styles from './StackCard.module.css';


const StackCard = ({content}) => {
  return (
    <div className={`${styles["stackcard"]}`}>
      {content}
    </div>
  )
}

export default StackCard
