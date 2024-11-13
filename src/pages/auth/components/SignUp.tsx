import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from '../styles.module.css';
import { useSignUp } from '../../../api/user/useSignUp.ts';
import { useSignIn } from '../../../api/user/useSignIn.ts';
import { getInfoMessage } from '../../../constants/userMessages.ts';

type Props = {
  onClose: () => void;
};

export const SignUp = ({ onClose }: Props) => {
  const [login, setLogin] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signUp } = useSignUp();
  const { mutate: signIn } = useSignIn();

  const handleSignUp = () => {
    if (login === '' || username === '' || password !== '') {
      toast.error(getInfoMessage('allFieldsMustBeFilled'));

      return;
    } else {
      const data = {
        login,
        username,
        password,
      };

      signUp(data, {
        onSuccess: () => {
          signIn(
            { login, password },
            {
              onSuccess: () => {
                onClose();
              },
            },
          );
        },
      });
    }
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
