import {ProductCardSkeleton} from "@/components/ProductCard";

export default function Loading() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({length: 4}, (_, i) => `skeleton-${i + 1}`).map((id) => (
          <ProductCardSkeleton key={id} />
        ))}
      </div>
    </main>
  );
}
