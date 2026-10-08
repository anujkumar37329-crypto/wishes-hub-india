import { useState } from 'react';
import { categories } from '@/data/wishes';

export function CategoryPage({ router }: any) {
  const [copied, setCopied] = useState<number | null>(null);
  
  // URL se slug nikalna - sabse safe tareeka
  const path = typeof window !== 'undefined' ? window.location.pathname : '';
  const slugFromUrl = path.split('/').pop() || path.split('/').filter(Boolean).pop();
  const slug = router?.params?.slug || router?.params?.id || slugFromUrl;
  
  const category = categories.find((c: any) => c.slug === slug || c.slug.toLowerCase() === slug?.toLowerCase());

  if (!category) {
    return (
      <div style={{padding:'40px 20px', textAlign:'center'}}>
        <p>Category nahi mili: {slug}</p>
        <button onClick={() => router.navigate('/')} style={{marginTop:'12px', background:'#ff8a00', color:'#fff', border:'none', padding:'10px 20px', borderRadius:'10px'}}>Home pe jao</button>
      </div>
    );
  }

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };
  const handleWhatsApp = (text: string) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + "\n\n- Wishes Hub India ✨")}`, '_blank');
  };

  return (
    <div style={{background:'#fdf8f4', minHeight:'100vh', paddingBottom:'20px'}}>
      <div style={{padding:'12px 16px'}}>
        <button onClick={() => router.navigate('/')} style={{background:'#fff', border:'1px solid #eee', padding:'8px 14px', borderRadius:'20px', fontSize:'13px', fontWeight:'700'}}>← Back</button>
      </div>
      <div style={{margin:'0 16px', padding:'22px', borderRadius:'24px', background:'linear-gradient(135deg, #ff9a00 0%, #ff6a00 100%)', color:'#fff'}}>
        <div style={{fontSize:'36px'}}>{category.emoji}</div>
        <h1 style={{fontSize:'26px', fontWeight:'800', margin:'6px 0 0'}}>{category.name}</h1>
        <p style={{fontSize:'13px', opacity:.9, marginTop:'6px'}}>{category.description}</p>
        <div style={{marginTop:'14px', background:'rgba(255,255,255,0.25)', display:'inline-block', padding:'6px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'700'}}>{category.wishes?.length || 20} wishes ✨</div>
      </div>
      <div style={{padding:'16px', display:'grid', gap:'14px', marginTop:'10px'}}>
        {category.wishes?.map((wish: string, i: number) => (
          <div key={i} style={{background:'#fff', borderRadius:'20px', padding:'18px', boxShadow:'0 4px 20px #00000008'}}>
            <div style={{display:'flex', gap:'8px', alignItems:'center', marginBottom:'10px'}}>
              <div style={{width:'30px', height:'30px', borderRadius:'50%', background:'#ff8a00', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'12px', fontWeight:'800'}}>{i+1}</div>
              <span style={{fontSize:'12px', color:'#aaa'}}>Wish #{i+1}</span>
            </div>
            <p style={{fontSize:'16px', lineHeight:'1.6', color:'#222', whiteSpace:'pre-wrap'}}>{wish}</p>
            <div style={{display:'flex', gap:'10px', marginTop:'14px'}}>
              <button onClick={() => handleCopy(wish, i)} style={{flex:1, padding:'12px', borderRadius:'14px', border:'1px solid #eee', background: copied===i ? '#dcfce7' : '#f8f8f8', fontWeight:'700'}}>{copied===i ? '✅ Copied!' : '📋 Copy'}</button>
              <button onClick={() => handleWhatsApp(wish)} style={{flex:1, padding:'12px', borderRadius:'14px', border:'none', background:'#25D366', color:'#fff', fontWeight:'700'}}>WhatsApp</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
