import { useState } from 'react';
import { categories } from '@/data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');
  const filtered = categories.filter((c: any) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:'16px', background:'#fdf8f3', minHeight:'100vh', fontFamily:'system-ui'}}>
      <div style={{textAlign:'center', margin:'16px 0 20px'}}>
        <h2 style={{fontSize:'26px', fontWeight:'800', color:'#1f2937', margin:0}}>Wishes Hub India 🇮🇳</h2>
        <p style={{color:'#666', fontSize:'14px', marginTop:'6px'}}>Festivals, Shayari & Stylish Tools</p>
      </div>

      <div style={{position:'sticky', top:'8px', zIndex:10, background:'#fdf8f3', paddingBottom:'12px'}}>
        <input 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search wishes..."
          style={{width:'100%', padding:'14px 16px', borderRadius:'14px', border:'1px solid #e5e7eb', outline:'none', fontSize:'14px', boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}} 
        />
      </div>

      {/* 🔥 TOOLS SECTION - Stylish Name Wapas */}
      <div style={{marginBottom:'20px'}}>
        <h3 style={{fontSize:'14px', fontWeight:'800', color:'#111', marginBottom:'10px', letterSpacing:'0.5px'}}>✨ PREMIUM TOOLS</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
          
          {/* Stylish Name Card */}
          <div onClick={() => navigate('/stylish-name')} style={{background:'linear-gradient(135deg,#8b5cf6,#ec4899)', padding:'16px', borderRadius:'18px', color:'#fff', cursor:'pointer', boxShadow:'0 8px 20px -8px rgba(139,92,246,0.6)'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', backdropFilter:'blur(10px)'}}>𝕬</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>Stylish Name</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>Generator</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'3px 8px', borderRadius:'20px'}}>NEW 🔥</div>
          </div>

          {/* Font Style Card */}
          <div onClick={() => navigate('/fancy-text')} style={{background:'linear-gradient(135deg,#06b6d4,#3b82f6)', padding:'16px', borderRadius:'18px', color:'#fff', cursor:'pointer', boxShadow:'0 8px 20px -8px rgba(59,130,246,0.6)'}}>
            <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>Ⓕ</div>
            <div style={{marginTop:'10px'}}>
              <div style={{fontWeight:'800', fontSize:'14px'}}>Fancy Text</div>
              <div style={{fontSize:'11px', opacity:0.9, marginTop:'2px'}}>Stylish Fonts</div>
            </div>
            <div style={{marginTop:'8px', fontSize:'10px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'3px 8px', borderRadius:'20px'}}>POPULAR</div>
          </div>

        </div>
      </div>

      {/* Categories */}
      <h3 style={{fontSize:'14px', fontWeight:'800', color:'#111', marginBottom:'10px'}}>🎉 ALL WISHES</h3>
      <div style={{display:'grid', gap:'12px'}}>
        {filtered.map((cat: any) => (
          <div key={cat.slug} onClick={() => navigate(`/category/${cat.slug}`)} style={{display:'flex', alignItems:'center', gap:'12px', background:'#fff', padding:'14px', borderRadius:'16px', boxShadow:'0 2px 10px rgba(0,0,0,0.04)', border:'1px solid #fef3c7', cursor:'pointer'}}>
            <div style={{width:'48px', height:'48px', background:'#fff7ed', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>{cat.emoji}</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontWeight:'700', fontSize:'14px', color:'#1f2937'}}>{cat.name}</div>
              <div style={{fontSize:'12px', color:'#6b7280', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{cat.description?.slice(0,45)}...</div>
            </div>
            <div style={{background:'#fff7ed', width:'28px', height:'28px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px'}}>→</div>
          </div>
        ))}
      </div>

      <p style={{textAlign:'center', marginTop:'24px', fontSize:'12px', color:'#9ca3af'}}>Made with ❤️ in India</p>
    </div>
  );
}
