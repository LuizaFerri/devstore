"use client";
import { useCart } from "@/contexts/cart-context";

export interface AddToCartButtonProps {
  productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addTocart } = useCart();
  function handleAddProductTocart() {
    addTocart(productId);
  }

  return (
    <button
      type="button"
      onClick={handleAddProductTocart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold"
    >
      Adicionar ao carrinho
    </button>
  );
}
