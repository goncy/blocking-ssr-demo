import type { Product } from "./types"

export async function getProducts(): Promise<Product[]> {
  return [
    {
      id: 1,
      name: "Classic White T-Shirt",
      price: 19.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      name: "Denim Jeans",
      price: 49.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Leather Jacket",
      price: 199.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Running Shoes",
      price: 79.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Sunglasses",
      price: 29.99,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      name: "Backpack",
      price: 39.99,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]
}
