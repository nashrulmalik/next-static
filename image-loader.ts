export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  // For absolute URLs (e.g., external images), return as is
  if (src.startsWith('http') || src.startsWith('//')) {
    return src;
  }

  // For local images, ensure they have the correct base path
  const baseUrl = '/next-static';
  const normalizedSrc = src.startsWith('/') ? src : `/${src}`;
  return `${baseUrl}${normalizedSrc}`;
}
