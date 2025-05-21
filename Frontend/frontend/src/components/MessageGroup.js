
import styles from '../styles/MessageGroup.module.css';
import React, { useMemo } from 'react';
import Message from './Message';
import DateSeparator from './DateSeparator';
import { formatDateForSeparator, isNewDay } from '../utils/dateUtils';



const GroupMessage = React.memo(function GroupMessage(props) {
    const { messages, isLeft } = props;
    const renderedMessages = useMemo(() => {
        const elements = [];
        let lastDate = null;

        messages.forEach((msg, index) => {

            const msgDate = msg.sentAt;

            if (!lastDate || isNewDay(lastDate, msgDate)) {
                elements.push(
                    <DateSeparator key={`date-${msg.id}`} date={formatDateForSeparator(msg.sentAt)} style={styles.separator} />
                );
            }

            elements.push(
                <Message key={msg.id} {...msg} isLeft={isLeft} style={styles.message} />
            );

            lastDate = msgDate;
        });

        return elements;
    }, [messages, isLeft]);

    return (
        <div style={styles.main}>
            {renderedMessages}
        </div>
    );
});

export default GroupMessage;
