import React from 'react';
import styles from "./action.module.css";
import PrimaryButton from '../../../../components/buttons/PrimaryButton';
import Searchbar from '../../../../components/searchbar/Searchbar';
import Filter from '../../../../components/filter/Filter';

const Action = ({
  buttonProps,
  heading,
  searchbarProps,
  filterProps = [],
  resetProps,
  showFiltersAndReset,
  searchWidth = 'full'
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.top}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.buttons}>
          <PrimaryButton {...buttonProps} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`${styles.search} ${styles[searchWidth]}`}>
          <Searchbar {...searchbarProps} />
        </div>
        {showFiltersAndReset && (
          <div className={styles.right}>
            <div className={styles.filter}>
              {filterProps.map((props, index) => (
                <Filter key={index} {...props} />
              ))}
            </div>
            <div className={styles.reset}>
              <PrimaryButton {...resetProps} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Action;
