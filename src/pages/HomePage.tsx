import { Sparkles, Heart, Type, ArrowRight, PartyPopper, BookOpen } from 'lucide-react';
import { categories, festivalCategories, shayariCategories } from '@/data/wishes';
import type { RouterHook } from '@/hooks/useRouter';
import { useSEO, defaultTitle, defaultDescription } from '@/hooks/useSEO';
import { AdSlot } from '@/components/AdSlot';

type Props = {
  router: RouterHook;
};

export function HomePage({ router }: Props) {
  const { navigate } = router;

  useSEO({
    title: defaultTitle,
    description: defaultDescription,
    keywords: 'diwali wishes, birthday wishes, love shayari, friendship shayari, holi wishes, eid wishes, good morning shayari, stylish name generator, hindi wishes, whatsapp wishes, shayari hindi',
    ogTitle: 'Wishes Hub India — Wishes, Shayari & Stylish Names',
    ogDescription: defaultDescription,
  });

  const renderCategoryCard = (cat: typeof categories[number]) => (
    <button
      key={cat.slug}
      onClick={() => navigate(`/category/${cat.slug}`)}
      className="group relative overflow-hidden rounded-2xl p-5 text-left text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
      <div className="relative">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-3xl">{cat.emoji}</span>
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold backdrop-blur">
            {cat.wishes.length}
          </span>
        </div>
        <h3 className="text-lg font-bold">{cat.name}</h3>
        <p className="mt-1 text-xs text-white/70 line-clamp-2">{cat.description}</p>
        <div className="mt-3 flex items-center gap-1 text-xs font-semibold">
          View Collection
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </button>
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-rose-500 to-fuchsia-500 px-6 py-12 text-center text-white shadow-xl">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="relative">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Wishes Hub India
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/90 sm:text-base">
            24+ categories of wishes and shayari in Hindi & English. Diwali, Holi, Eid, Birthday, Love,
            Friendship, Good Morning & more. Copy and share on WhatsApp instantly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate('/festival-wishes')}
              className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-rose-600 shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              Explore Wishes
            </button>
            <button
              onClick={() => navigate('/stylish-names')}
              className="rounded-full bg-white/20 px-5 py-2.5 text-sm font-bold text-white ring-1 ring-white/40 backdrop-blur transition-transform hover:scale-105 active:scale-95"
            >
              Stylish Name Generator
            </button>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <AdSlot />
      </div>

      <section className="mt-8">
        <div className="mb-5 flex items-center gap-2">
          <PartyPopper className="h-6 w-6 text-amber-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Festival Wishes</h2>
            <p className="text-sm text-gray-500">{festivalCategories.length} collections — celebrate every occasion</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {festivalCategories.map(renderCategoryCard)}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-5 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-rose-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Shayari Collections</h2>
            <p className="text-sm text-gray-500">{shayariCategories.length} collections — express your feelings</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shayariCategories.map(renderCategoryCard)}
        </div>
      </section>

      <div className="mt-8">
        <AdSlot />
      </div>

      <section className="mt-8">
        <button
          onClick={() => navigate('/stylish-names')}
          className="group flex w-full items-center gap-4 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-left text-white shadow-lg transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Type className="h-7 w-7 text-amber-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold">Stylish Name Generator</h3>
            <p className="mt-0.5 text-sm text-white/70">
              Turn your name into 10 different stylish fonts. Copy and share on WhatsApp.
            </p>
          </div>
          <ArrowRight className="h-5 w-5 text-white/50 transition-transform group-hover:translate-x-1" />
        </button>
      </section>

      <section className="mt-8">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">Latest Wishes Preview</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((cat) => (
            <div key={cat.slug} className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
              <div className="mb-3 flex items-center gap-2">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className="font-bold text-gray-900">{cat.name}</h3>
              </div>
              <p className="mb-3 text-sm text-gray-600 line-clamp-3">{cat.wishes[0].text}</p>
              <button
                onClick={() => navigate(`/category/${cat.slug}`)}
                className="flex items-center gap-1 text-sm font-semibold text-amber-600 hover:text-amber-700"
              >
                View all {cat.wishes.length}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
