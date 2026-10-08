import { useState } from 'react';
import { categories } from '@/data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');

  const filtered = categories.filter((c: any) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{minHeight:'100vh', background:'linear-gradient(180deg, #fff7ed 0%, #ffffff 100%)'}}>
      <div style={{padding:'20px', maxWidth:'800px', margin:'0 auto'}}>
        <div style={{textAlign:'center', margin:'20px 0'}}>
          <h1 style={{fontSize:'36px', fontWeight:'900'}}>Wishes Hub <span style={{background:'linear-gradient(90deg, #ff6a00, #ee0979)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>India</span> 🇮🇳</h1>
          <p style={{color:'#666', marginTop:'8px'}}>Dil se nikle hue wishes, har mauke ke liye</p>
        </div>
        <div style={{position:'relative', marginTop:'24px'}}>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search karo - Diwali, Birthday, Love..."
            style={{width:'100%', padding:'16px 20px', borderRadius:'24px', border:'1px solid #ffedd5', boxShadow:'0 8px 20px #00000008', outline:'none', fontSize:'16px'}}
          />
        </div>
        <div style={{marginTop:'24px', display:'grid', gap:'14px'}}>
          {filtered.map((cat: any) => (
            <div 
              key={cat.slug}
              onClick={() => navigate(`/category/${cat.slug}`)}
              style={{padding:'18px', background:'#fff', borderRadius:'18px', boxShadow:'0 4px 15px #00000006', border:'1px solid #fff7ed', cursor:'pointer', display:'flex', alignItems:'center', gap:'12px'}}
            >
              <div style={{width:'48px', height:'48px', background:'#fff7ed', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>
                {cat.emoji}
              </div>
              <div style={{flex:1}}>
                <div style={{fontWeight:'700', fontSize:'16px'}}>{cat.name}</div>
                <div style={{fontSize:'12px', color:'#888', marginTop:'2px'}}>{cat.description}</div>
              </div>
              <div style={{color:'#ccc'}}>→</div>
            </div>
          ))}
          {filtered.length === 0 && (
            <div style={{textAlign:'center', padding:'40px', color:'#999'}}>Kuch nahi mila "{search}" ke liye 😕</div>
          )}
        </div>
        <p style={{textAlign:'center', marginTop:'30px', fontSize:'12px', color:'#aaa'}}>Made with ❤️ in India</p>
      </div>
    </div>
  );
}
