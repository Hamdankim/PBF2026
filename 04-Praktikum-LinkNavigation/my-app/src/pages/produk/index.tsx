import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Produk = () => {
  // const [isLogin, setIsLogin] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   if (!isLogin) {
  //     router.push("/auth/login");
  //   }
  // }, [isLogin, router]);

  return (
    <div>
      <h1>Halaman Produk</h1> <br />
      <Link href="/auth/login">Ke Halaman Login</Link>
    </div>
  );
};

export default Produk;