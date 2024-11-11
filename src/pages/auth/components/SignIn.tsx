import { useState } from 'react';
import styles from '../styles.module.css';
import { useSignIn } from '../../../api/user/useSignIn.ts';

export const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signIn } = useSignIn();

  const handleSignIn = () => {
    signIn({login, password});

    setLogin('');
    setPassword('');
  };

  return (
    <>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={styles.submitBtn} onClick={handleSignIn}>Войти</button>
    </>
  );
};
