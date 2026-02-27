import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProdukView from "@/views/produk/ProdukView";

const ProdukPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, [isLogin, router]);

  if (!isLogin) return null;

  return <ProdukView />;
};

export default ProdukPage;