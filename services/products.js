import { supabase } from '@/lib/supabase/server';
import { fallbackProducts } from '@/lib/supabase/fallbackData';

export async function getProducts() {
  if (!supabase) {
    return fallbackProducts;
  }

  const { data, error } = await supabase
    .from('products')
    .select(`*, categories(name, slug)`)
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.warn('Supabase products error:', error.message);
    return fallbackProducts;
  }

  return data || fallbackProducts;
}

export async function getProductBySlug(slug) {
  if (!supabase) {
    return fallbackProducts.find((product) => product.slug === slug) || null;
  }

  const { data, error } = await supabase
    .from('products')
    .select(`*, categories(name, slug), product_images(*)`)
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();

  if (error) {
    console.warn('Supabase product error:', error.message);
    return fallbackProducts.find((product) => product.slug === slug) || null;
  }

  return data;
}

export async function getFeaturedProducts() {
  if (!supabase) {
    return fallbackProducts.filter((product) => product.is_featured);
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .eq('is_featured', true)
    .limit(6);

  if (error) {
    console.warn('Supabase featured products error:', error.message);
    return fallbackProducts.filter((product) => product.is_featured);
  }

  return data || fallbackProducts.filter((product) => product.is_featured);
}
