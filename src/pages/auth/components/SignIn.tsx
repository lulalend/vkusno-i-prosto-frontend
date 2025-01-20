import styles from '../styles.module.css';

export const SignIn = () => (
  <>
    <div className={styles.inputs}>
      <input type="text" placeholder="Логин" name="login" required />
      <input
        type="password"
        placeholder="Пароль"
        name="password"
        required
      />
    </div>
    <button className={styles.submitBtn}>Войти</button>
  </>
);