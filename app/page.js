import Link from 'next/link';
import { getCategories } from '@/services/categories';
import { getFeaturedProducts } from '@/services/products';
import EmailSignup from '@/components/notifications/EmailSignup';

export default async function HomePage() {
  const categories = await getCategories();
  const products = await getFeaturedProducts();
  return (
    <main className="min-h-screen bg-transparent">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#b48a45] sm:mb-4 sm:text-sm">Essbares Zuckerpapier</p>
          <h1 className="max-w-2xl text-3xl font-semibold leading-tight text-[#2f2a2a] sm:text-4xl lg:text-5xl">
            Elegante Designs für besondere Kuchen
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#6f6767] sm:mt-6 sm:text-lg sm:leading-8">
            Minimalistisch, hochwertig und besonders schön — unsere Papierdekorationen machen jeden Kuchen zu einem echten Highlight.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
            <Link href="/catalog" className="rounded-full bg-[#2f2a2a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f1b1b] sm:px-6 sm:py-3">
              Zum Sortiment
            </Link>
            <Link href="/catalog" className="rounded-full border border-[#e7d6d7] bg-white px-5 py-2.5 text-sm font-semibold text-[#2f2a2a] transition hover:border-[#c8a96b] hover:text-[#b48a45] sm:px-6 sm:py-3">
              Neue Kollektionen
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-[#f0e4e5] bg-white p-2 shadow-[0_20px_60px_rgba(47,42,42,0.08)] sm:rounded-[32px] sm:p-3">
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80"
            alt="Kuchen mit Dekoration"
            className="h-56 w-full rounded-[18px] object-cover sm:h-72 sm:rounded-[24px] lg:h-[430px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#2f2a2a]">Beliebte Produkte</h2>
          <Link href="/catalog" className="text-sm font-semibold text-[#b48a45]">Alles ansehen</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.id} className="overflow-hidden rounded-[28px] border border-[#f2e7e8] bg-white shadow-[0_15px_45px_rgba(47,42,42,0.06)] transition hover:-translate-y-1">
              <img src={product.featured_image_url || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80'} alt={product.name} className="h-60 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#b48a45]">{product.categories?.name || 'Kollektion'}</p>
                <h3 className="mt-3 text-xl font-semibold text-[#2f2a2a]">{product.name}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f6767]">{product.short_description || 'Hochwertiges Papier zur Dekoration von Kuchen und Desserts.'}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-[#2f2a2a]">{Number(product.price).toFixed(2)} €</span>
                  <Link href={`/product/${product.slug}`} className="rounded-full bg-[#2f2a2a] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1f1b1b]">Kaufen</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#2f2a2a]">Kategorien</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.id} href={`/catalog/${category.slug}`} className="rounded-[24px] border border-[#f0e4e5] bg-[#fffdfc] p-6 shadow-sm transition hover:border-[#c8a96b] hover:shadow-[0_12px_35px_rgba(47,42,42,0.06)]">
              <h3 className="text-lg font-semibold text-[#2f2a2a]">{category.name}</h3>
              <p className="mt-2 text-sm leading-7 text-[#6f6767]">{category.description || 'Auswahl schöner Designs für Ihr Fest.'}</p>
            </Link>
          ))}
        </div>
      </section>

      <EmailSignup />
    </main>
  );
}
