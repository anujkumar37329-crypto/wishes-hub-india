export function HomePage({ router }: any) {
  const premiumTools = [
    { title: 'Stylish Name', subtitle: 'Generator', tag: 'NEW 🔥', color: 'linear-gradient(135deg,#a855f7,#ec4899)', icon: '𝕬', path: '/stylish-names' },
    { title: 'Fancy Text', subtitle: 'Stylish Fonts', tag: 'POPULAR', color: 'linear-gradient(135deg,#06b6d4,#3b82f6)', icon: 'Ⓕ', path: '/fancy-text' },
    { title: 'FF Nickname', subtitle: 'Free Fire • BGMI', tag: 'VIRAL 🔥', color: 'linear-gradient(135deg,#f97316,#ef4444)', icon: '⚔️', path: '/nickname-generator' },
    { title: 'VIP Bio', subtitle: 'Insta Bio', tag: 'NEW 👑', color: 'linear-gradient(135deg,#ec4899,#8b5cf6)', icon: '👑', path: '/insta-bio' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#fff8f2', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '900', textAlign: 'center', margin: '16px 0 4px' }}>Wishes Hub India 🇮🇳</h1>
        <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '14px', marginBottom: '16px' }}>Festivals, Shayari & Stylish Tools</p>
        
        <div style={{ background: '#fff', borderRadius: '16px', padding: '12px', marginBottom: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
          <input placeholder="Search wishes..." style={{ width: '100%', border: 'none', outline: 'none', fontSize: '14px' }} />
        </div>

        <div style={{ fontWeight: '800', fontSize: '14px', marginBottom: '12px' }}>✨ PREMIUM TOOLS</div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {premiumTools.map((t) => (
            <div key={t.path} onClick={() => router.navigate(t.path)} style={{ background: t.color, borderRadius: '20px', padding: '16px', color: '#fff', cursor: 'pointer' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(255,255,255,0.2)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '900' }}>{t.icon}</div>
              <div style={{ fontWeight: '800', marginTop: '20px', fontSize: '15px' }}>{t.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.9 }}>{t.subtitle}</div>
              <div style={{ marginTop: '10px', background: 'rgba(255,255,255,0.25)', display: 'inline-block', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '700' }}>{t.tag}</div>
            </div>
          ))}
        </div>

        <div style={{ fontWeight: '800', fontSize: '14px', margin: '20px 0 12px' }}>🎉 ALL WISHES</div>
        <div onClick={()=>router.navigate('/category/diwali-wishes')} style={{ background:'#fff', borderRadius:'16px', padding:'12px', display:'flex', gap:'12px', alignItems:'center', marginBottom:'10px', cursor:'pointer' }}>
          <div style={{width:'48px', height:'48px', background:'#fff7ed', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>🪔</div>
          <div><div style={{fontWeight:'700', fontSize:'14px'}}>Diwali Wishes</div><div style={{fontSize:'12px', color:'#6b7280'}}>Light up the festival of lights...</div></div>
        </div>
        <div onClick={()=>router.navigate('/shayari')} style={{ background:'#fff', borderRadius:'16px', padding:'12px', display:'flex', gap:'12px', alignItems:'center', cursor:'pointer' }}>
          <div style={{width:'48px', height:'48px', background:'#fff1f2', borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'22px'}}>❤️</div>
          <div><div style={{fontWeight:'700', fontSize:'14px'}}>Love Shayari</div><div style={{fontSize:'12px', color:'#6b7280'}}>Express your deepest emotions...</div></div>
        </div>
      </div>
    </div>
  );
}
