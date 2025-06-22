import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/HeaderItem.module.css';
import defaultAvatar from '../../../../assets/images/different/default-avatar.png';
import phoneReceiver from '../../../../assets/images/chat-header/phone-receiver.png';
import magnifier from '../../../../assets/images/chat-header/magnifier.png';
import threeStripes from '../../../../assets/images/chat-header/three-stripes.png';
import dotAttached from '../../../../assets/images/chat-header/dot-attached.png';
import dot from '../../../../assets/images/chat-header/dot.png';

function HeaderItem({ companion = {}, isAttached, handleAttachClick, isHovered }) {
    const onKeyDownAttach = useCallback((e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleAttachClick();
        }
    }, [handleAttachClick]);

    return (
        <div
            className={`${styles.headerItem} ${isHovered || isAttached ? styles.visible : ''}`}
        >
            <div className={styles.info}>
                <div className={styles.image}>
                    <img src={companion.avatar || defaultAvatar} alt="Avatar" />
                </div>
                <div className={styles.descr}>
                    <div className={styles.name}>
                        {companion.firstName || 'No name'} {companion.lastName || ''}
                    </div>
                    <div className={styles.event}>{companion.event || ''}</div>
                </div>
            </div>
            <div className={styles.images}>
                <img src={phoneReceiver} alt="Call" />
                <img src={magnifier} alt="Search" />
                <img src={threeStripes} alt="Additional" />
            </div>
            <div
                className={styles.btnAttach}
                role="button"
                tabIndex={0}
                aria-pressed={isAttached}
                onClick={handleAttachClick}
                onKeyDown={onKeyDownAttach}
            >
                <img src={isAttached ? dotAttached : dot} alt="attach" />
            </div>
        </div>
    );
}

HeaderItem.propTypes = {
    companion: PropTypes.shape({
        avatar: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        event: PropTypes.string,
    }),
    isAttached: PropTypes.bool.isRequired,
    handleAttachClick: PropTypes.func.isRequired,
    isHovered: PropTypes.bool,
};

HeaderItem.defaultProps = {
    companion: {},
    isHovered: false,
};

export default React.memo(HeaderItem);
