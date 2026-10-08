import { useState } from 'react';
import { categories } from '@/data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');
  const filtered = categories.filter((c: any) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{padding:'16px', background:'#fdf8f4', minHeight:'100vh'}}>
      <div style={{textAlign:'center', margin:'12px 0 18px'}}>
        <h2 style={{fontSize:'26px', fontWeight:'800', lineHeight:'1.2'}}>Har Mauke Ke Liye Wishes 💌</h2>
        <p style={{color:'#666', fontSize:'14px', marginTop:'6px'}}>Dil se nikle hue wishes ✨</p>
      </div>
      <div style={{position:'sticky', top:'8px', zIndex:10, paddingBottom:'12px'}}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search - Diwali, Birthday, Love..." style={{width:'100%', padding:'15px 18px', borderRadius:'16px', border:'1px solid #ffe4c4', boxShadow:'0 4px 20px #0000000a', outline:'none', fontSize:'15px', background:'#fff'}}/>
      </div>
      <div style={{display:'grid', gap:'12px'}}>
        {filtered.map((cat: any) => (
          <div key={cat.slug} onClick={() => navigate(`/category/${cat.slug}`)} style={{padding:'16px', background:'#fff', borderRadius:'18px', boxShadow:'0 2px 12px #00000008', border:'1px solid #fff2e2', cursor:'pointer', display:'flex', alignItems:'center', gap:'14px'}}>
            <div style={{width:'48px', height:'48px', background:'linear-gradient(135deg, #fff7ed, #ffedd5)', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', flexShrink:0}}>{cat.emoji}</div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontWeight:'700', fontSize:'15px'}}>{cat.name}</div>
              <div style={{fontSize:'12px', color:'#888', marginTop:'2px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{cat.description}</div>
            </div>
            <div style={{background:'#fff7ed', width:'28px', height:'28px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#ff8a00', fontSize:'14px'}}>→</div>
          </div>
        ))}
      </div>
      <p style={{textAlign:'center', marginTop:'30px', fontSize:'11px', color:'#bbb'}}>Made with ❤️ in India</p>
    </div>
  );
}
