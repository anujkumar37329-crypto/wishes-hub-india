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

  return (
    <div style={{minHeight:'100vh', background:'#fdf8f3', fontFamily:'system-ui'}}>
      <div style={{position:'sticky', top:0, zIndex:20, background:'rgba(253,248,243,0.85)', backdropFilter:'blur(12px)', borderBottom:'1px solid #f3e8d3', padding:'12px 18px'}}>
        <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
          <div style={{width:'36px', height:'36px', borderRadius:'12px', background:'linear-gradient(135deg,#ff8c00,#ff3d00)', display:'flex', alignItems:'center', justifyContent:'center', color:'white', fontWeight:900}}>W</div>
          <div>
            <div style={{fontWeight:900, fontSize:'16px', color:'#1f2937'}}>Wishes Hub</div>
            <div style={{fontSize:'11px', fontWeight:700, color:'#ff8c00'}}>INDIA 🇮🇳</div>
          </div>
        </div>
        <div style={{marginTop:'12px', position:'relative'}}>
          <span style={{position:'absolute', left:'14px', top:'50%', transform:'translateY(-50%)'}}>🔍</span>
          <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search wishes, shayari, tools..." style={{width:'100%', padding:'14px 14px 14px 40px', borderRadius:'16px', border:'1px solid #f0d9b5', outline:'none', fontSize:'14px', background:'white', boxShadow:'0 4px 12px rgba(255,140,0,0.08)'}} />
        </div>
      </div>

      <div style={{padding:'18px'}}>
        <h3 style={{fontSize:'15px', fontWeight:900, color:'#111', marginBottom:'12px'}}>✨ PREMIUM TOOLS</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          {tools.map(t=>(
            <div key={t.name} onClick={()=> t.external ? window.location.href=t.link : navigate(t.link)} style={{background:t.grad, padding:'16px', borderRadius:'22px', color:'white', cursor:'pointer', position:'relative', overflow:'hidden', boxShadow:'0 8px 20px rgba(0,0,0,0.12)'}}>
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

        <div style={{marginTop:'28px'}}>
          <h3 style={{fontSize:'15px', fontWeight:900, color:'#111', marginBottom:'12px'}}>🎉 ALL WISHES</h3>
          <div style={{display:'grid', gap:'10px'}}>
            {filtered.map((cat:any)=>(
              <div key={cat.slug} onClick={()=>navigate(`/category/${cat.slug}`)} style={{display:'flex', alignItems:'center', gap:'14px', background:'white', padding:'12px', borderRadius:'18px', boxShadow:'0 2px 8px rgba(0,0,0,0.04)', border:'1px solid #fef3e2', cursor:'pointer'}}>
                <div style={{width:'52px', height:'52px', background:'#fff7ed', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>{cat.icon || '🎉'}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:800, fontSize:'14px', color:'#1f2937'}}>{cat.name}</div>
                  <div style={{fontSize:'12px', color:'#9ca3af'}}>{cat.desc?.slice(0,40) || 'Best wishes'}</div>
                </div>
                <div style={{width:'30px', height:'30px', borderRadius:'50%', background:'#fdf2e9', display:'flex', alignItems:'center', justifyContent:'center', color:'#f59e0b', fontWeight:900}}>›</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
