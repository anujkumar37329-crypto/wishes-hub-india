import { Link, useNavigate } from "react-router-dom";

const premiumTools = [
  { title: 'Diwali Card', subtitle: 'AI Photo Card', tag: 'NEW 🪔', gradient: 'from-orange-500 to-red-600', icon: '🪔', path: '/diwali-card-generator.html', external: true },
  { title: 'Stylish Name', subtitle: 'Generator', tag: 'NEW 🔥', gradient: 'from-purple-500 to-pink-500', icon: 'अ', path: '/stylish-names' },
  { title: 'Fancy Text', subtitle: 'Stylish Fonts', tag: 'POPULAR', gradient: 'from-cyan-400 to-blue-500', icon: 'F', path: '/fancy-text' },
  { title: 'FF Nickname', subtitle: 'Free Fire • BGMI', tag: 'VIRAL 🔥', gradient: 'from-orange-400 to-red-500', icon: '⚔️', path: '/ff-nickname' },
  { title: 'VIP Bio', subtitle: 'Insta Bio', tag: 'NEW 👑', gradient: 'from-purple-400 to-purple-600', icon: '👑', path: '/vip-bio' },
];

const allWishes = [
  { title: 'Diwali Wishes', desc: 'Light up the festival of lights...', icon: '🪔', path: '/diwali-wishes' },
  { title: 'Love Shayari', desc: 'Express your deepest emotions...', icon: '❤️', path: '/love-shayari' },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fff7f0] px-4 py-4 pb-20">
      <div className="text-center py-6">
        <h1 className="text-[28px] font-black">Wishes Hub India 🇮🇳</h1>
        <p className="text-gray-500 text-sm mt-1">Festivals, Shayari & Stylish Tools</p>
      </div>

      <h2 className="font-black text-[18px] mb-3 flex items-center gap-2">✨ PREMIUM TOOLS</h2>

      <div className="grid grid-cols-2 gap-4">
        {premiumTools.map((t, i) => (
          <div key={i} onClick={() => t.external? window.location.href = t.path : navigate(t.path)} className={`bg-gradient-to-br ${t.gradient} p-5 rounded-[28px] text-white cursor-pointer`}>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold">{t.icon}</div>
            <div className="mt-10">
              <div className="font-bold text-[17px] leading-tight">{t.title}</div>
              <div className="text-[13px] opacity-90 mt-1">{t.subtitle}</div>
            </div>
            <div className="mt-3 text-[11px] bg-white/20 inline-block px-3 py-1.5 rounded-full font-bold">{t.tag}</div>
          </div>
        ))}
      </div>

      <h2 className="font-black text-[18px] mt-8 mb-3 flex items-center gap-2">🎉 ALL WISHES</h2>
      <div className="space-y-3">
        {allWishes.map((c, i) => (
          <Link key={i} to={c.path} className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl">{c.icon}</div>
            <div>
              <div className="font-bold">{c.title}</div>
              <div className="text-xs text-gray-500 mt-1">{c.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
