import React, { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import MessageGroup from './MessageGroup';
import DateSeparator from './DateSeparator';
import { formatDateForSeparator, checkNewDay } from '../utils/dateUtils';
import styles from '../styles/MessageGroupList.module.css';

function MessageGroupList({ messages, currentUserId }) {
    const renderedItems = useMemo(() => {
        const result = [];
        let group = [];
        let lastUser = null;
        let lastDate = null;

        messages.forEach((msg, index) => {
            const isNewUser = msg.user.id !== lastUser;
            const isNewDay = !lastDate || checkNewDay(lastDate, msg.sentAt);

            if (group.length && (isNewUser || isNewDay)) {
                result.push({ type: 'group', messages: group, isLeft: group[0].user.id !== currentUserId });
                group = [];
            }

            if (isNewDay) {
                result.push({ type: 'date', date: msg.sentAt });
            }

            group.push(msg);
            lastUser = msg.user.id;
            lastDate = msg.sentAt;
        });

        if (group.length) {
            result.push({ type: 'group', messages: group, isLeft: group[0].user.id !== currentUserId });
        }

        return result;
    }, [messages, currentUserId]);

    return (
        <div className={styles.container}>
            <Virtuoso
                data={renderedItems}
                className={styles.myScrollContainer}
                style={{ height: '100%' }}
                itemContent={(index, item) => {
                    if (item.type === 'group') {
                        return (
                            <MessageGroup
                                messages={item.messages}
                                isLeft={item.isLeft}
                                key={`group-${item.messages[0].id}`}
                            />
                        );
                    }

                    if (item.type === 'date') {
                        return (
                            <DateSeparator
                                date={
                                    item.date instanceof Date
                                        ? formatDateForSeparator(item.date)
                                        : 'Невідомо'
                                }
                            />
                        );
                    }

                    return null;
                }}

                followOutput="smooth"
                initialTopMostItemIndex={renderedItems.length - 1}
            />
        </div>
    );
}

export default React.memo(MessageGroupList);