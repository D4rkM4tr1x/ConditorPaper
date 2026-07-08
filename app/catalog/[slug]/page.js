import Link from 'next/link';
import { getCategories } from '@/services/categories';
import { getProducts } from '@/services/products';

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  const categories = await getCategories();
  const category = categories.find((item) => item.slug === slug);
  const products = category
    ? (await getProducts()).filter((product) => product.category_id === category.id)
    : [];

  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-[#f0e4e5] bg-white/80 p-8 shadow-[0_15px_40px_rgba(47,42,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Kategorie</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#2f2a2a]">
            {category?.name || 'Kategorie nicht gefunden'}
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            {category?.description || 'Diese Kategorie ist derzeit nicht verfügbar.'}
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[28px] border border-[#f0e4e5] bg-white shadow-[0_15px_45px_rgba(47,42,42,0.06)]">
              <img src={product.featured_image_url || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'} alt={product.name} className="h-60 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#2f2a2a]">{product.name}</h2>
                <p className="mt-3 text-sm leading-7 text-[#6f6767]">{product.short_description || 'Hochwertiges Papier zur Dekoration von Kuchen und Desserts.'}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-[#2f2a2a]">{Number(product.price).toFixed(2)} €</span>
                  <Link href={`/product/${product.slug}`} className="rounded-full bg-[#2f2a2a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f1b1b]">Ansehen</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
