import React, { useState, useEffect, useRef, useCallback } from 'react';
import MessageGroupList from '../../../message-items/message-list/components/MessageGroupList';
import styles from '../styles/Chat.module.css';
import { send, getChatById } from '../../../../hooks/apiService';
import Header from '../../header/components/Header';
import MessageInputContainer from '../../footer/components/MessageInputContainer';
import useChatWebSocket from './useChatWebSocket';

function Chat({ chatId }) {
    const currentUserId = 1;
    const [chat, setChat] = useState({
        messages: [],
        companions: [],
        isGroup: false
    });
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [gif, setGif] = useState('');
    const [audioChunks, setAudio] = useState(null);
    const [err, setErr] = useState("");

    const handleNewMessage = useCallback((newMsg) => {
        setChat(prev => {
            if (!prev || !prev.messages) return prev;
            return {
                ...prev,
                messages: [...prev.messages, newMsg],
            };
        });
    }, []);

    useChatWebSocket(chatId, handleNewMessage);

    useEffect(() => {
        if (gif) {
            handleOnSubmit();
        }
    }, [gif]);

    useEffect(() => {
        if (audioChunks && audioChunks.file) {
            handleOnSubmit();
        }
    }, [audioChunks]);


    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await getChatById(chatId);
                setChat(data);
                setErr("");
            } catch (err) {
                console.error('Error loading data', err);
                setErr("Нема підключення");
            }
        };

        loadData();
    }, [chatId]);

    const { messages, companions } = chat;

    let companion = null;
    if (!chat.isGroup) {
        companion = companions.find(x => x.id !== currentUserId);
    }

    const selectGif = (gifSrc) => {
        setGif(gifSrc);
    };

    const handleOnSubmit = async (e) => {
        if (e) e.preventDefault();
        try {
            const response = await send(chatId, currentUserId, message, files, audioChunks, gif);
            setMessage('');
            setAudio(null);
            setFiles([]);
            setGif('');
        } catch (err) {
            console.error('Ошибка при отправке:', err);
        }
    };

    return (
        <div className={styles.container}>
            {chat.isGroup ? (
                <Header />
            ) : (
                <Header
                    logoSrc={companion?.avatar}
                    name={companion ? companion.firstName + ' ' + companion.lastName : ''}
                    additional={err === "" ? (companion?.state || '') : err}
                />
            )}
            <MessageGroupList messages={messages} currentUserId={currentUserId} />
            <MessageInputContainer
                filesControl={{ files, setFiles }}
                messageControl={{ message, setMessage }}
                gifControl={{ gif, selectGif }}
                audioRecordingControl={{ audioChunks, setAudio }}
                onSubmit={handleOnSubmit}
            />
        </div>
    );
}


export default React.memo(Chat);