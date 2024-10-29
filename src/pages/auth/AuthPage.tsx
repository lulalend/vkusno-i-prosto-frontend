import { useState } from 'react';
import styles from './styles.module.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = () => setIsLogin((isLogin) => !isLogin);

  return (
    <div className={styles.container}>
      <div className={`${styles.signUp} ${isLogin ? styles.slideUp : ''}`}>
        <h2 onClick={isLogin ? handleToggle : undefined}>
          Регистрация
        </h2>
        <div className={styles.inputs}>
          <input
            type="text"
            placeholder="Логин"
            name="login"
            required
          />
          <input
            type="text"
            placeholder="Имя пользователя"
            name="username"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            name="password"
            required
          />
        </div>
        <button className={styles.submitBtn}>Стать частью</button>
      </div>

      <div className={`${styles.signIn} ${!isLogin ? styles.slideUp : ''}`}>
        <div className={styles.center}>
          <h2 onClick={!isLogin ? handleToggle : undefined}>
            Вход
          </h2>
          <div className={styles.inputs}>
            <input
              type="text"
              placeholder="Логин"
              name="login"
              required
            />
            <input
              type="password"
              placeholder="Пароль"
              name="password"
              required
            />
          </div>
          <button className={styles.submitBtn}>Войти</button>
        </div>
      </div>
    </div>
  );
};
