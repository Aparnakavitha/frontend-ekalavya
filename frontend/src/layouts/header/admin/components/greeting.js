import React from 'react';
import styles from "./greeting.module.css";

const Greeting = (props) => {
    const {
        welcome,
        name,
        info,
        profile,
        showButtons,
        handleClick,
    } = props;

    return (
        <div className={styles.content}>
            <div className={styles.body}>
                <div className={styles.welcome}>
                    {welcome} {name}
                </div>
                <div className={styles.header}>
                    <div className={styles.info}>
                        {info} {profile}
                    </div>
                    {showButtons ? (
                        <div className={styles.greenlink}>
                            <a href='#' onClick={handleClick}>View Colleges</a>
                            <a href='#' onClick={handleClick}>+Add New College</a>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Greeting;
