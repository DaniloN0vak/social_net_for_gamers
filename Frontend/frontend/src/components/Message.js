import React, { useState, useEffect } from 'react';
import styles from '../styles/Message.module.css';
import { formatRelativeDateTime } from '../utils/dateUtils';
import { sortImageUrlsByAspectRatio } from '../utils/imageUtils';
import isEqual from 'lodash.isequal';

const Message = React.memo(function Message(props) {
    const { content, sentAt, isEdited, isRead, media, user, isLeft } = props;
    const [sortedImageUrls, setSortedImageUrls] = useState([]);

    useEffect(() => {
        let isMounted = true;

        async function sortImages() {
            if (!media || media.length === 0) {
                if (isMounted) setSortedImageUrls([]);
                return;
            }

            const sorted = await sortImageUrlsByAspectRatio(media);

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

    const imgOrVideo = (src) => {
        {
            return /\.(mp4|webm|ogg)$/i.test(src) ? (
                <video controls className={styles.medium} src={src} />
            ) : (
                <img src={src} alt={`media-1`} className={styles.medium} />
            )
        }
    };

    const renderImages = (media) => {
        let mediaCode;
        switch (media.length) {
            case 1: {
                if (media[0].ratio > 1) {
                    mediaCode = (
                        <div className={styles.medium1hor}>
                            {imgOrVideo(media[0].src)}
                        </div>
                    );
                }
                else {
                    mediaCode = (
                        <div className={styles.medium1ver}>
                            {imgOrVideo(media[0].src)}
                        </div>
                    );
                }
            } break;
            case 2: {
                mediaCode = (
                    <div className={styles.media2}>
                        <div>
                            {imgOrVideo(media[0].src)}
                        </div>
                        <div>
                            {imgOrVideo(media[1].src)}
                        </div>
                    </div>
                );
            } break;
            case 3: {
                mediaCode = (
                    <div className={styles.media3}>
                        <div className={styles.media3Item}>
                            {imgOrVideo(media[0].src)}
                        </div>
                        <div className={`${styles.media3Column} ${styles.media3Item}`}>
                            <div className={styles.media3ColumnItem}>
                                {imgOrVideo(media[1].src)}
                            </div>
                            <div className={styles.media3ColumnItem}>
                                {imgOrVideo(media[2].src)}
                            </div>

                        </div>
                    </div>
                );
            } break;
            case 4: {
                mediaCode = (
                    <div className={styles.media4}>
                        <div className={styles.media4Item}>
                            {imgOrVideo(media[0].src)}
                        </div>
                        <div className={`${styles.media3Column} ${styles.media3Item}`}>
                            <div className={styles.media3ColumnItem}>
                                {imgOrVideo(media[1].src)}
                            </div>
                            <div className={styles.media3ColumnItem}>
                                {imgOrVideo(media[2].src)}
                            </div>

                        </div>
                    </div>
                );
            } break;
            case 5: {

            } break;
            case 6: {

            } break;
            case 7: {

            } break;
            case 8: {

            } break;
            case 9: {

            } break;
            case 10: {

            } break;
        }
        return mediaCode;
    };

    const message = (
        <div className={`${styles.main} ${isLeft ? styles.mainLeft : styles.mainRight}`}>
            <div className={`${styles.info}`}>
                <div className={styles.infoImage}>
                    <div className={styles.avatar} >
                        <img src={user?.avatar || '/default-avatar.png'} alt="Avatar" />
                    </div>
                </div>
                <div className={styles.infoName}>
                    {user.firstName} {user.lastName}
                </div>
                <div className={styles.infoTime}>
                    {formatRelativeDateTime(sentAt)}
                </div>
                {/* <div className={styles.isRead}>
                    {isRead ? <p>Read</p> : <p>Not read</p>}
                </div> */}
            </div>
            <div className={styles.content}>
                <div className={styles.contentText}>
                    {content} {isEdited &&
                        <span className={styles.isEdited}>(змінено)</span>}
                </div>

                {media && media.length > 0 && (
                    <div className={styles.media}>
                        {renderImages(sortedImageUrls)}
                    </div>
                )}

            </div>
        </div>
    );
    return message;
});

export default Message;