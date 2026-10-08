import { useState } from 'react';

export function HomePage({ router }: any) {
  const [name, setName] = useState('');

  const tools = [
    { title: 'Stylish Names', slug: '/stylish-names', icon: '🔥', desc: '25+ Fonts for Free Fire', color: 'from-orange-400 to-pink-500', badge: 'VIRAL' },
    { title: 'Fancy Text', slug: '/fancy-text', icon: '✨', desc: 'For Instagram Bio', color: 'from-violet-500 to-purple-500', badge: 'NEW' },
    { title: 'Love Shayari', slug: '/shayari', icon: '❤️', desc: '100+ Viral Shayari', color: 'from-red-400 to-rose-500', badge: 'TRENDING' },
    { title: 'Festival Wishes', slug: '/festival-wishes', icon: '🎉', desc: 'Diwali, Holi, Eid', color: 'from-amber-400 to-orange-500', badge: 'HOT' },
  ];

  const handleGenerate = () => {
    if (!name.trim()) return;
    router.navigate(`/stylish-names?q=${encodeURIComponent(name)}`);
  };

  return (
    <div className="min-h-screen bg-[#fcf8ff]">
      {/* HERO */}
      <div className="bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-400 px-4 pt-8 pb-20 rounded-b-[40px] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent)]"></div>
        <h1 className="relative text-[32px] font-black leading-tight">
          Stylish Name & <br/> Fancy Text Maker
        </h1>
        <p className="relative mt-2 text-[14px] opacity-90">For Instagram, Free Fire, BGMI & WhatsApp</p>

        <div className="relative mt-6 bg-white rounded-[20px] p-2 flex gap-2 max-w-[420px] mx-auto shadow-xl">
          <input
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your name..."
            className="flex-1 px-4 py-3 rounded-[14px] text-gray-900 font-bold outline-none text-[16px]"
          />
          <button onClick={handleGenerate} className="bg-black text-white px-6 py-3 rounded-[14px] font-black text-[14px]">GENERATE</button>
        </div>
        <div className="relative mt-3 text-[11px] opacity-80">🔥 1,24,000+ Names Generated Today</div>
      </div>

      {/* TOOLS GRID */}
      <div className="px-4 -mt-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {tools.map((t)=>(
            <button key={t.slug} onClick={()=>router.navigate(t.slug)} className="text-left bg-white rounded-[22px] p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
              <div className={`absolute top-3 right-3 text-[9px] font-black px-2 py-1 rounded-full bg-gradient-to-r ${t.color} text-white`}>{t.badge}</div>
              <div className="text-[28px]">{t.icon}</div>
              <div className="mt-2 font-black text-[15px] text-gray-900">{t.title}</div>
              <div className="text-[11px] text-gray-500 font-medium mt-0.5">{t.desc}</div>
            </button>
          ))}
        </div>

        {/* SEO / VIRAL TEXT */}
        <div className="mt-8 bg-white rounded-[22px] p-5 border border-gray-100">
          <h2 className="font-black text-[18px]">Why Wishes Hub India?</h2>
          <p className="mt-2 text-[13px] text-gray-600 leading-[18px]">
            India ka No.1 Stylish Font Generator. Yaha se tu apne naam ko 25+ stylish fonts me convert karke Instagram bio, Free Fire nickname, WhatsApp status aur BGMI name ke liye copy kar sakta hai. No login, 100% free.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['#stylishname', '#freefirefont', '#instagramfonts', '#fancytext', '#bgminame'].map(tag=>(
              <span key={tag} className="text-[11px] bg-gray-100 px-3 py-1 rounded-full font-bold text-gray-600">{tag}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 pb-10 text-center text-[11px] text-gray-400">Made in India 🇮🇳 | 2M+ Users Trusted</div>
      </div>
    </div>
  );
}
