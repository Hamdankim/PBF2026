import { useEffect, useState } from "react";

type ProductType = {
  id: string;
  nama: string;
  harga: number;
  ukuran: string;
  warna: string;
};

type Props = {
  productId?: string;
};

const MainSection = ({ productId }: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch("/api/produk")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);

        if (productId) {
          const found = data.data.find(
            (item: ProductType) => item.id === productId
          );
          setProduct(found);
        }
      });
  }, [productId]);

  return (
    <section className="flex justify-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">

        {/* MODE LIST */}
        {!productId &&
          products.map((item) => (
            <div key={item.id} className="mb-4">
              <h2>{item.nama}</h2>
              <p>Harga: {item.harga}</p>
              <p>Ukuran: {item.ukuran}</p>
              <p>Warna: {item.warna}</p>
            </div>
          ))}

        {/* MODE DETAIL */}
        {productId && product && (
          <>
            <h2 className="text-xl font-bold">{product.nama}</h2>
            <p>Harga: {product.harga}</p>
            <p>Ukuran: {product.ukuran}</p>
            <p>Warna: {product.warna}</p>
          </>
        )}

      </div>
    </section>
  );
};

export default MainSection;