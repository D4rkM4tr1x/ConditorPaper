export const getPublicUrl = (bucket, path) => {
  if (!path) return '';
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  if (!baseUrl) return '';
  return `${baseUrl}/storage/v1/object/public/${bucket}/${path}`;
};
