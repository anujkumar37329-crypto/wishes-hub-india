import { useState } from 'react';
import { categories } from '../data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');
  const filtered = categories.filter((c: any) => c.name.toLowerCase().includes(search.toLowerCase()));

  const tools = [
    { name:'Diwali Card', sub:'AI Photo Card', icon:'🪔', grad:'linear-gradient(135deg,#ff8c00,#ff3d00)', badge:'NEW 🪔', link:'/diwali-card-generator.html', external:true },
    { name:'Stylish Names', sub:'Generator', icon:'✨', grad:'linear-gradient(135deg,#8b5cf6,#ec4899)', badge:'NEW 🔥', link:'/stylish-names' },
    { name:'Fancy Text', sub:'Stylish Fonts', icon:'🔤', grad:'linear-gradient(135deg,#06b6d4,#3b82f6)', badge:'POPULAR', link:'/fancy-text' },
    { name:'FF Nickname', sub:'Free Fire • BGMI', icon:'⚔️', grad:'linear-gradient(135deg,#f59e0b,#ef4444)', badge:'VIRAL 🔥', link:'/ff-nickname' },
    { name:'VIP Bio', sub:'Insta Bio', icon:'👑', grad:'linear-gradient(135deg,#a855f7,#6366f1)', badge:'NEW 👑', link:'/vip-bio' },
  ];

  const catStyle: any = {
    'diwali-wishes': { icon:'🪔', bg:'#fff3e0', color:'#ff8c00', desc:'Festival of Lights' },
    'birthday-wishes': { icon:'🎂', bg:'#fce7f3', color:'#ec4899', desc:'Make their day special' },
    'love-shayari': { icon:'❤️', bg:'#fee2e2', color:'#ef4444', desc:'Dil se dil tak shayari' },
    'friendship-shayari': { icon:'🤝', bg:'#e0e7ff', color:'#6366f1', desc:'Yaari dosti ke liye' },
    'holi-wishes': { icon:'🎨', bg:'#f0fdf4', color:'#22c55e', desc:'Rangon ka tyohar' },
    'eid-wishes': { icon:'🌙', bg:'#ecfdf5', color:'#10b981', desc:'Eid Mubarak' },
    'new-year-wishes': { icon:'🎊', bg:'#eff6ff', color:'#3b82f6', desc:'Naya saal wishes' },
    'christmas-wishes': { icon:'🎄', bg:'#fef2f2', color:'#dc2626', desc:'Merry Christmas' },
    'raksha-bandhan-wishes': { icon:'🎀', bg:'#fff1f2', color:'#e11d48', desc:'Bhai behen ka pyar' },
    'anniversary-wishes': { icon:'💍', bg:'#fdf4ff', color:'#a855f7', desc:'Happy Anniversary' },
    'wedding-wishes': { icon:'💒', bg:'#fff7ed', color:'#f97316', desc:'Shaadi mubarak wishes' },
    'independence-day-wishes': { icon:'🇮🇳', bg:'#f0fdf4', color:'#16a34a', desc:'Jai Hind! 15 August' },
    'republic-day-wishes': { icon:'🇮🇳', bg:'#eff6ff', color:'#2563eb', desc:'26 January special' },
    'teachers-day-wishes': { icon:'👩‍🏫', bg:'#fef3c7', color:'#d97706', desc:'Guru ko pranam' },
    'good-morning-shayari': { icon:'☀️', bg:'#fefce8', color:'#ca8a04', desc:'Good Morning quotes' },
    'good-morning-wishes': { icon:'☀️', bg:'#fefce8', color:'#ca8a04', desc:'Good Morning quotes' },
    'good-night-shayari': { icon:'🌙', bg:'#f5f3ff', color:'#7c3aed', desc:'Good Night sweet dreams' },
    'good-night-wishes': { icon:'🌙', bg:'#f5f3ff', color:'#7c3aed', desc:'Good Night dreams' },
    'attitude-shayari': { icon:'😎', bg:'#f3f4f6', color:'#111827', desc:'Khatarnak attitude' },
    'life-shayari': { icon:'🌿', bg:'#ecfdf5', color:'#059669', desc:'Zindagi ki sachai' },
    'dard-shayari': { icon:'💔', bg:'#fef2f2', color:'#991b1b', desc:'Dard bhari shayari' },
    'brother-shayari': { icon:'👦', bg:'#eff6ff', color:'#1d4ed8', desc:'Bhai ke liye shayari' },
    'sister-shayari': { icon:'👧', bg:'#fce7f3', color:'#db2777', desc:'Behen ke liye pyaar' },
    'motivational-shayari': { icon:'🔥', bg:'#fff7ed', color:'#ea580c', desc:'Motivation & Josh' },
    'romantic-shayari': { icon:'💘', bg:'#ffe4e6', color:'#e11d48', desc:'Romantic love shayari' },
    'sad-shayari': { icon:'😢', bg:'#f1f5f9', color:'#475569', desc:'Udasi bhari shayari' },
  };

  const getStyle = (slug: string, fallbackDesc: string) => {
    return catStyle[slug] || { icon:'🎉', bg:'#fff7ed', color:'#f59e0b', desc: fallbackDesc || 'Best wishes for you' };
  };

  return (
    <div style={{minHeight:'100vh', background:'#fdf8f3', fontFamily:'system-ui'}}>
      <div style={{padding:'14px 18px 20px'}}>
        <div style={{position:'relative'}}>
          <span style={{position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)'}}>🔍</span>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search wishes, shayari, tools..." style={{width:'100%', padding:'14px 14px 14px 40px', borderRadius:'16px', border:'1px solid #f0d9b5', outline:'none', fontSize:'14px', background:'white', boxShadow:'0 4px 12px rgba(255,140,0,0.08)'}} />
        </div>

        <h3 style={{fontSize:'15px', fontWeight:900, color:'#111', margin:'20px 0 12px'}}>✨ PREMIUM TOOLS</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          {tools.map(t=>(
            <div key={t.name} onClick={()=> t.external? window.location.href=t.link : navigate(t.link)} style={{background:t.grad, padding:'16px', borderRadius:'22px', color:'white', cursor:'pointer', position:'relative', overflow:'hidden', boxShadow:'0 8px 20px rgba(0,0,0,0.12)'}}>
              <div style={{position:'absolute', top:'-20px', right:'-20px', width:'80px', height:'80px', background:'rgba(255,255,255,0.15)', borderRadius:'50%'}} />
              <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.22)', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>{t.icon}</div>
              <div style={{marginTop:'22px'}}>
                <div style={{fontWeight:900, fontSize:'15px'}}>{t.name}</div>
                <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>{t.sub}</div>
                <div style={{marginTop:'10px', fontSize:'10px', background:'rgba(255,255,255,0.22)', display:'inline-block', padding:'5px 10px', borderRadius:'20px', fontWeight:800}}>{t.badge}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{fontSize:'15px', fontWeight:900, color:'#111', margin:'26px 0 12px'}}>🎉 ALL WISHES</h3>
        <div style={{display:'grid', gap:'12px'}}>
          {filtered.map((cat:any)=>{
            const s = getStyle(cat.slug, cat.desc);
            return (
              <div key={cat.slug} onClick={()=>navigate(`/category/${cat.slug}`)} style={{display:'flex', alignItems:'center', gap:'14px', background:'white', padding:'14px', borderRadius:'20px', boxShadow:'0 2px 10px rgba(0,0,0,0.05)', border:'1px solid #fef3e2', cursor:'pointer'}}>
                <div style={{width:'56px', height:'56px', background:s.bg, borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'26px'}}>{s.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:800, fontSize:'15px', color:'#1f2937'}}>{cat.name}</div>
                  <div style={{fontSize:'12.5px', color:'#6b7280', marginTop:'2px'}}>{s.desc}</div>
                  <div style={{fontSize:'11px', color:s.color, fontWeight:700, marginTop:'4px'}}>50+ Wishes • Copy & Share</div>
                </div>
                <div style={{width:'36px', height:'36px', borderRadius:'50%', background:'#fdf2e9', display:'flex', alignItems:'center', justifyContent:'center', color:'#f59e0b', fontWeight:900, fontSize:'18px'}}>›</div>
              </div>
            );
          })}
        </div>

        <div style={{textAlign:'center', marginTop:'26px', padding:'14px', background:'white', borderRadius:'16px', border:'1px dashed #f3e8d3'}}>
          <div style={{fontSize:'12px', color:'#b45309', fontWeight:800}}>Made with ❤️ in India • Wishes Hub</div>
        </div>
      </div>
    </div>
  );
}
