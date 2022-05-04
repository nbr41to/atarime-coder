import type { FC } from 'react';

import styles from './index.module.css';

export const Loader: FC = () => {
  return (
    <div className={styles.dot_spinner}>
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
      <div className={styles.dot_spinner__dot} />
    </div>
  );
};
