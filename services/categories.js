import { supabase } from '@/lib/supabase/server';
import { fallbackCategories } from '@/lib/supabase/fallbackData';

export async function getCategories() {
  if (!supabase) {
    return fallbackCategories;
  }

  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('sort_order', { ascending: true });

  if (error) {
    console.warn('Supabase categories error:', error.message);
    return fallbackCategories;
  }

  return data || fallbackCategories;
}
