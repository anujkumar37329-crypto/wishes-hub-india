import { useState } from 'react';
import { categories } from '@/data/wishes';

export function HomePage({ router }: any) {
  const { navigate } = router;
  const [search, setSearch] = useState('');

  const filtered = categories.filter((c: any) => 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{padding:'20px', maxWidth:'800px', margin:'0 auto'}}>
      <h1 style={{fontSize:'28px', fontWeight:'bold', textAlign:'center'}}>Wishes Hub India 🇮🇳</h1>
      
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search karo - Diwali, Birthday..."
        style={{width:'100%', marginTop:'20px', padding:'12px', borderRadius:'20px', border:'1px solid #ddd'}}
      />

      <div style={{marginTop:'20px', display:'grid', gap:'10px'}}>
        {filtered.map((cat: any) => (
          <div 
            key={cat.slug}
            onClick={() => navigate(`/category/${cat.slug}`)}
            style={{padding:'16px', background:'#fff', borderRadius:'12px', boxShadow:'0 1px 4px #0001', cursor:'pointer'}}
          >
            <span>{cat.emoji}</span> <b>{cat.name}</b>
            <p style={{fontSize:'12px', color:'#666'}}>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
