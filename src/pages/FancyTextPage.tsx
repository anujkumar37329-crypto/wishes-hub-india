export function FancyTextPage({ router }: any) {
  const [text, setText] = React.useState("Wishes Hub");
  const [copied, setCopied] = React.useState("");
  const fonts = [
    (t:string)=>`𝕱𝖆𝖓𝖈𝖞 ${t}`, (t:string)=>`𝐹𝒶𝓃𝒸𝓎 ${t}`, (t:string)=>`𝔽𝕒𝕟𝕔𝕪 ${t}`, (t:string)=>`𝙵𝚊𝚗𝚌𝚢 ${t}`,
    (t:string)=>`𝓕𝓪𝓷𝓬𝔂 ${t}`, (t:string)=>`🅵🅰🅽🅲🆈 ${t}`, (t:string)=>`FΛПᄃY ${t}`, (t:string)=>`₣₳₦₵Ɏ ${t}`
  ];
  const copy = (s:string) => { navigator.clipboard.writeText(s); setCopied(s); setTimeout(()=>setCopied(""),1500); };
  return (
    <div style={{minHeight:'100vh', background:'#f8fafc', padding:'20px 16px'}}>
      <div style={{maxWidth:'600px', margin:'0 auto'}}>
        <button onClick={()=>router.navigate('/')} style={{marginBottom:'16px', fontWeight:'700'}}>← Back</button>
        <h1 style={{fontSize:'26px', fontWeight:'900'}}>Fancy Text Generator ✨</h1>
        <input value={text} onChange={(e:any)=>setText(e.target.value)} placeholder="Type here..." style={{width:'100%', padding:'14px', borderRadius:'14px', border:'2px solid #e2e8f0', marginTop:'16px', fontSize:'16px'}} />
        <div style={{display:'grid', gap:'12px', marginTop:'16px'}}>
          {fonts.map((fn,i)=>{
            const out = fn(text || "Preview");
            return <div key={i} onClick={()=>copy(out)} style={{background:'#fff', padding:'14px', borderRadius:'14px', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer', border:'1px solid #f1f5f9'}}>
              <span>{out}</span><span style={{background: copied===out ? '#10b981' : '#8b5cf6', color:'#fff', padding:'6px 12px', borderRadius:'8px', fontSize:'12px'}}>{copied===out?'Copied!':'Copy'}</span>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}
const React = { useState: (v:any)=>{ const s = [v, (x:any)=>{}]; return s as any; } } as any;
