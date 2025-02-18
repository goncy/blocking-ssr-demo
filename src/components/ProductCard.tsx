import type {Product} from "@/types";

export default function ProductCard({product}: {product: Product}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="h-48 w-full bg-gray-300" />
      <div className="p-4">
        <h2 className="text-background mb-2 text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg bg-white shadow-md">
      <div className="h-48 w-full bg-gray-300" />
      <div className="p-4">
        <div className="mb-2 h-4 w-3/4 rounded bg-gray-300" />
        <div className="h-4 w-1/4 rounded bg-gray-300" />
      </div>
    </div>
  );
}
