import ProdukView from "@/views/produk/ProdukView";
import { useRouter } from "next/router";

const DetailProdukPage = () => {
  const { query } = useRouter();

  return <ProdukView productId={query.id as string} />;
};

export default DetailProdukPage;