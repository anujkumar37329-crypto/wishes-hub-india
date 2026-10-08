import { useState } from 'react';
import { categories } from '@/data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');

  const filtered = categories.filter((c: any) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:'16px'}}>
      <div style={{textAlign:'center', margin:'10px 0 20px'}}>
        <h2 style={{fontSize:'28px', fontWeight:'800'}}>Har Mauke Ke Liye Wishes 💌</h2>
        <p style={{color:'#666', fontSize:'14px', marginTop:'6px'}}>Dil se nikle hue wishes</p>
      </div>
      
      <div style={{position:'sticky', top:'10px', zIndex:10, background:'#fef7f0', paddingBottom:'12px'}}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search - Diwali, Birthday, Love..."
          style={{width:'100%', padding:'14px 18px', borderRadius:'16px', border:'1px solid #ffe4c4', boxShadow:'0 4px 12px #0000000d', outline:'none', fontSize:'15px', background:'#fff'}}
        />
      </div>

      <div style={{marginTop:'16px', display:'grid', gap:'12px'}}>
        {filtered.map((cat: any) => (
          <div 
            key={cat.slug}
            onClick={() => navigate(`/category/${cat.slug}`)}
            style={{padding:'16px', background:'#fff', borderRadius:'16px', boxShadow:'0 2px 10px #00000007', border:'1px solid #fff2e2', cursor:'pointer', display:'flex', alignItems:'center', gap:'12px'}}
          >
            <div style={{width:'44px', height:'44px', background:'#fff7ed', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px', flexShrink:0}}>
              {cat.emoji}
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontWeight:'700', fontSize:'15px'}}>{cat.name}</div>
              <div style={{fontSize:'12px', color:'#888', marginTop:'3px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{cat.description}</div>
            </div>
            <div style={{color:'#ddd', fontSize:'18px'}}>›</div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div style={{textAlign:'center', padding:'40px', color:'#999'}}>Kuch nahi mila "{search}" ke liye 😕</div>
        )}
      </div>
    </div>
  );
}
