import { useState } from 'react';
export function NicknameGeneratorPage({ router }: any){
  const [text,setText]=useState('Anuj');
  const styles=[`꧁༒☬ ${text} ☬༒꧂`,`★彡[${text}]彡★`,`『 ${text} 』`,`༺ ${text} ༻`,`♛ ${text} ♛`,`👑 ${text} 👑`,`🔥 ${text} 🔥`,`ᴹᴿ ${text} ᭄`];
  return (
    <div style={{minHeight:'100vh', background:'#0f0f0f', padding:'16px'}}>
      <div style={{maxWidth:'640px', margin:'0 auto'}}>
        <button onClick={()=>router.navigate('/')} style={{background:'#1f1f1f', color:'#fff', padding:'8px 14px', borderRadius:'20px'}}>← Back</button>
        <div style={{marginTop:'16px', background:'linear-gradient(135deg,#f97316,#ef4444)', borderRadius:'24px', padding:'20px', color:'#fff'}}>
          <h1 style={{fontSize:'22px', fontWeight:'900'}}>Free Fire Nickname 🔥</h1>
          <input value={text} onChange={e=>setText(e.target.value)} style={{marginTop:'16px', width:'100%', padding:'14px', borderRadius:'14px', border:'none', fontWeight:'800'}}/>
        </div>
        <div style={{marginTop:'16px', display:'flex', flexDirection:'column', gap:'10px'}}>
          {styles.map((s,i)=>(<div key={i} style={{background:'#1f1f1f', padding:'14px', borderRadius:'14px', display:'flex', justifyContent:'space-between', border:'1px solid #333'}}><div style={{color:'#fff', fontWeight:'700'}}>{s}</div><button onClick={()=>navigator.clipboard.writeText(s)} style={{background:'#f97316', color:'#fff', padding:'8px 14px', borderRadius:'20px', fontWeight:'800'}}>Copy</button></div>))}
        </div>
      </div>
    </div>
  )
}
