import { useState } from 'react';
import { categories, getCategoryBySlug } from '@/data/wishes';
import type { RouterHook } from '@/hooks/useRouter';
import { useSEO } from '@/hooks/useSEO';
import { WishCard } from '@/components/WishCard';
import { AdSlot } from '@/components/AdSlot';
import { ArrowLeft, ChevronDown, Sparkles, Flame } from 'lucide-react';

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
    title: cat? `${cat.name} — Wishes Hub India` : 'Category — Wishes Hub India',
    description: cat? cat.description : 'Browse wishes and shayari on Wishes Hub India.',
    keywords: cat? `${cat.name}, ${cat.language}, wishes, shayari, hindi, english, whatsapp share` : 'wishes, shayari',
    ogTitle: cat? `${cat.name} — Wishes Hub India` : undefined,
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

  const relatedCategories = categories.filter((c) => c.slug!== slug && c.group === cat.group).slice(0, 12);
  const visibleWishes = cat.wishes.slice(0, visibleCount);
  const hasMore = visibleCount < cat.wishes.length;

  return (
    <div className="min-h-screen bg-[#FFFBF2]">
      <div className="mx-auto max-w-3xl px-4 py-5">
        <button
          onClick={() => navigate(cat.group === 'festival'? '/festival-wishes' : '/shayari')}
          className="mb-4 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* PREMIUM HEADER */}
        <div className={`relative overflow-hidden rounded-[28px] bg-gradient-to-br ${cat.gradient} p-[1.5px] shadow-[0_12px_32px_-12px_rgba(0,0,0,0.25)]`}>
          <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-white/10 to-transparent">
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
            {/* glass bubbles */}
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/20 blur-[1px]" />
            <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-black/10 blur-[0.5px]" />
            <div className="absolute top-6 right-6 h-2 w-2 rounded-full bg-white/60 animate-pulse" />

            <div className="relative p-6">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl shadow-inner backdrop-blur-xl ring-1 ring-white/30">
                  {cat.emoji}
                </div>
                <div className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md ring-1 ring-white/20">
                  <Flame className="h-3.5 w-3.5" /> TRENDING
                </div>
              </div>

              <h1 className="mt-4 text-[26px] font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-sm">
                {cat.name}
              </h1>
              <p className="mt-2 max-w-[90%] text-[13.5px] leading-5 text-white/90">
                {cat.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-gray-900 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  {cat.wishes.length} wishes
                </span>
                <span className="rounded-full bg-black/20 px-3 py-1.5 text-[11px] font-semibold text-white/90 backdrop-blur">
                  ✨ Ready to Share
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-orange-100">
          <AdSlot />
        </div>

        {/* WISHES - Premium list */}
        <div className="mt-6 space-y-4">
          {visibleWishes.map((wish, i) => (
            <div key={wish.id} className="group">
              <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_-16px_rgba(0,0,0,0.15)] ring-1 ring-gray-100 transition-all hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.2)] hover:ring-orange-100">
                <WishCard text={wish.text} index={i} />
              </div>
              {(i === 4 || i === 9 || i === 24) && (
                <div className="mt-4 overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-dashed ring-gray-200">
                  <div className="mb-1 text-center text-[10px] font-bold tracking-[1.5px] text-gray-400">ADVERTISEMENT</div>
                  <AdSlot label="" />
                </div>
              )}
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_-8px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02] hover:bg-black active:scale-[0.98]"
            >
              Load More Wishes
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            <p className="mt-3 text-xs text-gray-400">{visibleCount} of {cat.wishes.length} shown</p>
          </div>
        )}

        {/* Related - Premium Pills */}
        <div className="mt-10 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-gray-100">
          <h2 className="flex items-center gap-2 text-[15px] font-bold text-gray-900">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[12px]">✨</span>
            More {cat.group === 'festival'? 'Festival Wishes' : 'Shayari'}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {relatedCategories.map((c) => (
              <button
                key={c.slug}
                onClick={() => {
                  setVisibleCount(PAGE_SIZE);
                  navigate(`/category/${c.slug}`);
                  window.scrollTo({top:0, behavior:'smooth'});
                }}
                className="flex items-center gap-1.5 rounded-full bg-[#FFFBF2] px-4 py-2 text-[13px] font-semibold text-gray-700 ring-1 ring-orange-100 transition-all hover:bg-orange-500 hover:text-white hover:ring-orange-500"
              >
                <span>{c.emoji}</span>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="h-10" />
      </div>
    </div>
  );
}
