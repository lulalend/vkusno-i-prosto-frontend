import { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import { SignUp } from './components/SignUp.tsx';
import { SignIn } from './components/SignIn.tsx';

type Props = {
  onClose: () => void;
};

export const AuthPage = (props: Props) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleToggle = () => setIsSignIn((isLogin) => !isLogin);

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.signUp, { [styles.slideUp]: isSignIn })}
      >
        <h2 onClick={isSignIn ? handleToggle : undefined}>Регистрация</h2>
        <SignUp {...props} />
      </div>

      <div
        className={classNames(styles.signIn, { [styles.slideUp]: !isSignIn })}
      >
        <div className={styles.center}>
          <h2 onClick={!isSignIn ? handleToggle : undefined}>Вход</h2>
          <SignIn {...props} />
        </div>
      </div>
    </div>
  );
};
