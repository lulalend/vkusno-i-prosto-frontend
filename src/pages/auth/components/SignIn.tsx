import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from '../styles.module.css';
import { useSignIn } from '../../../api/user/useSignIn.ts';
import { getInfoMessage } from '../../../constants/userMessages.ts';

type Props = {
  onClose: () => void;
};

export const SignIn = ({ onClose }: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signIn } = useSignIn();

  const handleSignIn = () => {
    if (login !== '' && password !== '') {
      signIn(
        { login, password },
        {
          onSuccess: () => {
            onClose();
          },
        },
      );
    } else {
      toast.error(getInfoMessage('allFieldsMustBeFilled'));
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
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button className={styles.submitBtn} onClick={handleSignIn}>
        Войти
      </button>
    </>
  );
};
