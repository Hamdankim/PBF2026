import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProdukView from "@/views/produk/ProdukView";

const ProdukPage = () => {
  const [isLogin, setIsLogin] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");

    if (loginStatus === "true") {
      setIsLogin(true);
    } else {
      router.push("/auth/login");
    }
  }, [router]);

  if (isLogin === null) return null;

  return <ProdukView />;
};

export default ProdukPage;