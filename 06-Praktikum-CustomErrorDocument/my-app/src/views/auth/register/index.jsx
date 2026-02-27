import Link from "next/link";
import styles from "./register.module.css";

const HalamanRegister = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Halaman Register</h1>

        <form>
          <div className={styles.inputGroup}>
            <label>Nama</label>
            <input type="text" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" className={styles.input} />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" className={styles.input} />
          </div>

          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>

        <Link href="/auth/login" className={styles.link}>
          Sudah punya akun? Login
        </Link>
      </div>
    </div>
  );
};

export default HalamanRegister;