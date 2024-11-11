import { useState } from 'react';
import styles from '../styles.module.css';
import { useSignUp } from '../../../api/user/useSignUp.ts';
import { useSignIn } from '../../../api/user/useSignIn.ts';

export const SignUp = () => {
  const [login, setLogin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signUp } = useSignUp();
  const { mutate: signIn } = useSignIn();

  const handleSignUp = () => {
    const data = {
      login,
      username,
      password,
    };

    signUp(data, {
      onSuccess: () => {
        signIn({ login, password });
      },
    });
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
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <button className={styles.submitBtn} onClick={handleSignUp}>
        Стать частью
      </button>
    </>
  );
};
