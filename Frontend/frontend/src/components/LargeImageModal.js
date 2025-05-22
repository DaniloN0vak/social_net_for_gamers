import React, { useState, useEffect } from 'react';
import styles from '../styles/LargeImageModel.module.css'

const LargeImageModal = ({ src, onClose, images, currentIndex, setCurrentIndex }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []); 

    useEffect(() => {
        setIsVisible(true);

        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft' && currentIndex > 0) goPrev(e);
            if (e.key === 'ArrowRight' && currentIndex < images.length - 1) goNext(e);
            if (e.key === 'Escape') handleClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    const goPrev = (e) => {
        e.stopPropagation();
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const goNext = (e) => {
        e.stopPropagation();
        if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    };

    return (
        <div
            className={`${styles.modalOverlay} ${isVisible ? styles.modalVisible : styles.modalHidden}`}
            onClick={handleClose}
        >
            {currentIndex > 0 && (
                <button className={styles.arrowLeft} onClick={goPrev}>&#9664;</button>
            )}
            <img
                src={src}
                alt="selected"
                onClick={e => e.stopPropagation()}
            />
            {currentIndex < images.length - 1 && (
                <button className={styles.arrowRight} onClick={goNext}>&#9654;</button>
            )}
        </div>
    );
};

export default LargeImageModal;
