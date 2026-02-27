import HeroSection from "./HeroSection";
import MainSection from "./MainSection";

type Props = {
  productId?: string;
};

const ProdukView = ({ productId }: Props) => {
  return (
    <>
      <HeroSection />
      <MainSection productId={productId} />
    </>
  );
};

export default ProdukView;