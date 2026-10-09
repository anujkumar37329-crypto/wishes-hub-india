import { Link, useNavigate } from "react-router-dom";

const premiumTools = [
  { title: 'Diwali Card', subtitle: 'AI Photo Card', tag: 'NEW 🪔', color: 'linear-gradient(135deg,#ff9a00,#ff2d00)', icon: '🪔', path: '/diwali-card-generator.html', isExternal: true },
  { title: 'Stylish Name', subtitle: 'Generator', tag: 'NEW 🔥', color: 'linear-gradient(135deg,#8b5cf6,#ec4899)', icon: '✨', path: '/stylish-names' },
  { title: 'Fancy Text', subtitle: 'Stylish Fonts', tag: 'POPULAR', color: 'linear-gradient(135deg,#06b6d4,#3b82f6)', icon: '🔤', path: '/fancy-text' },
  { title: 'FF Nickname', subtitle: 'Free Fire • BGMI', tag: 'VIRAL 🔥', color: 'linear-gradient(135deg,#f59e0b,#ef4444)', icon: '🎮', path: '/ff-nickname' },
  { title: 'VIP Bio', subtitle: 'Insta Bio', tag: 'NEW 👑', color: 'linear-gradient(135deg,#10b981,#059669)', icon: '👑', path: '/vip-bio' },
];

const categories = [
  { title: 'Diwali Wishes', desc: 'Light up the festival of lights...', icon: '🪔', path: '/diwali-wishes' },
  { title: 'Christmas Wishes', desc: 'Merry Christmas wishes...', icon: '🎄', path: '/christmas-wishes' },
  { title: 'Birthday Wishes', desc: 'Make every birthday special...', icon: '🎂', path: '/birthday-wishes' },
  { title: 'Love Shayari', desc: 'Express your deepest emotions...', icon: '❤️', path: '/love-shayari' },
];

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-4">
      <div className="text-center py-5">
        <h1 className="text-[28px] font-black leading-none">Wishes Hub India 🇮🇳</h1>
        <p className="text-gray-500 text-sm mt-2">Festivals, Shayari & Stylish Tools</p>
        <div className="mt-4 bg-white rounded-full flex items-center px-4 py-3 shadow-sm">
          <span>🔍</span>
          <input className="ml-2 w-full outline-none text-sm" placeholder="Search wishes, shayari" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold">Premium Tools</h2>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
        {premiumTools.map((t, i) => (
          <div key={i} onClick={() => t.isExternal? window.location.href = t.path : navigate(t.path)} style={{background: t.color, padding:'14px', borderRadius:'16px', color:'white', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>{t.icon}</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>{t.title}</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>{t.subtitle}</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(0,0,0,0.2)', display:'inline-block', padding:'3px 8px', borderRadius:'20px', fontWeight:'700'}}>{t.tag}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {categories.map((c, i) => (
          <Link key={i} to={c.path} className="bg-white rounded-2xl p-4 flex gap-3 items-center mb-3 shadow-sm block">
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
