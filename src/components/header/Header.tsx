import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { Modal } from '../modal/Modal.tsx';
import { AuthPage } from '../../pages/auth/AuthPage.tsx';
import Profile from '../../assets/svg/profile.svg';
import Logo from '../../assets/svg/logo.svg';
import { getLogin } from '../../api/user/token.ts';

export const Header = () => {
  const [isAuthActive, setIsAuthActive] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const goToProfile = () => {
    if (token) {
      const login = getLogin(token);

      navigate(`/profile/${login}`);
    }
  };

  return (
    <div className={styles.container}>
      <span className={styles.headerTitle} onClick={() => navigate('/')}>
        <img src={Logo} className={styles.logoIcon} alt="Логотип" />
        Вкусно и Просто
      </span>
      {token ? (
        <img
          className={styles.profileIcon}
          src={Profile}
          onClick={goToProfile}
          alt="Profile icon"
        />
      ) : (
        <div
          className={styles.headerAuth}
          onClick={() => setIsAuthActive(true)}
        >
          Войти
        </div>
      )}

      <Modal isActive={isAuthActive} onClose={() => setIsAuthActive(false)}>
        <AuthPage onClose={() => setIsAuthActive(false)} />
      </Modal>
    </div>
  );
};
