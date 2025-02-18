import type { Product } from "@/types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="w-full h-48 bg-gray-300"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 text-background">{product.name}</h2>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-300" />
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/4" />
      </div>
    </div>
  )
}
