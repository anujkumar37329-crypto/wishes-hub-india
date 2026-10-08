import { useState } from 'react';
import { categories, getCategoryBySlug } from '@/data/wishes';
import type { RouterHook } from '@/hooks/useRouter';
import { useSEO } from '@/hooks/useSEO';
import { WishCard } from '@/components/WishCard';
import { AdSlot } from '@/components/AdSlot';
import { ArrowLeft, ChevronDown } from 'lucide-react';

type Props = {
  router: RouterHook;
  slug: string;
};

const PAGE_SIZE = 15;

export function CategoryPage({ router, slug }: Props) {
  const { navigate } = router;
  const cat = getCategoryBySlug(slug);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useSEO({
    title: cat ? `${cat.name} — Wishes Hub India` : 'Category — Wishes Hub India',
    description: cat ? cat.description : 'Browse wishes and shayari on Wishes Hub India.',
    keywords: cat ? `${cat.name}, ${cat.language}, wishes, shayari, hindi, english, whatsapp share` : 'wishes, shayari',
    ogTitle: cat ? `${cat.name} — Wishes Hub India` : undefined,
    ogDescription: cat?.description,
  });

  if (!cat) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-white"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const relatedCategories = categories.filter((c) => c.slug !== slug && c.group === cat.group).slice(0, 12);
  const visibleWishes = cat.wishes.slice(0, visibleCount);
  const hasMore = visibleCount < cat.wishes.length;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <button
        onClick={() => navigate(cat.group === 'festival' ? '/festival-wishes' : '/shayari')}
        className="mb-4 flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${cat.gradient} p-6 text-white shadow-lg`}>
        <div className="relative">
          <span className="text-4xl">{cat.emoji}</span>
          <h1 className="mt-2 text-2xl font-bold">{cat.name}</h1>
          <p className="mt-1 text-sm text-white/80">{cat.description}</p>
          <span className="mt-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
            {cat.wishes.length} wishes available
          </span>
        </div>
      </div>

      <div className="mt-6">
        <AdSlot />
      </div>

      <div className="mt-6 space-y-4">
        {visibleWishes.map((wish, i) => (
          <div key={wish.id}>
            <WishCard text={wish.text} index={i} />
            {i === 9 && (
              <div className="mt-4">
                <AdSlot label="Advertisement" />
              </div>
            )}
            {i === 24 && (
              <div className="mt-4">
                <AdSlot label="Advertisement" />
              </div>
            )}
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95"
          >
            Load More
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      )}

      <div className="mt-8">
        <h2 className="mb-4 text-lg font-bold text-gray-900">More {cat.group === 'festival' ? 'Festival Wishes' : 'Shayari'}</h2>
        <div className="flex flex-wrap gap-2">
          {relatedCategories.map((c) => (
            <button
              key={c.slug}
              onClick={() => {
                setVisibleCount(PAGE_SIZE);
                navigate(`/category/${c.slug}`);
              }}
              className="flex items-center gap-1.5 rounded-full bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 ring-1 ring-gray-100 transition-colors hover:bg-gray-100"
            >
              <span>{c.emoji}</span>
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
