import { useParams } from 'react-router-dom';
import { categories } from '@/data/wishes';

export function CategoryPage({ router }: any) {
  const { slug } = useParams() || router?.params || {};
  const category = categories.find((c: any) => c.slug === slug);
  const [copied, setCopied] = useState<number | null>(null);

  if (!category) return <div style={{padding:'20px', textAlign:'center'}}>Category not found</div>;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleWhatsApp = (text: string) => {
    window.open(`https://wa.me/?text=${encodeURIComponent(text + "\n\nVia: Wishes Hub India")}`, '_blank');
  };

  return (
    <div style={{background:'#fdf8f4', minHeight:'100vh', paddingBottom:'20px'}}>
      <div style={{padding:'12px 16px'}}>
        <button onClick={() => router.navigate('/')} style={{display:'flex', alignItems:'center', gap:'6px', background:'#fff', border:'1px solid #eee', padding:'8px 14px', borderRadius:'20px', fontSize:'13px', fontWeight:'600'}}>← Back</button>
      </div>

      <div style={{margin:'0 16px', padding:'22px', borderRadius:'24px', background:'linear-gradient(135deg, #ff9a00 0%, #ff6a00 100%)', color:'#fff', boxShadow:'0 10px 25px #ff8a002e'}}>
        <div style={{fontSize:'36px', marginBottom:'6px'}}>{category.emoji}</div>
        <h1 style={{fontSize:'26px', fontWeight:'800', margin:'0'}}>{category.name}</h1>
        <p style={{fontSize:'13px', opacity:.9, marginTop:'6px', lineHeight:'1.4'}}>{category.description}</p>
        <div style={{marginTop:'14px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'6px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'700', backdropFilter:'blur(10px)'}}>
          {category.wishes?.length || 20} wishes available ✨
        </div>
      </div>

      <div style={{padding:'16px', display:'grid', gap:'14px', marginTop:'8px'}}>
        {category.wishes?.map((wish: string, i: number) => (
          <div key={i} style={{background:'#fff', borderRadius:'20px', padding:'18px', boxShadow:'0 4px 20px #00000008', border:'1px solid #fff2e2'}}>
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginBottom:'12px'}}>
              <div style={{width:'32px', height:'32px', borderRadius:'50%', background:'linear-gradient(135deg,#ff9a00,#ff6a00)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'13px', fontWeight:'800'}}>{i+1}</div>
              <span style={{fontSize:'12px', color:'#aaa', fontWeight:'600'}}>Wish #{i+1}</span>
            </div>
            <p style={{fontSize:'16px', lineHeight:'1.6', color:'#222', fontWeight:'500', whiteSpace:'pre-wrap'}}>{wish}</p>
            <div style={{display:'flex', gap:'10px', marginTop:'16px'}}>
              <button onClick={() => handleCopy(wish, i)} style={{flex:1, padding:'12px', borderRadius:'14px', border:'1px solid #eee', background: copied===i ? '#dcfce7' : '#f8f8f8', fontWeight:'700', fontSize:'14px', transition:'all 0.2s'}}>
                {copied===i ? '✅ Copied!' : '📋 Copy'}
              </button>
              <button onClick={() => handleWhatsApp(wish)} style={{flex:1, padding:'12px', borderRadius:'14px', border:'none', background:'linear-gradient(135deg,#25D366,#128C7E)', color:'#fff', fontWeight:'700', fontSize:'14px', boxShadow:'0 4px 12px #25d36640'}}>
                ↗ WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
