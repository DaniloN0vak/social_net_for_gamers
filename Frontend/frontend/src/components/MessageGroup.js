
import styles from '../styles/MessageGroup.module.css';
import React, { useMemo } from 'react';
import Message from './Message';



const MessageGroup = React.memo(function MessageGroup(props) {
    const { messages, isLeft } = props;
    const renderedMessages = useMemo(() => {
        const elements = [];

        messages.forEach((msg, index) => {
            elements.push(
                <Message key={msg.id} msg={msg} isLeft={isLeft} />
            );
        });

        return elements;
    }, [messages, isLeft]);

    return (
        <div className={`${styles.main} ${isLeft ? styles.mainLeft : styles.mainRight} `}>
            {renderedMessages}
        </div>
    );
});

export default MessageGroup;
