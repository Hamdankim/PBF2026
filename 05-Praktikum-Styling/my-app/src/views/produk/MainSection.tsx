type Props = {
  productId?: string;
};

const MainSection = ({ productId }: Props) => {
  return (
    <section className="flex justify-center py-10">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        {productId ? (
          <p className="text-lg font-medium">
            Produk: {productId}
          </p>
        ) : (
          <p className="text-gray-600">
            Silakan pilih produk.
          </p>
        )}
      </div>
    </section>
  );
};

export default MainSection;