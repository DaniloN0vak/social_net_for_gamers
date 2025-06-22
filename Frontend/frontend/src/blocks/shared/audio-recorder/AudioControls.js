import React from 'react';
import styles from './AudioControls.module.css';
import pause from '../../../assets/images/custom-audio-player/pause.png';
import play from '../../../assets/images/custom-audio-player/play.png';
import trash from '../../../assets/images/file-picker-area/trash.png';
import stopImg from '../../../assets/images/file-picker-area/stop.png';
import sentSelected from '../../../assets/images/message-form/arrow-selected.png';

export default function AudioControls({ isPaused, pauseRecording, resumeRecording, stopRecording, cancelRecording, onSend, children }) {
    return (
        <div className={styles.controls}>

            {/* <div className={styles.addButtons}>
                <button type='button' className={styles.play} onClick={isPaused ? resumeRecording : pauseRecording}>
                    {isPaused ? (
                        <img src={play} alt='play' />
                    ) : (
                        <img src={pause} alt='pause' className={styles.pause}/>
                    )}
                </button>
                <button type='button' onClick={stopRecording} className={styles.stop}>
                    <img src={stopImg} alt='remove' />
                </button>
            </div> */}
            {children}
            <div className={styles.mainButtons}>
                <button type='button' onClick={cancelRecording} className={styles.trash}>
                    <img src={trash} alt='cancel' />
                </button>
                <button onClick={onSend} className={styles.sent}>
                    <img src={sentSelected} alt='sent' />
                </button>
            </div>
        </div >
    );
}
