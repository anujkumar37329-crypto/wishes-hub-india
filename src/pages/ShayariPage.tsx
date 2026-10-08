import { shayariCategories } from '@/data/wishes';
import type { RouterHook } from '@/hooks/useRouter';
import { useSEO } from '@/hooks/useSEO';
import { AdSlot } from '@/components/AdSlot';
import { ArrowRight } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function ShayariPage({ router }: Props) {
  const { navigate } = router;

  useSEO({
    title: 'Shayari — Love, Sad, Attitude, Good Morning & More | Wishes Hub India',
    description: 'Express your feelings with beautiful shayari in Hindi and English. Love, sad, attitude, good morning, good night, life, dard, brother, sister, motivational, romantic & friendship shayari.',
    keywords: 'shayari, love shayari, sad shayari, attitude shayari, good morning shayari, good night shayari, life shayari, dard shayari, brother shayari, sister shayari, motivational shayari, romantic shayari, friendship shayari, hindi shayari',
    ogTitle: 'Shayari Collections — Wishes Hub India',
    ogDescription: 'Express your feelings with beautiful shayari in Hindi and English.',
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Shayari</h1>
        <p className="mt-1 text-sm text-gray-500">
          {shayariCategories.length} collections — express your feelings with beautiful shayari in Hindi and English
        </p>
      </div>

      <AdSlot />

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shayariCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="group relative overflow-hidden rounded-2xl p-6 text-left text-white shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`} />
            <div className="relative">
              <span className="text-4xl">{cat.emoji}</span>
              <h3 className="mt-2 text-xl font-bold">{cat.name}</h3>
              <p className="mt-1 text-sm text-white/80 line-clamp-2">{cat.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold">
                {cat.wishes.length} shayari
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <AdSlot />
      </div>
    </div>
  );
}
