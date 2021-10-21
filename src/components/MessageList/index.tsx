import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';
export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo DoWhile 2021" />

    </div>
  );
}
