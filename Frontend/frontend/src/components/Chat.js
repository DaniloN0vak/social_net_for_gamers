import React, { useState, useEffect, useRef } from 'react';
import MessageGroupList from './MessageGroupList';
import styles from '../styles/Chat.module.css';
import defaultAvatar from '../assets/images/default-avatar.png';
import magnifier from '../assets/images/magnifier.png';
import phoneReceiver from '../assets/images/phone-receiver.png';
import threeStripes from '../assets/images/three-stripes.png';
import smiley from '../assets/images/smiley.png';
import gifImg from '../assets/images/gif.png';
import arrow from '../assets/images/arrow.png';
import microfon from '../assets/images/microfon.png';
import cross from '../assets/images/cross.png';

function Chat(props) {
    const { messages, currentUser, companion } = props;

    const textareaRef = useRef(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = textarea.scrollHeight + 'px';
        }
    };


    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, 1500);
    };

    return (
        <div className={styles.container}>

            <div
                className={styles.header}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div
                    className={`${styles.headerItem} ${isHovered ? styles.visible : ''}`}
                >
                    <div className={styles.info}>
                        <div className={styles.image}>
                            <img src={companion?.avatart || defaultAvatar} alt='Avatar' />
                        </div>
                        <div className={styles.descr}>
                            <div className={styles.name}>
                                {companion?.firstName} {companion?.lastName}
                            </div>
                            <div className={styles.event}>
                                {companion.event}
                            </div>
                        </div>
                    </div>
                    <div className={styles.images}>
                        <img src={phoneReceiver} alt='Call' />
                        <img src={magnifier} alt='Search' />
                        <img src={threeStripes} alt='Additional' />
                    </div>
                </div>
            </div>
            <MessageGroupList messages={messages} currentUserId={currentUser.id} />
            <div className={styles.messageInputContainer}>
                <form name="messageInput" className={styles.messageForm}>
                    <textarea
                        ref={textareaRef}
                        name="message"
                        className={styles.messageInput}
                        autoComplete="off"
                        placeholder="Напишіть ваше повідомлення"
                        onInput={handleInput}
                        rows={1}
                    />
                    <div className={styles.messageImages}>
                        <button type="button"><img src={smiley} alt="emoji" /></button>
                        <button type="button"><img src={gifImg} alt="gif" /></button>
                        <button type="button"><img src={cross} alt="cross" /></button>
                        <button type="button"><img src={microfon} alt="audio" /></button>
                        <button type="submit"><img src={arrow} alt="send" /></button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default React.memo(Chat);
