import React, { useRef, useState, useEffect } from 'react';
import styles from './CustomAudioPlayer.module.css';
import pause from '../../../assets/images/custom-audio-player/pause.png';
import play from '../../../assets/images/custom-audio-player/play.png';
import AudioTimer from '../audio-recorder/AudioTimer';


function CustomAudioPlayer({ src }) {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (!isNaN(audio.duration) && audio.duration > 0) {
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100);
        } else {
            setProgress(0);
            setCurrentTime(0);
        }
    };

    const handleLoadedMetadata = () => {
        const audio = audioRef.current;
        setDuration(audio.duration);
    };

    const handleProgressClick = (e) => {
        if (duration <= 0) return;  

        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newProgress = clickX / rect.width;
        const audio = audioRef.current;
        audio.currentTime = newProgress * audio.duration;
        setProgress(newProgress * 100);
        setCurrentTime(audio.currentTime);
    };

    useEffect(() => {
        const audio = audioRef.current;
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        return () => {
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [src]);

    return (
        <div className={styles.audioPlayer}>
            <audio
                ref={audioRef}
                src={src}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
                preload="metadata"
            />
            <button
                type='button'
                onClick={togglePlay}
                className={styles.playButton}
                aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
            >
                {isPlaying ? <img src={pause} alt='Pause' className={styles.play} /> : <img src={play} alt='Play' />}
            </button>
            <div
                className={styles.progressBar}
                onClick={handleProgressClick}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={duration}
                aria-valuenow={currentTime}
                tabIndex={0}
            >
                <div
                    className={styles.progress}
                    style={{ width: `${progress}%` }}
                />
            </div>
            <AudioTimer isPaused={!isPlaying} time={currentTime} withDot={false} />
        </div>
    );
}


export default CustomAudioPlayer;
