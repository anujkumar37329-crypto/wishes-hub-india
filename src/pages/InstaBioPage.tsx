import { useState } from 'react';
export function InstaBioPage({ router }: any){
  const [name,setName]=useState('Anuj');
  const bios=[
    `🔥 Attitude King 👑\n💯 ${name} on Top\n🚫 Hate = Block`,
    `❤️ Love My Life\n😎 Single but Happy\n👑 Born to Rule`,
    `💔 Broken but Strong\n🖤 Alone Lover\n🎧 Music + Me`,
    `👑 ${name} Nam Toh Suna Hoga\n🔥 Official\n📍 Lucknow`,
    `😎 VIP Account\n🔒 Private Thoughts\n💯 100% Real`,
    `🙏 Mahakal Bhakt\n🔱 Har Har Mahadev\n❤️ Proud Hindu`,
  ];
  return (
    <div style={{minHeight:'100vh', background:'#fff0f6', padding:'16px'}}>
      <div style={{maxWidth:'640px', margin:'0 auto'}}>
        <button onClick={()=>router.navigate('/')} style={{background:'#fff', padding:'8px 14px', borderRadius:'20px', border:'1px solid #ddd'}}>← Back</button>
        <div style={{marginTop:'16px', background:'linear-gradient(135deg,#ec4899,#8b5cf6)', borderRadius:'24px', padding:'20px', color:'#fff'}}>
          <h1 style={{fontSize:'22px', fontWeight:'800'}}>Instagram VIP Bio 👑</h1>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" style={{marginTop:'16px', width:'100%', padding:'14px', borderRadius:'14px', border:'none', fontWeight:'700'}}/>
        </div>
        <div style={{marginTop:'16px', display:'flex', flexDirection:'column', gap:'10px'}}>
          {bios.map((s,i)=>(<div key={i} style={{background:'#fff', padding:'14px', borderRadius:'14px', display:'flex', gap:'12px', border:'1px solid #f3e8ff', whiteSpace:'pre-line'}}><div style={{flex:1, fontWeight:'600', fontSize:'14px'}}>{s}</div><button onClick={()=>navigator.clipboard.writeText(s)} style={{background:'#f5f3ff', color:'#7c3aed', padding:'8px 14px', borderRadius:'20px', fontWeight:'800'}}>Copy</button></div>))}
        </div>
      </div>
    </div>
  )
}
