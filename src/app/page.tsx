import {connection} from "next/server";

import {getProducts} from "@/api";
import ProductCard from "@/components/ProductCard";

export default async function HomePage() {
  const products = await getProducts();

  await connection();
  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 150) + 100));

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
