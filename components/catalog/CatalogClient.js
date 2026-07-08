'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useStore } from '@/components/providers/StoreProvider';

export default function CatalogClient({ initialProducts, initialCategories }) {
  const { favorites, toggleFavorite, addToCart, isFavorite } = useStore();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return initialProducts.filter((product) => {
      const matchesQuery =
        !normalizedQuery ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        (product.short_description || '').toLowerCase().includes(normalizedQuery);

      const categorySlug = product.categories?.slug || '';
      const categoryName = product.categories?.name || '';
      const matchesCategory =
        selectedCategory === 'all' ||
        categorySlug === selectedCategory ||
        categoryName === selectedCategory ||
        product.category_id === selectedCategory;

      return matchesQuery && matchesCategory;
    });
  }, [initialProducts, query, selectedCategory]);

  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 rounded-[32px] border border-[#f0e4e5] bg-white/80 p-8 shadow-[0_15px_40px_rgba(47,42,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Katalog</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#2f2a2a]">Produktkatalog</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Suchen Sie nach Designs, filtern Sie nach Kategorien und speichern Sie Lieblingsprodukte.
          </p>

          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Suche nach Produkten..."
              className="w-full rounded-full border border-[#e9d8d8] bg-[#fcf8f7] px-4 py-3 text-sm outline-none lg:max-w-md"
            />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`rounded-full px-4 py-2 text-sm ${selectedCategory === 'all' ? 'bg-[#2f2a2a] text-white' : 'border border-[#e7d6d7] bg-white text-[#2f2a2a]'}`}
              >
                Alle
              </button>
              {initialCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.slug)}
                  className={`rounded-full px-4 py-2 text-sm ${selectedCategory === category.slug ? 'bg-[#2f2a2a] text-white' : 'border border-[#e7d6d7] bg-white text-[#2f2a2a]'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[28px] border border-[#f0e4e5] bg-white shadow-[0_15px_45px_rgba(47,42,42,0.06)] transition hover:-translate-y-1">
              <img src={product.featured_image_url || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'} alt={product.name} className="h-60 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#b48a45]">{product.categories?.name || 'Kategorie'}</p>
                  <button
                    onClick={() => toggleFavorite(product)}
                    className={`rounded-full px-3 py-1 text-sm ${isFavorite(product.id) ? 'bg-[#f7e8eb] text-[#b48a45]' : 'bg-[#fcf8f7] text-[#6f6767]'}`}
                  >
                    {isFavorite(product.id) ? '♥' : '♡'}
                  </button>
                </div>

                <h2 className="mt-3 text-xl font-semibold text-[#2f2a2a]">{product.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6f6767]">{product.short_description || 'Hochwertiges Papier zur Dekoration von Kuchen und Desserts.'}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-[#2f2a2a]">{Number(product.price).toFixed(2)} €</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-[#2f2a2a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f1b1b]"
                    >
                      In den Warenkorb
                    </button>
                    <Link href={`/product/${product.slug}`} className="rounded-full border border-[#e7d6d7] bg-white px-4 py-2 text-sm font-semibold text-[#2f2a2a] transition hover:border-[#c8a96b] hover:text-[#b48a45]">
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!filteredProducts.length ? (
          <div className="mt-8 rounded-[24px] border border-[#f0e4e5] bg-white p-8 text-center text-[#6f6767]">
            Keine Produkte entsprechen Ihrer Suche. Probieren Sie einen anderen Begriff oder Filter.
          </div>
        ) : null}
      </div>
    </main>
  );
}
