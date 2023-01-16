import styles from "./LoginForm.module.css";

export function LoginForm(props){
    return (<form className={styles.form}>
        <label className={styles.label} name="username">Username</label>
        <input className={styles.input} type="text" name="username"></input>
        <label className={styles.label} name="password">Password</label>
        <input className={styles.input} type="password" name="password"></input>
        <button className={styles.submit}>Sumbit</button>
    </form>)
}