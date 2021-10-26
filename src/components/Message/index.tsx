import styles from './styles.module.scss';
import React from 'react';

export type MessageProps = {
  id: string,
  text: string,
  user: {
    name: string,
    avatar_url: string
  }
}

type Props = {
  data: MessageProps
}

export function Message({ data }: Props) {
  return (
    <li
      className={styles.message}>
      <p className={styles.messageContent}>
        {data.text}
      </p>
      <div className={styles.messageUser}>
        <div className={styles.userImage}>
          <img src={data.user.avatar_url} alt={data.user.name} />
        </div>
        <span>{data.user.name}</span>
      </div>
    </li>
  );
}
