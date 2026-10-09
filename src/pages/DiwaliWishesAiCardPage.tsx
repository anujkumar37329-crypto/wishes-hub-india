import { useState } from 'react';

export function DiwaliWishesAiCardPage() {
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const [template, setTemplate] = useState(0);
  const [captionStyle, setCaptionStyle] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(-1);

  const templates = [
    { id: 0, name: 'Royal Diya', icon: '🪔', grad: 'linear-gradient(135deg,#ff8c00 0%,#ffb700 50%,#ff8c00 100%)' },
    { id: 1, name: 'Spark Night', icon: '✨', grad: 'linear-gradient(135deg,#b91c1c 0%,#dc2626 50%,#ff6b00 100%)' },
    { id: 2, name: 'Business Gold', icon: '🏪', grad: 'linear-gradient(135deg,#0f172a 0%,#fbbf24 100%)' },
    { id: 3, name: 'Blessing', icon: '🙏', grad: 'linear-gradient(135deg,#15803d 0%,#22c55e 50%,#16a34a 100%)' },
  ];

  const captionStyles = ['Hinglish 🔥', 'Shayari ❤️', 'Business 💼', 'English ✨'];
  const displayName = name || 'Aapka Naam';

  const getCaptions = () => {
    if (captionStyle === 1) { // Shayari
      return [
        `🪔 Roshan ho jaye aapka jahan, har dua ban jaye haqikat\n${displayName} ki taraf se Deepawali ki shubhkamnayein! ✨\n\n#DiwaliShayari #HappyDiwali`,
        `Diyon ki roshni se jhilmilata aangan ho,\n${displayName} ki taraf se aapko Diwali ki mangal kamnayein ho! 🪔\n\n#Shayari #Deepawali2026`,
      ];
    }
    if (captionStyle === 2) { // Business
      return [
        `🪔 ${business || 'Hamari Dukan'} ki taraf se 🪔\n${displayName} & Family wishes you a prosperous Diwali! Iss Deepawali pe kharidari pe vishesh chhoot! 🙏\n\n#BusinessDiwali #${(business||'Shop').replace(/\s/g,'')} #DiwaliOffer`,
        `✨ Shubh Deepawali from ${business || 'Our Shop'} ✨\nAapka bharosa hi hamari safalta hai! ${displayName} ki taraf se hardik shubhkamnayein! 🪔\n\n#HappyDiwali #CustomerLove`,
      ];
    }
    if (captionStyle === 3) { // English
      return [
        `✨ Happy Diwali 2026 from ${displayName}! ✨\nMay light triumph over darkness always! 🪔\n\n#HappyDiwali #FestivalOfLights`,
      ];
    }
    return [ // Hinglish
      `🪔 Happy Diwali 2026! 🪔\n${displayName} ki taraf se aap sabhi ko Deepawali ki hardik shubhkamnayein! Maa Lakshmi aapke ghar khushiyan laaye. ✨${business?`\n\n🏪 ${business}`:''}\n\n#HappyDiwali #Deepawali2026 #WishesHubIndia`,
      `✨ Wishing you a sparkling Diwali from ${displayName}! ✨\n${business?`Visit: ${business} for Diwali Offers! 🪔\n`:''}\n#DiwaliVibes #Diwali2026`,
    ];
  };

  const captions = getCaptions();
  const t = templates[template];

  const onPhotoChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const r = new FileReader();
      r.onload = (ev: any) => setPhoto(ev.target.result);
      r.readAsDataURL(file);
    }
  };

  const handlePreview = () => {
    if (!name.trim()) { alert('Pehle naam likho bhai! 🙏'); return; }
    setShowPreview(true);
    setTimeout(() => { document.getElementById('preview-card')?.scrollIntoView({ behavior: 'smooth' }); }, 100);
  };

  const copyCaption = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx); setTimeout(()=>setCopiedIndex(-1),2000);
  };

  const handleDownload = (format: 'square'|'story') => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = 1080; canvas.height = format==='story'? 1920 : 1080;

    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1080);
    if (template === 0) { bgGrad.addColorStop(0, '#ff8c00'); bgGrad.addColorStop(1, '#ffbf00'); }
    if (template === 1) { bgGrad.addColorStop(0, '#dc2626'); bgGrad.addColorStop(1, '#ff6b00'); }
    if (template === 2) { bgGrad.addColorStop(0, '#0f172a'); bgGrad.addColorStop(1, '#fbbf24'); }
    if (template === 3) { bgGrad.addColorStop(0, '#15803d'); bgGrad.addColorStop(1, '#22c55e'); }
    ctx.fillStyle = bgGrad; ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    for(let i=0;i<20;i++){ ctx.beginPath(); ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, Math.random()*70+20, 0, Math.PI*2); ctx.fill(); }

    const centerY = format==='story'? 500 : 350;
    ctx.fillStyle = 'white'; ctx.textAlign = 'center';
    ctx.font = 'bold 90px system-ui'; ctx.fillText('🪔', 540, centerY);
    ctx.font = 'bold 76px system-ui'; ctx.fillText('Happy Diwali', 540, centerY+320);
    ctx.font = 'bold 60px system-ui'; ctx.fillText(displayName.toUpperCase(), 540, centerY+410);
    if(business){
      ctx.font = 'bold 36px system-ui'; ctx.fillStyle = '#ffe082'; ctx.fillText(business.toUpperCase(), 540, centerY+470);
    }
    ctx.font = '30px system-ui'; ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.fillText('Wishes Hub India', 540, canvas.height - 120);

    const link = document.createElement('a');
    link.download = `Diwali-${displayName}-${format}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ minHeight: '100vh', background: '#fdf8f3', fontFamily: 'system-ui' }}>
      <div style={{ background: 'linear-gradient(90deg,#ff8c00,#ffbf00)', padding: '18px 20px', color: 'white', textAlign: 'center' }}>
        <h1 style={{ fontWeight: 900, fontSize: '20px', margin: 0 }}>🪔 AI Diwali Wishes PRO</h1>
        <p style={{ fontSize: '12px', margin: '4px 0 0' }}>Business + Personal + Shayari = 3X Viral!</p>
      </div>

      <div style={{ maxWidth: '520px', margin: '0 auto', padding: '16px' }}>
        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '14px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>1. Apna Naam *</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Anuj Kumar" style={{ width: '100%', marginTop: '10px', padding: '14px 16px', borderRadius: '14px', border: '2px solid #ffe4b5', outline: 'none' }} />
          <label style={{ fontWeight: 800, fontSize: '14px', marginTop: '14px', display: 'block' }}>🏪 Dukan / Business Name (Optional - Dukan walo ke liye)</label>
          <input value={business} onChange={e=>setBusiness(e.target.value)} placeholder="Jaise: Anuj Kirana Store" style={{ width: '100%', marginTop: '10px', padding: '14px 16px', borderRadius: '14px', border: '2px dashed #fbbf24', outline: 'none', background: '#fffbeb' }} />
          <div style={{ fontSize: '11px', color: '#b45309', marginTop: '6px' }}>💡 Ye likhoge toh card pe aur caption me auto ayega - Business walo ke liye best!</div>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '14px' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>2. Photo (Golden Ring)</label>
          <input type="file" accept="image/*" onChange={onPhotoChange} style={{ display: 'block', marginTop: '12px' }} />
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '14px' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>3. Template</label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
            {templates.map((tmp)=>(
              <div key={tmp.id} onClick={()=>setTemplate(tmp.id)} style={{ background: tmp.grad, borderRadius: '18px', padding: '18px', textAlign: 'center', cursor: 'pointer', border: template===tmp.id? '3px solid black' : '3px solid transparent' }}>
                <div style={{ fontSize: '26px' }}>{tmp.icon}</div>
                <div style={{ fontSize: '11px', fontWeight: 900, color: 'white', marginTop: '6px' }}>{tmp.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'white', borderRadius: '20px', padding: '18px', marginBottom: '18px' }}>
          <label style={{ fontWeight: 800, fontSize: '14px' }}>4. Caption Style Chuno</label>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px', flexWrap: 'wrap' }}>
            {captionStyles.map((cs, i)=>(
              <button key={i} onClick={()=>setCaptionStyle(i)} style={{ padding: '8px 14px', borderRadius: '20px', border: captionStyle===i? '2px solid black' : '1px solid #ddd', background: captionStyle===i? 'black' : 'white', color: captionStyle===i? 'white' : 'black', fontWeight: 800, fontSize: '12px', cursor: 'pointer' }}>{cs}</button>
            ))}
          </div>
        </div>

        <button onClick={handlePreview} style={{ width: '100%', background: 'black', color: 'white', padding: '16px', borderRadius: '16px', fontWeight: 900, border: 'none', cursor: 'pointer' }}>👁️ Preview Dekho</button>

        {showPreview && (
          <>
            <div id="preview-card" style={{ marginTop: '22px', background: 'white', borderRadius: '24px', padding: '12px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
              <div style={{ background: t.grad, borderRadius: '20px', padding: '30px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
                  {[...Array(10)].map((_,i)=><div key={i} style={{ position:'absolute', width: 30+Math.random()*50, height: 30+Math.random()*50, background:'rgba(255,255,255,0.3)', borderRadius:'50%', left: Math.random()*80+'%', top: Math.random()*80+'%' }} />)}
                </div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ fontSize: '36px', animation: 'flicker 1s infinite' }}>🪔</div>
                  {photo? (
                    <div style={{ margin: '18px auto', width: '115px', height: '115px', borderRadius: '50%', padding: '4px', background: 'linear-gradient(45deg,#ffd700,#fff,#ffd700)', boxShadow: '0 0 25px rgba(255,215,0,0.9)' }}>
                      <img src={photo} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid white' }} />
                    </div>
                  ) : <div style={{ margin: '18px auto', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' }}>👤</div>}
                  <div style={{ color: 'white', fontWeight: 900, fontSize: '28px' }}>Happy Diwali</div>
                  <div style={{ color: 'white', fontWeight: 900, fontSize: '22px', marginTop: '8px', textTransform: 'uppercase' }}>{displayName}</div>
                  {business && <div style={{ color: '#ffeb3b', fontWeight: 900, fontSize: '14px', marginTop: '8px', background: 'rgba(0,0,0,0.25)', padding: '6px 14px', borderRadius: '20px', display: 'inline-block' }}>🏪 {business}</div>}
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', marginTop: '16px' }}>Wishes Hub India 🪔</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '12px' }}>
                <button onClick={()=>handleDownload('square')} style={{ background: 'linear-gradient(90deg,#ff8c00,#ffbf00)', color: 'white', padding: '14px', borderRadius: '14px', fontWeight: 900, border: 'none', cursor: 'pointer' }}>⬇️ Square Post (1080x1080)</button>
                <button onClick={()=>handleDownload('story')} style={{ background: 'black', color: 'white', padding: '14px', borderRadius: '14px', fontWeight: 900, border: 'none', cursor: 'pointer' }}>📱 Story Size (1080x1920)</button>
              </div>
            </div>

            <div style={{ marginTop: '22px' }}>
              <h3 style={{ fontWeight: 900, fontSize: '16px', marginBottom: '12px' }}>📝 {captionStyles[captionStyle]} Captions Ready</h3>
              {captions.map((cap, idx)=>(
                <div key={idx} style={{ background: 'white', borderRadius: '16px', padding: '14px', marginBottom: '12px', border: '1px solid #ffe4b5' }}>
                  <div style={{ fontSize: '13px', whiteSpace: 'pre-line', lineHeight: '1.5' }}>{cap}</div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <button onClick={()=>copyCaption(cap, idx)} style={{ flex: 1, background: copiedIndex===idx? '#22c55e' : 'black', color: 'white', border: 'none', padding: '10px', borderRadius: '10px', fontWeight: 800, fontSize: '12px', cursor: 'pointer' }}>{copiedIndex===idx? '✓ Copied!' : '📋 Copy'}</button>
                    <button onClick={()=>{ window.open(`https://wa.me/?text=${encodeURIComponent(cap)}`,'_blank'); }} style={{ flex: 1, background: '#25D366', color: 'white', border: 'none', padding: '10px', borderRadius: '10px', fontWeight: 800, fontSize: '12px', cursor: 'pointer' }}>💬 WhatsApp</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <style>{`@keyframes flicker {0%,100%{opacity:1} 50%{opacity:0.7}}`}</style>
    </div>
  );
}
