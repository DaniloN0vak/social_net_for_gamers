import React, { memo, useEffect, useCallback, useState } from "react";
import styles from './Media.module.css';
import LargeImageModal from '../large-image-modal/LargeImageModal';
import { sortImageUrlsByAspectRatio } from '../../../utils/imageUtils';
import isEqual from 'lodash.isequal';

function Media({ media }) {
    const [sortedImageUrls, setSortedImageUrls] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSelectImage = useCallback((src) => {
        const index = sortedImageUrls.findIndex(img => img.src === src);
        if (index >= 0) {
            setCurrentIndex(index);
            setSelectedImage(src);
        }
    }, [sortedImageUrls]);

    useEffect(() => {
        let isMounted = true;

        async function sortImages() {
            if (!Array.isArray(media) || media.length === 0) {
                if (isMounted) setSortedImageUrls([]);
                return;
            }

            const sorted = await sortImageUrlsByAspectRatio(media);

            if (!isMounted) return;

            setSortedImageUrls(prevImages => {
                const prevUrls = prevImages.map(img => img.src);
                const newUrls = sorted.map(img => img.src);

                if (isEqual(newUrls, prevUrls)) {
                    return prevImages;
                }

                return sorted;
            });
        }

        sortImages();

        return () => {
            isMounted = false;
        };
    }, [media]);

    const imgOrVideo = useCallback((src, onClick) =>
        /\.(mp4|webm|ogg)$/i.test(src) ? (
            <video controls className={styles.medium} src={src} onClick={onClick} />
        ) : (
            <img src={src} alt="media" className={styles.medium} onClick={onClick} style={{ cursor: 'pointer' }} />
        ),
        []);

    const renderImages = useCallback((media) => {
        const handleClick = (src) => handleSelectImage(src);
        let mediaElement;
        switch (media.length) {
            case 1: {
                if (media[0].ratio > 1) {
                    mediaElement = (
                        <div className={styles.medium1hor}>
                            {imgOrVideo(media[0].src, () => handleClick(media[0].src))}
                        </div>
                    );
                } else {
                    mediaElement = (
                        <div className={styles.medium1ver}>
                            {imgOrVideo(media[0].src, () => handleClick(media[0].src))}
                        </div>
                    );
                }
            } break;
            case 2: {
                mediaElement = (
                    <div className={styles.media2}>
                        <div>{imgOrVideo(media[0].src, () => handleClick(media[0].src))}</div>
                        <div>{imgOrVideo(media[1].src, () => handleClick(media[1].src))}</div>
                    </div>
                );
            } break;
            case 3: {
                mediaElement = (
                    <div className={styles.media3}>
                        <div className={styles.media3Item}>
                            {imgOrVideo(media[0].src, () => handleClick(media[0].src))}
                        </div>
                        <div className={`${styles.media3Column} ${styles.media3Item}`}>
                            <div className={styles.media3ColumnItem}>
                                {imgOrVideo(media[1].src, () => handleClick(media[1].src))}
                            </div>
                            <div className={styles.media3ColumnItem}>
                                {imgOrVideo(media[2].src, () => handleClick(media[2].src))}
                            </div>
                        </div>
                    </div>
                );
            } break;
            case 4: {
                mediaElement = (
                    <div className={styles.media4}>
                        <div className={styles.media4Column}>
                            <div className={styles.media4ColumnItem}>
                                {imgOrVideo(media[0].src, () => handleClick(media[0].src))}
                            </div>
                            <div className={styles.media4ColumnItem}>
                                {imgOrVideo(media[1].src, () => handleClick(media[1].src))}
                            </div>
                        </div>
                        <div className={styles.media4Column}>
                            <div className={styles.media4ColumnItem}>
                                {imgOrVideo(media[2].src, () => handleClick(media[2].src))}
                            </div>
                            <div className={styles.media4ColumnItem}>
                                {imgOrVideo(media[3].src, () => handleClick(media[3].src))}
                            </div>
                        </div>
                    </div>
                );
            } break;
            case 5: {
                mediaElement = (
                    <div className={styles.media5}>
                        <div className={styles.media5Item}>
                            {imgOrVideo(media[0].src, () => handleClick(media[0].src))}
                        </div>
                        <div className={styles.media5Column}>
                            <div className={styles.media5ColumnItem}>
                                {imgOrVideo(media[1].src, () => handleClick(media[1].src))}
                            </div>
                            <div className={styles.media5ColumnItem}>
                                {imgOrVideo(media[2].src, () => handleClick(media[2].src))}
                            </div>
                        </div>
                        <div className={styles.media5Column}>
                            <div className={styles.media5ColumnItem}>
                                {imgOrVideo(media[3].src, () => handleClick(media[3].src))}
                            </div>
                            <div className={styles.media5ColumnItem}>
                                {imgOrVideo(media[4].src, () => handleClick(media[4].src))}
                            </div>
                        </div>
                    </div>
                );
            } break;
            default: {
                mediaElement = null;
            }
        }
        return mediaElement;
    }, [imgOrVideo, handleSelectImage]);

    return (
        <>
            <div className={styles.media}>
                {renderImages(sortedImageUrls)}
            </div>
            {selectedImage && (
                <LargeImageModal
                    src={selectedImage}
                    onClose={() => setSelectedImage(null)}
                    images={sortedImageUrls}
                    currentIndex={currentIndex}
                    setCurrentIndex={(index) => {
                        setCurrentIndex(index);
                        if (sortedImageUrls[index]) {
                            setSelectedImage(sortedImageUrls[index].src);
                        } else {
                            setSelectedImage(null);
                        }
                    }}
                />
            )}
        </>
    );
}

export default memo(Media);
