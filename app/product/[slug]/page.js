import Link from 'next/link';
import { getProductBySlug } from '@/services/products';
import ProductActions from '@/components/product/ProductActions';
import ProductReviews from '@/components/product/ProductReviews';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, ' '),
    description: 'Essbares Zuckerpapier mit eleganten Designs für Kuchen und Torten.',
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return <main className="min-h-screen bg-[#fffaf5] px-4 py-12 lg:px-8"><div className="mx-auto max-w-7xl rounded-3xl bg-white p-8 shadow-soft">Produkt wurde nicht gefunden.</div></main>;
  }

  return (
    <main className="min-h-screen bg-transparent px-4 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[24px] border border-[#f0e4e5] bg-white p-4 shadow-[0_20px_60px_rgba(47,42,42,0.07)] sm:rounded-[32px] sm:p-8">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <img
              src={product.featured_image_url || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80'}
              alt={product.name}
              className="h-64 w-full rounded-[20px] object-cover sm:h-80 sm:rounded-[28px] lg:h-[460px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b48a45] sm:text-sm">Essbares Papier</p>
            <h1 className="mt-2 text-2xl font-semibold text-[#2f2a2a] sm:mt-3 sm:text-3xl">{product.name}</h1>
            <p className="mt-3 text-base leading-7 text-[#6f6767] sm:mt-4 sm:text-lg sm:leading-8">{product.description || product.short_description}</p>

            <div className="mt-5 rounded-[18px] bg-[#fcf8f7] p-4 text-sm text-[#2f2a2a] sm:mt-8 sm:rounded-[24px] sm:p-5">
              <p className="mb-2 sm:mb-3"><span className="font-semibold">Größe:</span> {product.size || 'Nicht angegeben'}</p>
              <p className="mb-2 sm:mb-3"><span className="font-semibold">Papiertyp:</span> {product.paper_type || 'Nicht angegeben'}</p>
              <p className="text-lg font-semibold text-[#2f2a2a] sm:text-xl">Preis: {Number(product.price).toFixed(2)} €</p>
            </div>

            <ProductActions product={product} />
          </div>
        </div>
        <ProductReviews product={product} />
      </div>
    </main>
  );
}
