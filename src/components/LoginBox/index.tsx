import { motion } from 'framer-motion';
import { VscGithubInverted } from 'react-icons/vsc';
import { useAuth } from '../../context/auth';

import styles from './styles.module.scss';

export function LoginBox() {
  const { signInUrl, loading } = useAuth();

  return (
    <div className={styles.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1 }}
        href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="24" />
        {loading ? 'Carregando...' : 'Entrar com Github'}
      </motion.a>
    </div>
  );
}
