import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input className={styles.input} type="text" id="username"></input>

      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input className={styles.input} type="password" id="password"></input>

      <button className={styles.submit}>Sumbit</button>
    </form>
  );
}
