import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

type Props = {
  isActive: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isActive, onClose, children }: Props) => (
  <div
    className={classNames(styles.container, { [styles.active]: isActive })}
    onClick={() => onClose()}
  >
    <div
      className={classNames(styles.modalContent, {[styles.active]: isActive})}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);
