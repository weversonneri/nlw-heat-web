import styles from './styles.module.scss';
import React from 'react';
import { motion } from 'framer-motion';

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
    <motion.li
      initial={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1 }}
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
    </motion.li>
  );
}
