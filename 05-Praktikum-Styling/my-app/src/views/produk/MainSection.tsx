type Props = {
  productId?: string;
};

const MainSection = ({ productId }: Props) => {
  return (
    <section>
      {productId ? (
        <p>Produk: {productId}</p>
      ) : (
        <p>Silakan pilih produk.</p>
      )}
    </section>
  );
};

export default MainSection;