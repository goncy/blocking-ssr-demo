import {getProducts} from "@/api";
import ProductCard from "@/components/ProductCard";
import {Product} from "@/types";

export const getServerSideProps = async () => {
  const products = await getProducts();

  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 150) + 500));

  return {props: {products}};
};

export default function HomePage({products}: {products: Product[]}) {
  return (
    <main>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
