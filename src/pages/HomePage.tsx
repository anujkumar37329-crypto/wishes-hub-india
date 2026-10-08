export function HomePage({ router }: any) {
  const tools = [
    { title: 'Stylish Names', desc: '🔥 1M+ Used • Copy Paste', color: '#f97316', icon: '🔥', path: '/stylish-names' },
    { title: 'FF Nickname Generator', desc: '⚔️ For Free Fire, BGMI', color: '#ef4444', icon: '⚔️', path: '/nickname-generator' },
    { title: 'Instagram VIP Bio', desc: '👑 Attitude Bio for Boys', color: '#ec4899', icon: '👑', path: '/insta-bio' },
    { title: 'Fancy Text Generator', desc: '✨ 30+ Cool Fonts', color: '#8b5cf6', icon: '✨', path: '/fancy-text' },
    { title: 'Festival Wishes', desc: '🪔 Diwali, Holi, Eid', color: '#eab308', icon: '🪔', path: '/festival-wishes' },
    { title: 'Love Shayari', desc: '❤️ 500+ Shayari', color: '#f43f5e', icon: '❤️', path: '/shayari' },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fb', fontFamily: 'system-ui', padding: '0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 16px' }}>
        <div style={{ background: 'linear-gradient(135deg,#0f172a,#1e293b)', borderRadius: '28px', padding: '28px 20px', color: '#fff', textAlign: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', lineHeight: '1.1', margin: 0 }}>Wishes Hub India 🇮🇳</h1>
          <p style={{ fontSize: '14px', opacity: 0.8, marginTop: '8px' }}>India's No.1 Stylish Name & Bio Generator - 2M+ Users Trust Us</p>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '16px', flexWrap: 'wrap' }}>
            <span style={{ background: '#ffffff1a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>⚡ 100% Free</span>
            <span style={{ background: '#ffffff1a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>🔥 No Login</span>
            <span style={{ background: '#ffffff1a', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>✅ Copy Paste</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
          {tools.map((t) => (
            <div key={t.path} onClick={() => router.navigate(t.path)} style={{ background: '#fff', borderRadius: '20px', padding: '18px', cursor: 'pointer', border: '1px solid #f1f5f9', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${t.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{t.icon}</div>
              <div style={{ fontSize: '15px', fontWeight: '800', marginTop: '12px', color: '#0f172a' }}>{t.title}</div>
              <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', fontWeight: '500' }}>{t.desc}</div>
              <div style={{ marginTop: '12px', background: t.color, color: '#fff', padding: '8px', borderRadius: '10px', textAlign: 'center', fontSize: '12px', fontWeight: '800' }}>Generate Now →</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', background: '#fff', borderRadius: '20px', padding: '16px', border: '1px solid #f1f5f9', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ fontSize: '28px' }}>🚀</div>
          <div>
            <div style={{ fontWeight: '800', fontSize: '14px' }}>2,34,891+ Names Generated Today</div>
            <div style={{ fontSize: '12px', color: '#64748b' }}>Join India's biggest stylish names community</div>
          </div>
        </div>
      </div>
    </div>
  );
}
