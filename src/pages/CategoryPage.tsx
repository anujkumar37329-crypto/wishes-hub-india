import { useState, useEffect } from 'react';
import { categories } from '../data/wishes';

export function CategoryPage(props: any) {
  const router = props.router;
  const [copied, setCopied] = useState<number | null>(null);
  const [slug, setSlug] = useState('');

  useEffect(() => {
    const p = window.location.pathname.split('/').filter(Boolean).pop() || '';
    setSlug(router?.params?.slug || p);
  }, [router]);

  const category = categories.find((c: any) => c.slug === slug || c.id === slug);

  if (!category) {
    return <div style={{padding:'100px 20px', textAlign:'center', fontFamily:'system-ui'}}>Loading {slug}...</div>
  }

  return (
    <div style={{background:'#FFF7ED', minHeight:'100vh', paddingBottom:'80px', fontFamily:'Inter, system-ui'}}>
      {/* Premium Header */}
      <div style={{
        background:`linear-gradient(135deg, ${category.color || '#ff7a00'} 0%, #ff3b30 100%)`,
        padding:'28px 20px 36px', borderRadius:'0 0 32px 32px', color:'#fff', position:'relative', overflow:'hidden'
      }}>
        <div style={{position:'absolute', top:'-30px', right:'-30px', width:'150px', height:'150px', background:'rgba(255,255,255,0.15)', borderRadius:'50%'}} />
        <div style={{position:'absolute', bottom:'-20px', left:'-20px', width:'100px', height:'100px', background:'rgba(255,255,255,0.1)', borderRadius:'50%'}} />
        <button onClick={() => window.history.back()} style={{background:'rgba(255,255,255,0.2)', backdropFilter:'blur(10px)', border:'none', padding:'8px 16px', borderRadius:'20px', color:'#fff', fontWeight:'600', fontSize:'13px', cursor:'pointer'}}>← Back to Home</button>

        <div style={{display:'flex', alignItems:'center', gap:'14px', marginTop:'18px', position:'relative'}}>
          <div style={{width:'56px', height:'56px', background:'rgba(255,255,255,0.25)', backdropFilter:'blur(10px)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px'}}>{category.emoji}</div>
          <div>
            <h1 style={{fontSize:'26px', fontWeight:'800', margin:0, lineHeight:1.1}}>{category.name} Wishes</h1>
            <p style={{fontSize:'13px', margin:'4px 0 0', opacity:.9, lineHeight:1.4, maxWidth:'280px'}}>{category.description}</p>
          </div>
        </div>
        <div style={{marginTop:'16px', display:'inline-flex', background:'rgba(255,255,255,0.22)', padding:'6px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'700'}}>✨ {category.wishes?.length || 20} wishes available</div>
      </div>

      {/* Ad Space - Premium look */}
      <div style={{margin:'18px 16px', background:'#fff', border:'1px dashed #e5d5c0', borderRadius:'16px', padding:'18px', textAlign:'center'}}>
        <div style={{fontSize:'11px', letterSpacing:'2px', color:'#9ca3af', fontWeight:'700'}}>ADVERTISEMENT</div>
        <div style={{fontSize:'11px', color:'#d1d5db', marginTop:'4px'}}>Google Ad Space - 728x90 / Responsive</div>
      </div>

      {/* Wishes */}
      <div style={{padding:'0 16px', display:'flex', flexDirection:'column', gap:'14px', marginTop:'8px'}}>
        {category.wishes?.map((wish: string, i: number) => (
          <div key={i} style={{
            background:'#fff', borderRadius:'20px', padding:'20px',
            boxShadow:'0 4px 20px rgba(0,0,0,0.06)', border:'1px solid #fff3e0',
            position:'relative'
          }}>
            <div style={{display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px'}}>
              <div style={{
                width:'32px', height:'32px', borderRadius:'50%',
                background:'linear-gradient(135deg,#ff9a00,#ff6a00)',
                color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'13px', fontWeight:'800'
              }}>{i+1}</div>
              <span style={{fontSize:'13px', color:'#9ca3af', fontWeight:'600'}}>Wish #{i+1}</span>
              <span style={{marginLeft:'auto', fontSize:'11px', background:'#fff7ed', padding:'4px 8px', borderRadius:'10px', color:'#ff7a00'}}>🔥 Popular</span>
            </div>

            <p style={{fontSize:'16.5px', lineHeight:'1.7', color:'#1f2937', margin:0, fontWeight:'500', whiteSpace:'pre-line'}}>
              {wish}
            </p>

            <div style={{display:'flex', gap:'10px', marginTop:'18px'}}>
              <button
                onClick={() => { navigator.clipboard.writeText(wish); setCopied(i); setTimeout(()=>setCopied(null),2000); }}
                style={{
                  flex:1, padding:'13px', borderRadius:'14px', border:'1px solid #f3f4f6',
                  background: copied===i? '#dcfce7' : '#f9fafb', fontWeight:'700', fontSize:'14px',
                  cursor:'pointer', color: copied===i? '#16a34a' : '#374151'
                }}
              >
                {copied===i? '✅ Copied!' : '⎙ Copy'}
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(wish + "\n\n- via Wishes Hub India")}`}
                target="_blank"
                style={{
                  flex:1, padding:'13px', borderRadius:'14px', border:'none',
                  background:'#25D366', color:'#fff', fontWeight:'800', fontSize:'14px',
                  cursor:'pointer', textDecoration:'none', textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', gap:'6px'
                }}
              >
                <span>↗</span> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
