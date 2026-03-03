import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const Kategori = () => {
  const { data, error, isLoading } = useSWR<{ data: ProductType[] }>(
    "/api/produk",
    fetcher
  );

  if (error) return <div>Gagal memuat data</div>;

  return (
    <div>
      <TampilanProduk
        products={isLoading ? [] : data?.data || []}
      />
    </div>
  );
};

export default Kategori;