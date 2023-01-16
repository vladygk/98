import styles from "./LoginForm.module.css";

export function LoginForm(){
    return (
    <form className={styles.form}>
        <label className={styles.label} >LoginForm</label>
        <input className={styles.input} type="text" name="username"></input>
        <input className={styles.input} type="password" name="password"></input>
        <button className={styles.submit}>Sumbit</button>
    </form>);
}