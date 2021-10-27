import { FormEvent, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { useAuth } from '../../context/auth';
import { api } from '../../services/api';
import styles from './styles.module.scss';

import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

export function SendMessageForm() {
  const [message, setMessage] = useState('');

  const { user, signOut } = useAuth();

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    const formattedMessage = message.trim();

    if (!formattedMessage) {
      toast.warning('O campo de mensagem está vazio. 🤔');
      return;
    }

    try {
      await api.post('/messages', { message });
      toast.success('Sua mensagem foi enviada! 🎉');
      setMessage('');
    } catch (err) {
      toast.error('Não foi possivel enviar sua mensagem. 😥');
    }
  }

  return (
    <div className={styles.sendMessageFormWrapper}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className={styles.signOutButton}
        onClick={signOut}
      >
        <VscSignOut size="32" />
      </motion.button>

      <header className={styles.userInformation}>
        <div className={styles.userImage}>
          <img src={user?.avatar_url} alt={user?.name} />
        </div>
        <strong className={styles.userName}>{user?.name}</strong>
        <span className={styles.userGithub}>
          <VscGithubInverted size="16" />
          {user?.login}
        </span>
      </header>

      <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Diz ai a sua expectativa para o evento?"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          type="submit">
          Enviar Mensagem
        </motion.button>
      </form>
    </div>
  );
}
