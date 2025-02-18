import { ProductCardSkeleton } from "../components/ProductCard"

export default function Loading() {
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </main>
  )
}
