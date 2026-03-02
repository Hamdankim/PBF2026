import { useEffect, useState } from "react";
import TampilanProduk from "../../views/produk";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
const Kategori = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/produk")
  //     .then((response) => response.json())
  //     .then((responsedata) => {
  //       // Mengasumsikan struktur API adalah { data: [...] }
  //       setProducts(responsedata.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching produk:", error);
  //     });
  // }, []);

  const { data, error, isLoading } = useSWR("/api/produk", fetcher);

  return (
    <div>
      <TampilanProduk products={isLoading ? [] : data.data || []} />
    </div>
  );
};

export default Kategori;