import TampilanProduk from "../../views/produk";
import { ProductType } from "../../types/Product.type";

type HalamanProdukStaticProps = {
    products: ProductType[];
};

const HalamanProdukStatic = ({ products }: HalamanProdukStaticProps) => {
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    );
};

export default HalamanProdukStatic;

export async function getStaticProps() {
    const res = await fetch("http://127.0.0.1:3000/api/produk");
    const response: { data: ProductType[] } = await res.json();

    return {
        props: {
            products: response.data,
        },
    };
}