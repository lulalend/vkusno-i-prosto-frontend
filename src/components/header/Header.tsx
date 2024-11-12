import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Modal } from '../modal/Modal.tsx';
import { AuthPage } from '../../pages/auth/AuthPage.tsx';
import Profile from '../../assets/svg/profile.svg';

export const Header = () => {
  const navigate = useNavigate();
  const [isAuthActive, setIsAuthActive] = useState<boolean>(false);

  const token = localStorage.getItem('token');

  return (
    <div className={styles.headerContainer}>
      <span className={styles.headerTitle} onClick={() => navigate('/')}>
        Вкусно и Просто
      </span>
      {token ? (
        <img className={styles.profileIcon} src={Profile} alt="Profile icon" />
      ) : (
        <div
          className={styles.headerAuth}
          onClick={() => setIsAuthActive(true)}
        >
          Войти
        </div>
      )}

      {isAuthActive && (
        <Modal isActive={isAuthActive} onClose={() => setIsAuthActive(false)}>
          <AuthPage onClose={() => setIsAuthActive(false)} />
        </Modal>
      )}
    </div>
  );
};
