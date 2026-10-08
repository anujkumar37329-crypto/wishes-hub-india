import { Link } from "react-router-dom";

const premiumTools = [
  { title: 'Diwali Card', subtitle: 'AI Photo Card', tag: 'NEW 🪔', color: 'linear-gradient(135deg,#ff9a00,#ff2d00)', icon: '🪔', path: '/diwali-card-generator.html' },
  { title: 'Stylish Name', subtitle: 'Generator', tag: 'NEW 🔥', color: 'linear-gradient(135deg,#a855f7,#ec4899)', icon: '✨', path: '/stylish-names' },
  { title: 'Fancy Text', subtitle: 'Stylish Fonts', tag: 'POPULAR', color: 'linear-gradient(135deg,#06b6d4,#3b82f6)', icon: '🔤', path: '/fancy-text' },
  { title: 'FF Nickname', subtitle: 'Free Fire • BGMI', tag: 'VIRAL 🔥', color: 'linear-gradient(135deg,#f97316,#ef4444)', icon: '🎮', path: '/ff-nickname' },
  { title: 'VIP Bio', subtitle: 'Insta Bio', tag: 'NEW 👑', color: 'linear-gradient(135deg,#ec4899,#8b5cf6)', icon: '👑', path: '/vip-bio' },
];

export default function HomePage() {
  return (
    <div style={{ padding: '20px', background: '#0f0f0f', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px', fontSize: '28px', fontWeight: 'bold' }}>
        Wishes Hub India 🇮🇳
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '15px' }}>
        {premiumTools.map((tool, i) => (
          <Link
            key={i}
            to={tool.path}
            style={{
              background: tool.color,
              borderRadius: '20px',
              padding: '20px',
              textDecoration: 'none',
              color: 'white',
              position: 'relative',
              display: 'block'
            }}
          >
            <span style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.4)', fontSize: '10px', padding: '2px 6px', borderRadius: '10px' }}>{tool.tag}</span>
            <div style={{ fontSize: '32px' }}>{tool.icon}</div>
            <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{tool.title}</div>
            <div style={{ fontSize: '12px', opacity: 0.9 }}>{tool.subtitle}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
