import React from 'react';
import styles from './AudioTimer.module.css';

export default function AudioTimer({ isPaused, time, withDot = true }) {
    const format = (t) => {
        const m = Math.floor(t / 60).toString().padStart(2, '0');
        const s = Math.floor(t % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    };


    return (
        <div className={styles.timer}>
            <span>{format(time)}</span>
            {withDot && <span className={`${styles.dot} ${!isPaused && styles.dotRecord}`}></span>}
        </div>
    );
}
