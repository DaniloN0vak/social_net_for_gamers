import React, { useState, useEffect, useRef } from 'react';
import MessageGroupList from '../../../message-items/message-list/components/MessageGroupList';
import styles from '../styles/Chat.module.css';
import { send } from '../../../../hooks/apiService';
import Header from '../../header/components/Header';
import MessageInputContainer from '../../footer/components/MessageInputContainer';

function Chat({ chatId }) {


    // const [chat, setChat] = useState(null);

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const res = await getChat(chatId);
    //             setChat(res.data);
    //         } catch (err) {
    //             console.error('Error loading data', err);
    //         }
    //     };

    //     loadData();
    // }, [chatId]);


    // const { messages, currentUser, companion } = chat;
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');
    const [gif, setGif] = useState('');
    const [audioChunks, setAudio] = useState(null);

    const selectGif = (gifSrc) => {
        setGif(gifSrc);
    }

    useEffect(() => {
        if (gif) {
            handleOnSubmit();
        }
    }, [gif]);

    const handleOnSubmit = async (e) => {
        if (e) e.preventDefault();
        console.log(gif);
        try {
            const response = await send(1, 1, message, files, audioChunks, gif);
            setMessage('');
            setAudio(null);
            setFiles([]);
            setGif('');
        } catch (err) {
            console.error('Ошибка при отправке:', err);
        }
    };

    useEffect(() => {
        if (audioChunks && audioChunks.file) {
            handleOnSubmit();
        }
    }, [audioChunks]);

    return (
        <div className={styles.container}>

            <Header companion={{ firstName: 'allo', lastName: 'allo', event: 'hello' }} />
            <MessageGroupList messages={[]} currentUserId={1} />
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