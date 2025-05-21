import React from "react";
import styles from "../styles/DateSeparator.module.css";

function DateSeparator(props) {
    const { date } = props;
    return (
        <div className={styles.separator}>
            <span className={styles.text}>
                {date}
            </span>
        </div>
    );
}

export default React.memo(DateSeparator);
