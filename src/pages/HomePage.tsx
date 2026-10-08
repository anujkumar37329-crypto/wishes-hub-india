import { Link } from "react-router-dom";

const premiumTools = [
  { title: 'Diwali Card', subtitle: 'AI Photo Card', tag: 'NEW 🪔', color: 'linear-gradient(135deg,#ff9a00,#ff2d00)', icon: '🪔', path: '/diwali-card-generator.html' },
  { title: 'Stylish Name', subtitle: 'Generator', tag: 'NEW 🔥', color: 'linear-gradient(135deg,#a855f7,#ec4899)', icon: '𝕬', path: '/stylish-names' },
  { title: 'Fancy Text', subtitle: 'Stylish Fonts', tag: 'POPULAR', color: 'linear-gradient(135deg,#06b6d4,#3b82f6)', icon: 'Ⓕ', path: '/fancy-text' },
  { title: 'FF Nickname', subtitle: 'Free Fire • BGMI', tag: 'VIRAL 🔥', color: 'linear-gradient(135deg,#f97316,#ef4444)', icon: '⚔️', path: '/ff-nickname' },
  { title: 'VIP Bio', subtitle: 'Insta Bio', tag: 'NEW 👑', color: 'linear-gradient(135deg,#ec4899,#8b5cf6)', icon: '👑', path: '/vip-bio' },
];

const categories = [
  { title: 'Diwali Wishes', desc: 'Light up the festival of lights...', icon: '🪔', path: '/diwali-wishes' },
  { title: 'Christmas Wishes', desc: 'Merry Christmas wishes...', icon: '🎄', path: '/christmas-wishes' },
  { title: 'Birthday Wishes', desc: 'Make every birthday special...', icon: '🎂', path: '/birthday-wishes' },
  { title: 'Love Shayari', desc: 'Express your deepest emotions...', icon: '❤️', path: '/love-shayari' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-4">
      <div className="text-center py-5">
        <h1 className="text-[28px] font-black leading-none">Wishes Hub India 🇮🇳</h1>
        <p className="text-gray-500 text-sm mt-2">Festivals, Shayari & Stylish Tools</p>
        <div className="mt-4 bg-white rounded-full flex items-center px-4 py-3 shadow-sm">
          <span>🔍</span>
          <input className="ml-2 w-full outline-none text-sm" placeholder="Search wishes, shayari, tools..." />
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold">✨ PREMIUM TOOLS</h2>
        <span className="text-xs text-gray-400">5 Tools</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {premiumTools.map((tool, i) => (
          <Link key={i} to={tool.path} className="rounded-[22px] p-4 text-white relative h-[145px] flex flex-col justify-between" style={{ background: tool.color }}>
            <div className="w-11 h-11 bg-white/25 rounded-[12px] flex items-center justify-center text-[22px]">{tool.icon}</div>
            <div>
              <div className="font-bold text-[15px] leading-tight">{tool.title}</div>
              <div className="text-[11px] opacity-90">{tool.subtitle}</div>
              <div className="mt-2 inline-block bg-black/20 text-[10px] px-2 py-1 rounded-full font-bold">{tool.tag}</div>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="font-bold mb-3">🎉 ALL WISHES</h2>
      <div className="space-y-3">
        {categories.map((c, i) => (
          <Link key={i} to={c.path} className="bg-white rounded-2xl p-4 flex gap-3 items-center shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-xl">{c.icon}</div>
            <div>
              <div className="font-bold text-sm">{c.title}</div>
              <div className="text-xs text-gray-500">{c.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
