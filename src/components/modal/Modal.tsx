import { ReactNode } from 'react';
import styles from './styles.module.css';

type Props = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  children: ReactNode;
};

export const Modal = ({
  isActive,
  setIsActive,
  children
}: Props) => (
  <div
    className={`${styles.container} ${isActive ? styles.active : ''}`}
    onClick={() => setIsActive(false)}
  >
    <div
      className={`${styles.modalContent} ${isActive ? styles.active : ''}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);
