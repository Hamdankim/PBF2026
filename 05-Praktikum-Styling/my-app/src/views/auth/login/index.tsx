import Link from "next/link";
import {useRouter} from "next/router";
import styles from './login.module.css';

const TampilanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        push("/produk");
    }
  return (
    <div className={styles.login}>
        <h1>Halaman Login</h1>
        <button onClick={() => handlerLogin()}>Login</button> <br />
        <h1 style={{ color: "red",borderRadius: "10px",padding: "10px",}}>Belum Punya Akun</h1>
        <Link href="/auth/register">Ke Halaman Register</Link>
    </div>
  )
}

export default TampilanLogin;