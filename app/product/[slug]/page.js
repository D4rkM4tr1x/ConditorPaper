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
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)]">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <img
              src={product.featured_image_url || 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=80'}
              alt={product.name}
              className="h-[460px] w-full rounded-[28px] object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Essbares Papier</p>
            <h1 className="mt-3 text-3xl font-semibold text-[#2f2a2a]">{product.name}</h1>
            <p className="mt-4 text-lg leading-8 text-[#6f6767]">{product.description || product.short_description}</p>

            <div className="mt-8 rounded-[24px] bg-[#fcf8f7] p-5 text-sm text-[#2f2a2a]">
              <p className="mb-3"><span className="font-semibold">Größe:</span> {product.size || 'Nicht angegeben'}</p>
              <p className="mb-3"><span className="font-semibold">Papiertyp:</span> {product.paper_type || 'Nicht angegeben'}</p>
              <p className="text-xl font-semibold text-[#2f2a2a]">Preis: {Number(product.price).toFixed(2)} €</p>
            </div>

            <ProductActions product={product} />
          </div>
        </div>
        <ProductReviews product={product} />
      </div>
    </main>
  );
}
