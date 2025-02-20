import type {Metadata} from "next";

import {getProducts} from "@/api";
import ProductCard from "@/components/ProductCard";

export async function generateMetadata(): Promise<Metadata> {
  await getProducts();

  return {};
}

export default async function HomePage() {
  const products = await getProducts();

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
