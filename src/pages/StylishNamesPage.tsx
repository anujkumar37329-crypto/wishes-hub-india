import { useState } from 'react';

function generateStyles(text:string){
  if(!text) return [];
  const base = text.trim();
  return [
    `꧁༒☬ ${base} ☬༒꧂`,
    `𝕬 ${base} 𝕶`,
    `★彡 ${base} 彡★`,
    `╰☆☆ ${base} ☆☆╮`,
    `『 ${base} 』`,
    `༺ ${base} ༻`,
    `◥ ${base} ◤`,
    `☯ ${base} ☯`,
    `꧁ ${base} ꧂`,
    `♛ ${base} ♛`,
    `♚ ${base} ♚`,
    `👑 ${base} 👑`,
    `🔥 ${base} 🔥`,
    `⚡ ${base} ⚡`,
    `꧁☆ ${base} ☆꧂`,
    `${base.split('').join(' ')}`,
    `${base.toUpperCase().split('').join(' ')}`,
    `~ ${base} ~`,
    `•°• ${base} •°•`,
    `𝓢𝓽𝔂𝓵𝓲𝓼𝓱 ${base}`,
    `𝒮𝓉𝓎𝓁𝒾𝓈𝒽 ${base}`,
    `𝔖𝔱𝔶𝔩𝔦𝔰𝔥 ${base}`,
    `🅂🅃🅈🄻🄸🅂🄷 ${base}`,
    `Ⓢⓣⓨⓛⓘⓢⓗ ${base}`,
    `𝕾𝖙𝖞𝖑𝖎𝖘𝖍 ${base}`,
  ];
}

export function StylishNamesPage({ router }: any){
  const [name,setName]=useState('Anuj');
  const styles = generateStyles(name);
  const [copied,setCopied]=useState<number|null>(null);

  return (
    <div style={{minHeight:'100vh', background:'#f9f6ff', padding:'16px', fontFamily:'system-ui'}}>
      <div style={{maxWidth:'640px', margin:'0 auto'}}>
        <button onClick={()=>router.navigate('/')} style={{background:'#fff', border:'1px solid #e5e7eb', padding:'8px 14px', borderRadius:'20px', fontSize:'13px', fontWeight:'600'}}>← Back to Home</button>

        <div style={{marginTop:'16px', background:'linear-gradient(135deg,#8b5cf6,#ec4899)', borderRadius:'24px', padding:'20px', color:'#fff', boxShadow:'0 12px 24px -10px rgba(139,92,246,0.6)'}}>
          <h1 style={{fontSize:'22px', fontWeight:'800', margin:0}}>Stylish Name Generator</h1>
          <p style={{fontSize:'13px', opacity:0.9, marginTop:'4px'}}>25+ Fonts for Free Fire, BGMI, Instagram Bio</p>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Enter Your Name" style={{marginTop:'16px', width:'100%', padding:'14px', borderRadius:'14px', border:'none', fontSize:'16px', fontWeight:'700', outline:'none', color:'#111'}}/>
        </div>

        <div style={{marginTop:'16px', display:'flex', flexDirection:'column', gap:'10px'}}>
          {styles.map((s:string,i:number)=>(
            <div key={i} style={{background:'#fff', padding:'14px 16px', borderRadius:'14px', display:'flex', alignItems:'center', justifyContent:'space-between', boxShadow:'0 2px 10px rgba(0,0,0,0.04)', border:'1px solid #f3e8ff'}}>
              <div style={{fontSize:'16px', fontWeight:'600', flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', paddingRight:'10px'}}>{s}</div>
              <button onClick={()=>{navigator.clipboard.writeText(s); setCopied(i); setTimeout(()=>setCopied(null),1500)}} style={{background:copied===i?'#dcfce7':'#f5f3ff', color:copied===i?'#16a34a':'#7c3aed', border:'none', padding:'8px 14px', borderRadius:'20px', fontSize:'12px', fontWeight:'800', cursor:'pointer'}}>
                {copied===i?'Copied!':'Copy'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
