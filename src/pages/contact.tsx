import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
const DiscordIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{flexShrink:0}}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const SOCIAL_ICONS: Record<string, JSX.Element> = {
  'LinkedIn': <LinkedinIcon />,
  'Discord': <DiscordIcon />,
  'GitHub': <GithubIcon />,
};

const rv: React.CSSProperties = { opacity:0, transform:'translateY(24px)', transition:'opacity 0.7s ease, transform 0.7s ease' };
const label: React.CSSProperties = { fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.75rem' };
const labelLine: React.CSSProperties = { width:20, height:1, background:'#C49A6C', display:'inline-block', flexShrink:0 };

const inputStyle: React.CSSProperties = {
  background:'#fff', border:'1px solid #d9ccc0', color:'#1C1410',
  fontFamily:"'Lora',serif", fontSize:'0.95rem', padding:'0.75rem 1rem',
  outline:'none', width:'100%', transition:'border-color 0.2s',
};

export default function ContactPage() {
  const refs = useRef<HTMLElement[]>([]);
  const [form, setForm] = useState({ fname:'', lname:'', email:'', subject:'', message:'' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { const el = e.target as HTMLElement; el.style.opacity='1'; el.style.transform='translateY(0)'; }
    }), { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (el: HTMLElement | null) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fname || !form.email || !form.message) { alert('Please fill in name, email, and message.'); return; }
    const fullName = `${form.fname} ${form.lname}`.trim();
    try {
      // Using Formspree — sign up free at formspree.io and replace YOUR_FORM_ID below
      // Until you set that up, this falls back to mailto
      const FORMSPREE_ID = 'YOUR_FORM_ID'; // e.g. 'xpwzqdkj'
      if (FORMSPREE_ID !== 'YOUR_FORM_ID') {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({ name: fullName, email: form.email, subject: form.subject, message: form.message }),
        });
        if (res.ok) { setSent(true); return; }
      }
      // Fallback: open mail client
      const subject = encodeURIComponent(form.subject || `Message from ${fullName}`);
      const body = encodeURIComponent(`From: ${fullName} (${form.email})\n\n${form.message}`);
      window.open(`mailto:BEC@csu.qc.ca?subject=${subject}&body=${body}`);
      setSent(true);
    } catch {
      const subject = encodeURIComponent(form.subject || `Message from ${fullName}`);
      const body = encodeURIComponent(`From: ${fullName} (${form.email})\n\n${form.message}`);
      window.open(`mailto:BEC@csu.qc.ca?subject=${subject}&body=${body}`);
      setSent(true);
    }
  };

  return (
    <div style={{ background:'#FAF7F2', minHeight:'100vh' }}>
      <Navbar />

      {/* PAGE HERO */}
      <div style={{ background:'linear-gradient(135deg,#7B1C1C 0%,#5a1212 100%)', padding:'7rem 2rem 4rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 80% 20%,rgba(196,154,108,0.12) 0%,transparent 50%)' }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', marginBottom:'0.75rem' }}>
            Get in Touch
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.5rem,6vw,4rem)', fontWeight:700, color:'#fff' }}>
            Contact Us
          </h1>
        </div>
      </div>

      <section style={{ maxWidth:1100, margin:'0 auto', padding:'5rem 2rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start' }}>

          {/* LEFT — Info */}
          <div>
            <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Connect With BEC</div>
            <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'#1C1410',marginBottom:'1rem'}}>
              We'd Love to<br/>Hear From You
            </h2>
            <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.8,color:'#5a4a3e',marginBottom:'2.5rem'}}>
              Whether you're a student looking to join, a company interested in partnering, or a faculty member wanting to collaborate — reach out and let's start a conversation.
            </p>

            <div ref={r} style={{...rv,transitionDelay:'0.3s',display:'flex',flexDirection:'column',gap:'1.5rem'}}>
              {[
                { label:'Email', value:'BEC@csu.qc.ca', href:'mailto:BEC@csu.qc.ca' },
                { label:'University', value:'Concordia University, Montréal, QC', href:null },
                { label:'Application Form', value:'Join / Apply Now →', href:'https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform' },
                { label:'Partnership Inquiry', value:'BEC@csu.qc.ca →', href:'mailto:BEC@csu.qc.ca?subject=Partnership Inquiry' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e',marginBottom:'0.25rem'}}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                        style={{fontFamily:"'Lora',serif",fontSize:'1rem',color:'#7B1C1C',textDecoration:'none'}}>{item.value}</a>
                    : <span style={{fontFamily:"'Lora',serif",fontSize:'1rem',color:'#1C1410'}}>{item.value}</span>
                  }
                </div>
              ))}
            </div>

            {/* Social */}
            <div ref={r} style={{...rv,transitionDelay:'0.4s',marginTop:'2.5rem'}}>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.18em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'1rem'}}>Follow Us</div>
              <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
                {[
                  { label:'LinkedIn', href:'https://www.linkedin.com/company/bio-medical-engineering-club/' },
                  { label:'Discord', href:'https://discord.gg/fDeR5uG8Zz' },
                  { label:'GitHub', href:'https://github.com/Concordia-Biomedical-Engineering-Club' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    style={{
                      fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.10em',
                      textTransform:'uppercase', color:'#7B1C1C',
                      border:'1px solid #d9ccc0', padding:'0.45rem 1rem',
                      textDecoration:'none', transition:'all 0.2s',
                      display:'flex', alignItems:'center', gap:'0.4rem',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#7B1C1C'; (e.currentTarget as HTMLElement).style.color='#fff'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='transparent'; (e.currentTarget as HTMLElement).style.color='#7B1C1C'; }}
                  >
                    {SOCIAL_ICONS[s.label]}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div ref={r} style={{...rv,transitionDelay:'0.2s'}}>
            <div style={{...label}}><span style={labelLine}/>Send a Message</div>
            {sent ? (
              <div style={{background:'#EDE4D3',border:'1px solid #d9ccc0',padding:'2rem',textAlign:'center'}}>
                <div style={{fontSize:'2rem',marginBottom:'1rem'}}>✉️</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.4rem',color:'#7B1C1C',marginBottom:'0.5rem'}}>Message Sent!</h3>
                <p style={{fontFamily:"'Lora',serif",fontSize:'0.95rem',color:'#5a4a3e'}}>Your email client should have opened. We'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
                  <div>
                    <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e',marginBottom:'0.4rem'}}>First Name *</div>
                    <input style={inputStyle} placeholder="Alex" value={form.fname} onChange={e=>setForm(p=>({...p,fname:e.target.value}))}
                      onFocus={e=>{e.target.style.borderColor='#7B1C1C';}} onBlur={e=>{e.target.style.borderColor='#d9ccc0';}}/>
                  </div>
                  <div>
                    <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e',marginBottom:'0.4rem'}}>Last Name</div>
                    <input style={inputStyle} placeholder="Smith" value={form.lname} onChange={e=>setForm(p=>({...p,lname:e.target.value}))}
                      onFocus={e=>{e.target.style.borderColor='#7B1C1C';}} onBlur={e=>{e.target.style.borderColor='#d9ccc0';}}/>
                  </div>
                </div>
                <div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e',marginBottom:'0.4rem'}}>Email *</div>
                  <input style={inputStyle} type="email" placeholder="you@example.com" value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))}
                    onFocus={e=>{e.target.style.borderColor='#7B1C1C';}} onBlur={e=>{e.target.style.borderColor='#d9ccc0';}}/>
                </div>
                <div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e',marginBottom:'0.4rem'}}>Subject</div>
                  <input style={inputStyle} placeholder="I'd like to collaborate…" value={form.subject} onChange={e=>setForm(p=>({...p,subject:e.target.value}))}
                    onFocus={e=>{e.target.style.borderColor='#7B1C1C';}} onBlur={e=>{e.target.style.borderColor='#d9ccc0';}}/>
                </div>
                <div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e',marginBottom:'0.4rem'}}>Message *</div>
                  <textarea style={{...inputStyle,resize:'vertical',minHeight:140}} placeholder="Tell us about yourself or your idea…" value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))}
                    onFocus={e=>{e.target.style.borderColor='#7B1C1C';}} onBlur={e=>{e.target.style.borderColor='#d9ccc0';}}/>
                </div>
                <button type="submit" style={{
                  background:'#7B1C1C', color:'#fff', border:'2px solid #7B1C1C', cursor:'pointer',
                  fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.72rem', letterSpacing:'0.10em',
                  textTransform:'uppercase', padding:'0.85rem 2rem', alignSelf:'flex-start',
                  transition:'background 0.2s',
                }}
                  onMouseEnter={e=>{(e.target as HTMLElement).style.background='#5a1212';}}
                  onMouseLeave={e=>{(e.target as HTMLElement).style.background='#7B1C1C';}}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* JOIN BANNER */}
      <section style={{background:'#EDE4D3',padding:'4rem 2rem',textAlign:'center',borderTop:'1px solid #d9ccc0'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div ref={r} style={{...rv,fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'0.75rem'}}>Ready to Join?</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3.5vw,2.5rem)',fontWeight:700,color:'#1C1410',marginBottom:'1rem'}}>
            Apply to BEC Today
          </h2>
          <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.8,color:'#5a4a3e',marginBottom:'1.5rem'}}>
            Fill out our application form and a member of the team will reach out.
          </p>
          <div ref={r} style={{...rv,transitionDelay:'0.3s'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform" target="_blank" rel="noreferrer"
              style={{background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.9rem 2rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
              Open Application Form →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
