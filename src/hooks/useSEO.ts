import { useEffect } from 'react';

type SEOOptions = {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
};

const defaultTitle = 'Wishes Hub India — Wishes, Shayari & Stylish Names';
const defaultDescription =
  'Share beautiful Diwali wishes, birthday wishes, love shayari, friendship shayari in Hindi and English. Generate stylish names in 10 fonts.';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function useSEO({ title, description, keywords, ogTitle, ogDescription }: SEOOptions) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', ogTitle || title, 'property');
    setMeta('og:description', ogDescription || description, 'property');
    setMeta('twitter:title', ogTitle || title);
    setMeta('twitter:description', ogDescription || description);
  }, [title, description, keywords, ogTitle, ogDescription]);
}

export { defaultTitle, defaultDescription };
