import styles from "../../pages/produk/product.module.scss";

type ProductType = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

const TampilanProduk = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.produk}>
      <h1 className={styles.produk__title}>Daftar Produk</h1>

      <div className={styles.produk__content}>
        {products.length > 0 ? (
          products.map((product: ProductType) => (
            <div
              key={product.id}
              className={styles.produk__content__item}
            >
              <img
                src={product.image}
                alt={product.name}
                className={styles.produk__content__item__image}
              />

              <h4 className={styles.produk__content__item__name}>
                {product.name}
              </h4>

              <p className={styles.produk__content__item__category}>
                {product.category}
              </p>

              <p className={styles.produk__content__item__price}>
                Rp {product.price.toLocaleString("id-ID")}
              </p>
            </div>
          ))
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={styles.produk__content__skeleton}
            >
              <div className={styles.skeleton__image}></div>
              <div className={styles.skeleton__name}></div>
              <div className={styles.skeleton__category}></div>
              <div className={styles.skeleton__price}></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TampilanProduk;