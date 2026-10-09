import { useState, useRef } from 'react';

export function DiwaliWishesAiCardPage() {
  const [name, setName] = useState('');
  const [template, setTemplate] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);

  const templates = [
    { id: 0, bg: 'linear-gradient(135deg,#ff8c00,#ffd700)', emoji: '🪔', text: 'Happy Diwali' },
    { id: 1, bg: 'linear-gradient(135deg,#8B0000,#ff4500)', emoji: '✨', text: 'Shubh Deepawali' },
    { id: 2, bg: 'linear-gradient(135deg,#1a0033,#4d1a80)', emoji: '🎆', text: 'Diwali Wishes' },
    { id: 3, bg: 'linear-gradient(135deg,#004d00,#22c55e)', emoji: '🙏', text: 'Happy Diwali' },
  ];

  const generateCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1080;
    canvas.height = 1080;

    // Background
    const grad = ctx.createLinearGradient(0,0,1080,1080);
    if(template===0){ grad.addColorStop(0,'#ff8c00'); grad.addColorStop(1,'#ffd700'); }
    if(template===1){ grad.addColorStop(0,'#8B0000'); grad.addColorStop(1,'#ff4500'); }
    if(template===2){ grad.addColorStop(0,'#1a0033'); grad.addColorStop(1,'#7c3aed'); }
    if(template===3){ grad.addColorStop(0,'#065f46'); grad.addColorStop(1,'#22c55e'); }
    ctx.fillStyle = grad;
    ctx.fillRect(0,0,1080,1080);

    // Lights
    ctx.fillStyle = 'rgba(255,255,255,0.15)';
    for(let i=0;i<20;i++){ ctx.beginPath(); ctx.arc(Math.random()*1080, Math.random()*500, Math.random()*40+10,0,Math.PI*2); ctx.fill(); }

    // Photo circle if uploaded
    if(photo){
      const img = new Image();
      img.src = photo;
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(540, 400, 140, 0, Math.PI*2);
        ctx.clip();
        ctx.drawImage(img, 400, 260, 280, 280);
        ctx.restore();
        drawText();
      }
    } else {
      drawText();
    }

    function drawText(){
      if(!ctx) return;
      ctx.fillStyle = 'white';
      ctx.font = 'bold 80px system-ui';
      ctx.textAlign = 'center';
      ctx.fillText(templates[template].emoji, 540, 180);

      ctx.font = 'bold 72px system-ui';
      ctx.fillText(templates[template].text, 540, 680);

      ctx.font = 'bold 56px system-ui';
      if(name) ctx.fillText(name, 540, 780);

      ctx.font = '32px system-ui';
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fillText('Wishes Hub India wishes you', 540, 860);
      ctx.fillText('a prosperous Deepawali 🪔', 540, 910);

      // Watermark
      ctx.font = 'bold 20px system-ui';
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fillText('wishes-hub-india.vercel.app', 540, 1020);
    }
  };

  const download = () => {
    generateCard();
    setTimeout(()=>{
      const canvas = canvasRef.current;
      if(!canvas) return;
      const link = document.createElement('a');
      link.download = `diwali-wish-${name||'card'}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }, 500);
  };

  const handlePhoto = (e:any) => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = (ev) => setPhoto(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{minHeight:'100vh', background:'#fff8ef', fontFamily:'system-ui', paddingBottom:'40px'}}>
      <div style={{background:'linear-gradient(135deg,#ff8c00,#ffd700)', padding:'24px 20px', color:'white'}}>
        <div onClick={()=> window.history.back()} style={{cursor:'pointer', marginBottom:'10px'}}>← Back</div>
        <h1 style={{fontSize:'28px', fontWeight:900, margin:0}}>Diwali AI Card 🪔</h1>
        <p style={{opacity:0.9, margin:'6px 0 0'}}>Apna naam aur photo se banao viral card</p>
      </div>

      <div style={{padding:'20px', maxWidth:'500px', margin:'0 auto'}}>
        <div style={{background:'white', borderRadius:'20px', padding:'18px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)', marginBottom:'16px'}}>
          <label style={{fontWeight:700, fontSize:'14px'}}>1. Apna Naam Likho</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Jaise: Aman" style={{width:'100%', marginTop:'8px', padding:'14px', borderRadius:'12px', border:'1px solid #ffe4b5', outline:'none'}} />
        </div>

        <div style={{background:'white', borderRadius:'20px', padding:'18px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)', marginBottom:'16px'}}>
          <label style={{fontWeight:700, fontSize:'14px'}}>2. Photo Upload (Optional)</label>
          <input type="file" accept="image/*" onChange={handlePhoto} style={{width:'100%', marginTop:'8px'}} />
          {photo && <img src={photo} style={{width:'80px', height:'80px', borderRadius:'50%', marginTop:'12px', objectFit:'cover'}} />}
        </div>

        <div style={{background:'white', borderRadius:'20px', padding:'18px', boxShadow:'0 4px 20px rgba(0,0,0,0.06)', marginBottom:'16px'}}>
          <label style={{fontWeight:700, fontSize:'14px'}}>3. Template Chuno</label>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'12px'}}>
            {templates.map(t=>(
              <div key={t.id} onClick={()=>setTemplate(t.id)} style={{height:'90px', borderRadius:'14px', background:t.bg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px', cursor:'pointer', border: template===t.id? '3px solid #000' : '2px solid transparent'}}>{t.emoji}</div>
            ))}
          </div>
        </div>

        <button onClick={generateCard} style={{width:'100%', padding:'14px', borderRadius:'14px', background:'#111', color:'white', fontWeight:800, border:'none', marginBottom:'10px'}}>👁️ Preview Dekho</button>
        <button onClick={download} style={{width:'100%', padding:'14px', borderRadius:'14px', background:'linear-gradient(135deg,#ff8c00,#ffd700)', color:'white', fontWeight:800, border:'none'}}>⬇️ Download & WhatsApp Share</button>

        <div style={{marginTop:'20px', background:'white', borderRadius:'20px', padding:'10px', display:'flex', justifyContent:'center'}}>
          <canvas ref={canvasRef} style={{width:'100%', borderRadius:'14px', maxWidth:'400px', aspectRatio:'1', background:'#f5f5f5'}} />
        </div>

        <p style={{textAlign:'center', fontSize:'12px', color:'#888', marginTop:'16px'}}>Made with ❤️ by Wishes Hub India • Diwali 2026</p>
      </div>
    </div>
  )
}
