import { useState } from 'react';
import { categories } from '../data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');
  const filtered = categories.filter((c: any) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:'18px', background:'#fdf8f3', minHeight:'100vh', fontFamily:'system-ui'}}>
      <div style={{textAlign:'center', margin:'10px 0 20px'}}>
        <h2 style={{fontSize:'26px', fontWeight:'800', color:'#1f2937', margin:'0'}}>Wishes Hub India 🇮🇳</h2>
        <p style={{color:'#666', fontSize:'14px', marginTop:'4px'}}>Festivals, Shayari & Stylish Tools</p>
      </div>

      <div style={{position:'sticky', top:'8px', zIndex:10, background:"#fdf8f3", paddingBottom:'12px'}}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search wishes..."
          style={{width:'100%', padding:'14px 16px', borderRadius:'14px', border:'1px solid #e5e7eb', outline:'none', fontSize:'14px', background:'white'}}
        />
      </div>

      {/* 🔥 PREMIUM TOOLS */}
      <div style={{marginBottom:'20px'}}>
        <h3 style={{fontSize:'14px', fontWeight:'800', color:'#111', marginBottom:'10px', letterSpacing:'0.5px'}}>✨ PREMIUM TOOLS</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>

          {/* Diwali Card */}
          <div onClick={() => window.location.href='/diwali-card-generator.html'} style={{background:'linear-gradient(135deg,#ff8c00,#ff2d00)', padding:'14px', borderRadius:'18px', color:'white', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🪔</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>Diwali Card</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>AI Photo Card</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:'20px', fontWeight:'700'}}>NEW 🪔</div>
          </div>

          {/* Stylish Names */}
          <div onClick={() => navigate('/stylish-names')} style={{background:'linear-gradient(135deg,#8b5cf6,#ec4899)', padding:'14px', borderRadius:'18px', color:'white', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>✨</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>Stylish Names</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>Generator</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:'20px', fontWeight:'700'}}>NEW 🔥</div>
          </div>

          {/* Fancy Text */}
          <div onClick={() => navigate('/fancy-text')} style={{background:'linear-gradient(135deg,#06b6d4,#3b82f6)', padding:'14px', borderRadius:'18px', color:'white', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🔤</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>Fancy Text</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>Stylish Fonts</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:'20px', fontWeight:'700'}}>POPULAR</div>
          </div>

          {/* FF Nickname */}
          <div onClick={() => navigate('/ff-nickname')} style={{background:'linear-gradient(135deg,#f59e0b,#ef4444)', padding:'14px', borderRadius:'18px', color:'white', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>⚔️</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>FF Nickname</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>Free Fire • BGMI</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:'20px', fontWeight:'700'}}>VIRAL 🔥</div>
          </div>

          {/* VIP Bio */}
          <div onClick={() => navigate('/vip-bio')} style={{background:'linear-gradient(135deg,#a855f7,#6366f1)', padding:'14px', borderRadius:'18px', color:'white', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>👑</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>VIP Bio</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>Insta Bio</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 8px', borderRadius:'20px', fontWeight:'700'}}>NEW 👑</div>
          </div>

        </div>
      </div>

      {/* Categories */}
      <h3 style={{fontSize:'14px', fontWeight:'800', color:'#111', marginBottom:'10px'}}>🎉 ALL WISHES</h3>
      <div style={{display:'grid', gap:'12px'}}>
        {filtered.map((cat: any) => (
          <div key={cat.slug} onClick={() => navigate(`/category/${cat.slug}`)} style={{display:'flex', alignItems:'center', gap:'12px', background:'white', padding:'14px', borderRadius:'16px', boxShadow:'0 1px 3px rgba(0,0,0,0.05)', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'#fff7ed', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', flexShrink:0}}>{cat.icon || '🎉'}</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontWeight:'700', fontSize:'14px', color:'#1f2937'}}>{cat.name}</div>
              <div style={{fontSize:'12px', color:'#6b7280', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{cat.desc || ''}</div>
            </div>
            <div style={{background:'#fff7ed', width:'28px', height:'28px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px'}}>→</div>
          </div>
        ))}
      </div>

      <p style={{textAlign:'center', marginTop:'24px', fontSize:'12px', color:'#9ca3af'}}>Made with ❤️ in India</p>
    </div>
  );
}
