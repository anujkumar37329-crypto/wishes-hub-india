import { useState } from 'react';
import { categories } from '../data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');
  const filtered = categories.filter((c: any) => c.name.toLowerCase().includes(search.toLowerCase()));

  const tools = [
    { name:'Diwali Card', sub:'AI Photo Card', icon:'🪔', grad:'linear-gradient(135deg,#ff8c00,#ffd700)', badge:'FESTIVAL 🪔', link:'/diwali-wishes-ai-card' },
    { name:'Stylish Names', sub:'Generator', icon:'✨', grad:'linear-gradient(135deg,#b56cf6,#e46999)', badge:'NEW 🔥', link:'/stylish-names' },
    { name:'Fancy Text', sub:'Stylish Fonts', icon:'🔤', grad:'linear-gradient(135deg,#06b6d4,#3b82f6)', badge:'POPULAR', link:'/fancy-text' },
    { name:'FF Nickname', sub:'Free Fire • BGMI', icon:'⚔️', grad:'linear-gradient(135deg,#f59e0b,#ef4444)', badge:'VIRAL 🔥', link:'/nickname-generator' },
    { name:'VIP Bio', sub:'Insta Bio', icon:'👑', grad:'linear-gradient(135deg,#a855f7,#6366f1)', badge:'NEW 👑', link:'/insta-bio' },
  ];

  const catStyle: any = {
    'diwali-wishes': { icon:'🪔', bg:'#fff3e0', color:'#ff8c00', desc:'Festival of Lights' },
    'birthday-wishes': { icon:'🎂', bg:'#fce7f3', color:'#ec4899', desc:'Make their day special' },
    'love-shayari': { icon:'❤️', bg:'#fee2e2', color:'#ef4444', desc:'Dil se dil tak' },
    'friendship-shayari': { icon:'🤝', bg:'#e0e7ff', color:'#6366f1', desc:'Yaari dosti ke liye' },
    'holi-wishes': { icon:'🎨', bg:'#f0fdf4', color:'#22c55e', desc:'Rangon ka tyohar' },
    'eid-wishes': { icon:'🌙', bg:'#ecfdf5', color:'#10b981', desc:'Eid Mubarak' },
    'new-year-wishes': { icon:'🎉', bg:'#efffbf', color:'#84cc16', desc:'Naya saal wishes' },
    'christmas-wishes': { icon:'🎄', bg:'#fef2f2', color:'#dc2626', desc:'Merry Christmas' },
    'raksha-bandhan-wishes': { icon:'🎀', bg:'#fffff2', color:'#e11d48', desc:'Bhai behen ka pyar' },
    'anniversary-wishes': { icon:'💍', bg:'#fdf4ff', color:'#a855f7', desc:'Happy Anniversary' },
    'wedding-wishes': { icon:'💒', bg:'#fff7ed', color:'#f97316', desc:'Shaadi mubarak' },
    'independence-day-wishes': { icon:'🇮🇳', bg:'#f0fdf4', color:'#16a34a', desc:'Jai Hind! 15 August' },
    'republic-day-wishes': { icon:'🇮🇳', bg:'#fef6ff', color:'#2563eb', desc:'26 January special' },
    'teachers-day-wishes': { icon:'👩‍🏫', bg:'#fef3c7', color:'#d97706', desc:'Guru ko pranam' },
    'good-morning-shayari': { icon:'🌅', bg:'#fef3c7', color:'#ca8a04', desc:'Good Morning quotes' },
    'good-night-shayari': { icon:'🌙', bg:'#f5f3ff', color:'#7c3aed', desc:'Good Night' },
    'good-night-wishes': { icon:'🌙', bg:'#f5f3ff', color:'#7c3aed', desc:'Good Night' },
    'attitude-shayari': { icon:'😎', bg:'#f3f4f6', color:'#111827', desc:'Khatarnak attitude' },
    'life-shayari': { icon:'💖', bg:'#ecfdf5', color:'#059669', desc:'Zindagi ki sachai' },
    'dard-shayari': { icon:'💔', bg:'#fef2f2', color:'#991b1b', desc:'Dard bhari' },
    'brother-shayari': { icon:'👦', bg:'#efffbf', color:'#4d1e80', desc:'Bhai ke liye' },
    'sister-shayari': { icon:'👧', bg:'#fce7f3', color:'#db2777', desc:'Behen ke liye pyaar' },
    'motivational-shayari': { icon:'💪', bg:'#ffffed', color:'#ea580c', desc:'Motivation & Josh' },
    'romantic-shayari': { icon:'💕', bg:'#fe4de6', color:'#e11d48', desc:'Romantic love' },
    'sad-shayari': { icon:'😢', bg:'#f1f5f9', color:'#475569', desc:'Udasi bhari' },
  };

  const getStyle = (slug: string, fallbackDesc: string) => {
    return catStyle[slug] || { icon:'✉️', bg:'#fff7ed', color:'#f59e0b', desc: fallbackDesc || 'Best wishes' };
  };

  return (
    <div style={{minHeight:'100vh', background:'#fdf8f3', fontFamily:'system-ui'}}>
      <div style={{padding:'14px 18px 20px'}}>
        <div style={{position:'relative'}}>
          <span style={{position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)'}}>🔍</span>
          <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search wishes, shayari, tools..." style={{width:'100%', padding:'14px 14px 14px 42px', borderRadius:'24px', border:'1px solid #ffe4b5', outline:'none'}} />
        </div>

        <h3 style={{fontSize:'15px', fontWeight:900, color:'#111', margin:'20px 0 12px'}}>✨ PREMIUM TOOLS</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          {tools.map((t:any)=>(
            <div key={t.name} onClick={()=> t.external? window.location.href=t.link : navigate(t.link)} style={{background:t.grad, borderRadius:'24px', padding:'16px', color:'white', position:'relative', cursor:'pointer', overflow:'hidden'}}>
              <div style={{position:'absolute', top:'-20px', right:'-20px', width:'80px', height:'80px', background:'rgba(255,255,255,0.15)', borderRadius:'50%'}}></div>
              <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.22)', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>{t.icon}</div>
              <div style={{marginTop:'22px'}}>
                <div style={{fontWeight:900, fontSize:'15px'}}>{t.name}</div>
                <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>{t.sub}</div>
                <div style={{marginTop:'10px', fontSize:'10px', background:'rgba(255,255,255,0.22)', display:'inline-block', padding:'4px 10px', borderRadius:'20px', fontWeight:800}}>{t.badge}</div>
              </div>
            </div>
          ))}
        </div>

        <h3 style={{fontSize:'15px', fontWeight:900, color:'#111', margin:'26px 0 12px'}}>🎉 ALL WISHES</h3>
        <div style={{display:'grid', gap:'12px'}}>
          {filtered.map((cat:any)=>{
            const s = getStyle(cat.slug, cat.desc);
            return (
              <div key={cat.slug} onClick={()=>navigate(`/category/${cat.slug}`)} style={{display:'flex', alignItems:'center', background:'white', borderRadius:'16px', padding:'12px', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', cursor:'pointer'}}>
                <div style={{width:'42px', height:'42px', background:s.bg, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center'}}>{s.icon}</div>
                <div style={{marginLeft:'12px', flex:1}}>
                  <div style={{fontWeight:800, fontSize:'14px', textTransform:'capitalize'}}>{cat.name}</div>
                  <div style={{fontSize:'11px', color:'#888'}}>{s.desc}</div>
                </div>
                <div>›</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
