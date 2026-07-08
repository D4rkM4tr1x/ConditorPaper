'use client';

import Link from 'next/link';
import { useStore } from '@/components/providers/StoreProvider';

export default function ProductActions({ product }) {
  const { addToCart, toggleFavorite, isFavorite } = useStore();

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={() => addToCart(product)}
        className="rounded-full bg-[#2f2a2a] px-6 py-3 font-semibold text-white transition hover:bg-[#1f1b1b]"
      >
        In den Warenkorb
      </button>
      <button
        onClick={() => toggleFavorite(product)}
        className={`rounded-full border px-6 py-3 font-semibold transition ${isFavorite(product.id) ? 'border-[#b48a45] bg-[#f7e8eb] text-[#b48a45]' : 'border-[#e7d6d7] bg-white text-[#2f2a2a] hover:border-[#c8a96b] hover:text-[#b48a45]'}`}
      >
        {isFavorite(product.id) ? '♥ Favorit' : '♡ Favorisieren'}
      </button>
      <Link href="/catalog" className="rounded-full border border-[#e7d6d7] bg-white px-6 py-3 font-semibold text-[#2f2a2a] transition hover:border-[#c8a96b] hover:text-[#b48a45]">
        Zurück zum Katalog
      </Link>
    </div>
  );
}
