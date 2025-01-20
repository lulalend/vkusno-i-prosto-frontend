import { useState } from 'react';
import styles from './styles.module.css';
import { SignUp } from './components/SignUp.tsx';
import { SignIn } from './components/SignIn.tsx';

export const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleToggle = () => setIsSignIn((isLogin) => !isLogin);

  return (
    <div className={styles.container}>
      <div className={`${styles.signUp} ${isSignIn ? styles.slideUp : ''}`}>
        <h2 onClick={isSignIn ? handleToggle : undefined}>Регистрация</h2>
        <SignUp />
      </div>

      <div className={`${styles.signIn} ${!isSignIn ? styles.slideUp : ''}`}>
        <div className={styles.center}>
          <h2 onClick={!isSignIn ? handleToggle : undefined}>Вход</h2>
          <SignIn />
        </div>
      </div>
    </div>
  );
};
