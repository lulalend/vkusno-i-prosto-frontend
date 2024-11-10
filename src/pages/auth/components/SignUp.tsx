import styles from '../styles.module.css';

export const SignUp = () => (
  <>
    <div className={styles.inputs}>
      <input type="text" placeholder="Логин" name="login" required />
      <input
        type="text"
        placeholder="Имя пользователя"
        name="username"
        required
      />
      <input type="password" placeholder="Пароль" name="password" required />
    </div>
    <button className={styles.submitBtn}>Стать частью</button>
  </>
);