import { useState, useRef } from 'react';

export function DiwaliWishesAiCardPage() {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [template, setTemplate] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const templates = [
    { id: 0, name: 'Royal Diya', icon: '🪔', grad: 'linear-gradient(135deg,#ff8c00 0%,#ffb700 50%,#ff8c00 100%)', accent: '#fff' },
    { id: 1, name: 'Spark Night', icon: '✨', grad: 'linear-gradient(135deg,#b91c1c 0%,#dc2626 50%,#ff6b00 100%)', accent: '#ffeb3b' },
    { id: 2, name: 'Festival Blast', icon: '🎆', grad: 'linear-gradient(135deg,#4c1d95 0%,#6d28d9 50%,#a855f7 100%)', accent: '#fde047' },
    { id: 3, name: 'Blessing', icon: '🙏', grad: 'linear-gradient(135deg,#15803d 0%,#22c55e 50%,#16a34a 100%)', accent: '#fef08a' },
  ];

  const t = templates[template];

  const onPhotoChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev: any) => setPhoto(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handlePreview = () => {
    if (!name.trim()) { alert('Pehle apna naam likho bhai! 🙏'); return; }
    setShowPreview(true);
    setTimeout(() => { document.getElementById('preview-card')?.scrollIntoView({ behavior: 'smooth' }); }, 100);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    // Simple canvas download trick
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 1080;
    canvas.height = 1080;

    // Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1080);
    if (template === 0) { bgGrad.addColorStop(0, '#ff8c00'); bgGrad.addColorStop(1, '#ffbf00'); }
    if (template === 1) { bgGrad.addColorStop(0, '#dc2626'); bgGrad.addColorStop(1, '#ff6b00'); }
    if (template === 2) { bgGrad.addColorStop(0, '#4c1d95'); bgGrad.addColorStop(1, '#a855f7'); }
    if (template === 3) { bgGrad.addColorStop(0, '#15803d'); bgGrad.addColorStop(1, '#22c55e'); }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1080);

    // Bokeh dots
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    for(let i=0;i<15;i++){ ctx.beginPath(); ctx.arc(Math.random()*1080, Math.random()*1080, Math.random()*60+20, 0, Math.PI*2); ctx.fill(); }

    // Text
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.font = 'bold 80px system-ui';
    ctx.fillText('🪔', 540, 180);
    ctx.font = 'bold 70px system-ui';
    ctx.fillText('Happy Diwali', 540, 700);
    ctx.font = 'bold 56px system-ui';
    ctx.fillText(name.toUpperCase(), 540, 780);
    ctx.font = '32px system-ui';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fillText('Wishes Hub India wishes you', 540, 850);
    ctx.fillText('a prosperous Deepawali 🪔', 540, 890);
    ctx.font = '22px system-ui';
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.fillText('wishes-hub-india.vercel.app', 540, 1020);

    const link = document.createElement('a');
    link.download = `Happy-Diwali-${name}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();

    // WhatsApp Share hint
    setTimeout(()=>{ alert('Card download ho gaya! Ab WhatsApp pe share karo 🚀'); }, 500);
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fdf8f3', fontFamily: 'system-ui' }}>
      <div style={{ background: 'linear-gradient(90deg,#ff8c00,#ffbf00)', padding: '18px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: '20px', margin: 0 }}>🪔 AI Diwali Wishes Card Maker</h1>
        <p style={{ fontSize: '13px', margin: '4px 0 0', opacity: 0.95 }}>Apna naam aur photo se banao viral card</p>
      </div>

      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '16px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>1. Apna Naam Likho</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Jaise: Aman" style={{ width: '100%', marginTop: '10px', padding: '14px 16px', borderRadius: '14px', border: '2px solid #ffe4b5', outline: 'none', fontSize: '15px' }} />
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>2. Photo Upload (Optional)</label>
          <input type="file" accept="image/*" onChange={onPhotoChange} style={{ display: 'block', marginTop: '12px' }} />
          {photo && <div style={{ marginTop: '12px', color: 'green', fontSize: '12px', fontWeight: 700 }}>✓ Photo added - Golden ring lagega!</div>}
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '18px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>3. Template Chuno</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            {templates.map((tmp)=>(
              <div key={tmp.id} onClick={()=>setTemplate(tmp.id)} style={{ background: tmp.grad, borderRadius: '18px', padding: '18px', textAlign: 'center', cursor: 'pointer', border: template===tmp.id? '3px solid black' : '3px solid transparent', transform: template===tmp.id? 'scale(1.03)' : 'scale(1)', transition: '0.2s' }}>
                <div style={{ fontSize: '28px' }}>{tmp.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 900, color: 'white', marginTop: '6px' }}>{tmp.name}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={handlePreview} style={{ width: '100%', background: 'black', color: 'white', padding: '16px', borderRadius: '16px', fontWeight: 900, fontSize: '16px', border: 'none', cursor: 'pointer' }}>👁️ Preview Dekho</button>
        <button onClick={handleDownload} style={{ width: '100%', marginTop: '12px', background: 'linear-gradient(90deg,#ff8c00,#ffbf00)', color: 'white', padding: '16px', borderRadius: '16px', fontWeight: 900, fontSize: '16px', border: 'none', cursor: 'pointer' }}>⬇️ Download & WhatsApp Share</button>

        {showPreview && (
          <div id="preview-card" style={{ marginTop: '22px', background: 'white', borderRadius: '24px', padding: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
            <div ref={cardRef} style={{ background: t.grad, borderRadius: '20px', padding: '30px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden', minHeight: '380px' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.3 }}>
                {[...Array(8)].map((_,i)=><div key={i} style={{ position:'absolute', width: 20+Math.random()*60, height: 20+Math.random()*60, background:'rgba(255,255,255,0.3)', borderRadius:'50%', left: Math.random()*80+'%', top: Math.random()*80+'%' }} />)}
              </div>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ fontSize: '32px' }}>🪔</div>
                {photo? (
                  <div style={{ margin: '18px auto', width: '110px', height: '110px', borderRadius: '50%', padding: '4px', background: 'linear-gradient(45deg,#ffd700,#fff,#ffd700)', boxShadow: '0 0 20px rgba(255,215,0,0.8)' }}>
                    <img src={photo} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid white' }} />
                  </div>
                ) : <div style={{ margin: '18px auto', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>👤</div>}
                <div style={{ color: 'white', fontWeight: 900, fontSize: '28px', textShadow: '0 2px 10px rgba(0,0,0,0.2)', letterSpacing: '0.5px' }}>Happy Diwali</div>
                <div style={{ color: 'white', fontWeight: 900, fontSize: '22px', marginTop: '8px', textTransform: 'uppercase', textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>{name || 'Aapka Naam'}</div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '14px', lineHeight: '1.4' }}>Wishes Hub India wishes you<br/>a prosperous Deepawali 🪔</div>
                <div style={{ marginTop: '22px', fontSize: '10px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.5px' }}>wishes-hub-india.vercel.app</div>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '13px', color: '#888' }}>Made with ❤️ by Wishes Hub India • Diwali 2026</div>
          </div>
        )}
      </div>
    </div>
  );
}
