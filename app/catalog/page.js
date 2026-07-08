import { getProducts } from '@/services/products';
import { getCategories } from '@/services/categories';
import CatalogClient from '@/components/catalog/CatalogClient';

export const metadata = {
  title: 'Katalog',
  description: 'Entdecken Sie essbares Zuckerpapier für Kuchen, Torten und kreative Dekorationen.',
};

export default async function CatalogPage() {
  const [products, categories] = await Promise.all([getProducts(), getCategories()]);

  return <CatalogClient initialProducts={products} initialCategories={categories} />;
}
