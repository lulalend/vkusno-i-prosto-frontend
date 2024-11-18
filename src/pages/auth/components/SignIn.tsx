import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.css';
import { useSignIn } from '../../../api/user/useSignIn.ts';
import { getInfoMessage } from '../../../constants/userMessages.ts';
import { getLogin } from '../../../api/user/token.ts';

type Props = {
  onClose: () => void;
};

export const SignIn = ({ onClose }: Props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { mutate: signIn } = useSignIn();
  const navigate = useNavigate();

  const handleSignIn = () => {
    if (!login || !password) {
      toast.error(getInfoMessage('allFieldsMustBeFilled'));

      return;
    }

    signIn(
      { login, password },
      {
        onSuccess: () => {
          const token = localStorage.getItem('token');

          if (token) {
            const login = getLogin(token);

            navigate(`/profile/${login}`);
          }

          onClose();
        },
      },
    );
  };

  return (
    <>
      <div className={styles.inputs}>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => {
            const value = e.target.value;
            const regex = /^[a-zA-Z0-9]*$/;

            if (regex.test(value)) {
              setLogin(value);
            }
          }}
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
