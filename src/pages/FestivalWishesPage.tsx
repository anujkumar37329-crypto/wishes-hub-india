import { festivalCategories } from '@/data/wishes';
import type { RouterHook } from '@/hooks/useRouter';
import { useSEO } from '@/hooks/useSEO';
import { AdSlot } from '@/components/AdSlot';
import { ArrowRight } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function FestivalWishesPage({ router }: Props) {
  const { navigate } = router;

  useSEO({
    title: 'Festival Wishes — Diwali, Holi, Eid, Christmas & More | Wishes Hub India',
    description: 'Celebrate every Indian festival with heartfelt wishes. Diwali, Holi, Eid, Christmas, New Year, Raksha Bandhan, Independence Day, Republic Day, Teachers Day, Anniversary & Wedding wishes in Hindi and English.',
    keywords: 'festival wishes, diwali wishes, holi wishes, eid wishes, christmas wishes, new year wishes, raksha bandhan wishes, independence day wishes, republic day wishes, teachers day wishes, anniversary wishes, wedding wishes',
    ogTitle: 'Festival Wishes — Wishes Hub India',
    ogDescription: 'Celebrate every festival with heartfelt wishes for your loved ones in Hindi and English.',
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Festival Wishes</h1>
        <p className="mt-1 text-sm text-gray-500">
          {festivalCategories.length} collections — celebrate every festival with heartfelt wishes for your loved ones
        </p>
      </div>

      <AdSlot />

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {festivalCategories.map((cat) => (
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
                {cat.wishes.length} wishes
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
