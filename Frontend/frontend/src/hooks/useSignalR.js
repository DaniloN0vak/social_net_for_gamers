import { useEffect, useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

export function useSignalR(onNewMessage) {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const hubConnection = new HubConnectionBuilder()
      .withUrl('https://yourbackend/api/chatHub')
      .configureLogging(LogLevel.Information)
      .withAutomaticReconnect()
      .build();

    hubConnection.start()
      .then(() => {
        console.log('SignalR connected');
        setConnection(hubConnection);
        hubConnection.on('ReceiveMessage', (message) => {
          onNewMessage(message);
        });
      })
      .catch(console.error);

    return () => {
      if (hubConnection) {
        hubConnection.stop();
      }
    };
  }, [onNewMessage]);

  const sendMessage = (chatId, content) => {
    if (connection) {
      connection.invoke('SendMessage', chatId, content).catch(console.error);
    }
  };

  return { sendMessage };
}
