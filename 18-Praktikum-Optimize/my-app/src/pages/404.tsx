import Image from 'next/image'
import styles from '@/styles/404.module.scss'
import Link from 'next/link'

const Custom404 = () => {
    return (
        <div className={styles.error}>
            <div className={styles.error__card}>
                <Image
                    src="/page-not-found.png"
                    alt="404"
                    width={300}
                    height={300}
                    className={styles.error__image}
                />
                <h1>404 - Halaman Tidak Ditemukan</h1>
                <p>Maaf, halaman yang Anda cari tidak ditemukan.</p><br />

                <p>
                    <Link href="/">Kembali ke Beranda</Link>
                </p>
            </div>
        </div>
    )
}

export default Custom404