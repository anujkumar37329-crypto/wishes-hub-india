export default function HomePage() {
  const go = (p) => window.location.href = p;
  return (
    <div style={{minHeight:'100vh', background:'#fff7f0', padding:'16px'}}>
      <h1 style={{fontSize:'28px', fontWeight:'900', textAlign:'center', marginTop:'16px'}}>Wishes Hub India 🇮🇳</h1>
      <p style={{textAlign:'center', color:'gray', fontSize:'13px'}}>Festivals, Shayari & Stylish Tools</p>
      <div style={{background:'white', borderRadius:'999px', marginTop:'16px', padding:'12px 16px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>
        <input style={{width:'100%', outline:'none', fontSize:'14px'}} placeholder="Search wishes..." />
      </div>

      <h2 style={{fontWeight:'900', marginTop:'24px', marginBottom:'12px'}}>✨ PREMIUM TOOLS</h2>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>

        <div onClick={()=>go('/diwali-card-generator.html')} style={{background:'linear-gradient(135deg,#ff8c00,#ff2d00)', padding:'20px', borderRadius:'28px', color:'white', cursor:'pointer'}}>
          <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>🪔</div>
          <div style={{marginTop:'40px', fontWeight:'800', fontSize:'17px'}}>Diwali Card</div>
          <div style={{fontSize:'13px', opacity:0.9}}>AI Photo Card</div>
          <div style={{marginTop:'8px', fontSize:'11px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 10px', borderRadius:'999px', fontWeight:'700'}}>NEW 🪔</div>
        </div>

        <div onClick={()=>go('/stylish-names')} style={{background:'linear-gradient(135deg,#c850ff,#ff5eb8)', padding:'20px', borderRadius:'28px', color:'white'}}>
          <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>अ</div>
          <div style={{marginTop:'40px', fontWeight:'800', fontSize:'17px'}}>Stylish Name</div>
          <div style={{fontSize:'13px', opacity:0.9}}>Generator</div>
          <div style={{marginTop:'8px', fontSize:'11px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 10px', borderRadius:'999px', fontWeight:'700'}}>NEW 🔥</div>
        </div>

        <div onClick={()=>go('/fancy-text')} style={{background:'linear-gradient(135deg,#00d4ff,#2a7fff)', padding:'20px', borderRadius:'28px', color:'white'}}>
          <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>F</div>
          <div style={{marginTop:'40px', fontWeight:'800', fontSize:'17px'}}>Fancy Text</div>
          <div style={{fontSize:'13px', opacity:0.9}}>Stylish Fonts</div>
          <div style={{marginTop:'8px', fontSize:'11px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 10px', borderRadius:'999px', fontWeight:'700'}}>POPULAR</div>
        </div>

        <div onClick={()=>go('/ff-nickname')} style={{background:'linear-gradient(135deg,#ff8a00,#ff3d00)', padding:'20px', borderRadius:'28px', color:'white'}}>
          <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>⚔️</div>
          <div style={{marginTop:'40px', fontWeight:'800', fontSize:'17px'}}>FF Nickname</div>
          <div style={{fontSize:'13px', opacity:0.9}}>Free Fire • BGMI</div>
          <div style={{marginTop:'8px', fontSize:'11px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 10px', borderRadius:'999px', fontWeight:'700'}}>VIRAL 🔥</div>
        </div>

        <div onClick={()=>go('/vip-bio')} style={{background:'linear-gradient(135deg,#b06bff,#8a4dff)', padding:'20px', borderRadius:'28px', color:'white'}}>
          <div style={{width:'48px', height:'48px', background:'rgba(255,255,255,0.2)', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'24px'}}>👑</div>
          <div style={{marginTop:'40px', fontWeight:'800', fontSize:'17px'}}>VIP Bio</div>
          <div style={{fontSize:'13px', opacity:0.9}}>Insta Bio</div>
          <div style={{marginTop:'8px', fontSize:'11px', background:'rgba(255,255,255,0.2)', display:'inline-block', padding:'4px 10px', borderRadius:'999px', fontWeight:'700'}}>NEW 👑</div>
        </div>

      </div>

      <h2 style={{fontWeight:'900', marginTop:'32px', marginBottom:'12px'}}>🎉 ALL WISHES</h2>
      <div onClick={()=>go('/diwali-wishes')} style={{background:'white', borderRadius:'20px', padding:'16px', display:'flex', gap:'16px', alignItems:'center'}}>
        <div style={{fontSize:'28px', background:'#fff5e5', width:'56px', height:'56px', borderRadius:'16px', display:'flex', alignItems:'center', justifyContent:'center'}}>🪔</div>
        <div><div style={{fontWeight:'700'}}>Diwali Wishes</div><div style={{fontSize:'12px', color:'gray'}}>Light up the festival of lights...</div></div>
      </div>
    </div>
  );
}
