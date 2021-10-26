import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { io } from 'socket.io-client';
import { Message, MessageProps } from '../Message';

const messagesQueue: MessageProps[] = [];

const socket = io('http://localhost:4000');

socket.on('new_message', (newMessage: MessageProps) => {
  messagesQueue.push(newMessage);
});

export function MessageList() {
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean));

        //remove oldest message from queue after execute setmessages
        messagesQueue.shift();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    api.get<MessageProps[]>('/messages/3-most-recent').then(response => {
      setMessages(response.data);
    });
  }, []);

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((message) => (
          <Message key={message.id} data={message} />
        ))}
      </ul>
    </div>
  );
}
