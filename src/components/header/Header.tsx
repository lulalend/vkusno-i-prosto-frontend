import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Modal } from '../modal/Modal.tsx';
import { AuthPage } from '../../pages/auth/AuthPage.tsx';

export const Header = () => {
  const navigate = useNavigate();
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);

  return (
    <div className={styles.headerContainer}>
      <span
        className={styles.headerTitle}
        onClick={() => navigate('/')}
      >
        Вкусно и Просто
      </span>
      <div
        className={styles.headerAuth}
        onClick={() => setIsAuthActive(true)}
      >
        Войти
      </div>

      {isAuthActive && (
        <Modal isActive={isAuthActive} setIsActive={setIsAuthActive}>
          <AuthPage />
        </Modal>
      )}
    </div>
  );
};