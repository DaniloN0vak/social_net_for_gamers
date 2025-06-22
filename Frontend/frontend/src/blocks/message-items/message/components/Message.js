import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Message.module.css';
import { formatRelativeDateTime } from '../../../../utils/dateUtils';
import defaultAvatar from '../../../../assets/images/different/default-avatar.png';
import Media from '../../../shared/media/Media';

const Message = React.memo(function Message({ msg, isLeft }) {
    const { content, sentAt, isEdited, media, user } = msg;

    const date = sentAt instanceof Date ? sentAt : new Date(sentAt);
    const formattedTime = isNaN(date.getTime()) ? 'Дата не вказана' : formatRelativeDateTime(date);

    const userName = user ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() : 'Unknown User';

    return (
        <div className={`${styles.main} ${isLeft ? styles.mainLeft : styles.mainRight}`}>
            <div className={styles.info}>
                <div className={styles.infoImage}>
                    <div className={styles.avatar}>
                        <img src={user?.avatar || defaultAvatar} alt={`${userName} avatar`} />
                    </div>
                </div>
                <div className={styles.infoName}>{userName}</div>
                <div className={styles.infoTime}>{formattedTime}</div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentText}>
                    {content}
                    {isEdited && <span className={styles.isEdited} style={{ marginLeft: '4px' }}>(змінено)</span>}
                </div>
                {media && media.length > 0 && <Media media={media} />}
            </div>
        </div>
    );
});

Message.propTypes = {
    isLeft: PropTypes.bool.isRequired,
    msg: PropTypes.shape({
        content: PropTypes.string.isRequired,
        sentAt: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.string,
        ]).isRequired,
        isEdited: PropTypes.bool,
        media: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
                ratio: PropTypes.number,
            })
        ),
        user: PropTypes.shape({
            avatar: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
        }),
    }).isRequired,
};

export default Message;
