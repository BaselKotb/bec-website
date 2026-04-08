import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const rv: React.CSSProperties = { opacity:0, transform:'translateY(24px)', transition:'opacity 0.7s ease, transform 0.7s ease' };
const label: React.CSSProperties = { fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.75rem' };
const labelLine: React.CSSProperties = { width:20, height:1, background:'#C49A6C', display:'inline-block', flexShrink:0 };

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo?: string;
  linkedin?: string;
}

const INITIAL_TEAM: TeamMember[] = [
  { id: 'ali', name: 'Ali Kotb', role: 'President', linkedin: '' },
  { id: 'lojaine', name: 'Lojaine', role: 'VP Internal', linkedin: 'https://www.linkedin.com/in/lojaine' },
  { id: 'natalie', name: 'Natalie', role: 'VP Finance', linkedin: '' },
  { id: 'youssef', name: 'Youssef Jedidi', role: 'VP Projects', linkedin: '' },
  { id: 'alessia', name: 'Alessia L', role: 'VP Media', linkedin: '' },
  { id: 'alif', name: 'Alif Mia', role: 'VP Sponsorships', linkedin: '' },
  { id: 'claudia', name: 'Claudia', role: 'VP Events', linkedin: '' },
  { id: 'basel', name: 'Basel Kotb', role: 'VP IT', linkedin: '' },
];

const ROLE_COLORS: Record<string, string> = {
  'President': '#7B1C1C',
  'VP Internal': '#9e2e2e',
  'VP Finance': '#8a7a6e',
  'VP Projects': '#7B1C1C',
  'VP Media': '#C49A6C',
  'VP Sponsorships': '#5a4a3e',
  'VP Events': '#9e2e2e',
  'VP IT': '#1C1410',
};

function MemberCard({ member, onPhotoUpload }: { member: TeamMember; onPhotoUpload: (id: string, url: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => onPhotoUpload(member.id, ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <div style={{
      background:'#fff', border:'1px solid #d9ccc0',
      padding:'2rem', display:'flex', flexDirection:'column', gap:'1rem',
      transition:'box-shadow 0.25s, transform 0.2s',
    }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow='0 8px 32px rgba(124,28,28,0.10)'; (e.currentTarget as HTMLElement).style.transform='translateY(-2px)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow='none'; (e.currentTarget as HTMLElement).style.transform='translateY(0)'; }}
    >
      {/* Photo */}
      <div style={{ display:'flex', alignItems:'center', gap:'1rem' }}>
        <div
          onClick={() => fileRef.current?.click()}
          style={{
            width:72, height:72, borderRadius:'50%', flexShrink:0, cursor:'pointer',
            border:'3px solid #d9ccc0', overflow:'hidden', position:'relative',
            background:'#EDE4D3', display:'flex', alignItems:'center', justifyContent:'center',
          }}
          title="Click to upload photo"
        >
          {member.photo
            ? <img src={member.photo} alt={member.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            : <span style={{fontSize:'1.6rem'}}>👤</span>
          }
          <div style={{
            position:'absolute', inset:0, background:'rgba(123,28,28,0.6)',
            display:'flex', alignItems:'center', justifyContent:'center',
            opacity:0, transition:'opacity 0.2s', borderRadius:'50%',
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity='1'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity='0'; }}
          >
            <span style={{color:'#fff',fontSize:'0.7rem',fontFamily:"'IBM Plex Mono',monospace"}}>+photo</span>
          </div>
        </div>
        <input ref={fileRef} type="file" accept="image/*" style={{display:'none'}} onChange={handleFile}/>

        <div>
          <div style={{
            fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.6rem', letterSpacing:'0.15em',
            textTransform:'uppercase', color: ROLE_COLORS[member.role] || '#C49A6C',
            marginBottom:'0.3rem',
          }}>
            {member.role}
          </div>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.1rem', fontWeight:700, color:'#1C1410' }}>
            {member.name}
          </div>
        </div>
      </div>

      {/* LinkedIn */}
      {member.linkedin && (
        <a href={member.linkedin} target="_blank" rel="noreferrer"
          style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.62rem',letterSpacing:'0.10em',textTransform:'uppercase',color:'#7B1C1C',textDecoration:'none'}}>
          LinkedIn →
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>(INITIAL_TEAM);
  const refs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { const el = e.target as HTMLElement; el.style.opacity='1'; el.style.transform='translateY(0)'; }
    }), { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (el: HTMLElement | null) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  const handlePhotoUpload = (id: string, url: string) => {
    setTeam(prev => prev.map(m => m.id === id ? { ...m, photo: url } : m));
  };

  const president = team.find(m => m.role === 'President');
  const vps = team.filter(m => m.role !== 'President');

  return (
    <div style={{ background:'#FAF7F2', minHeight:'100vh' }}>
      <Navbar />

      {/* PAGE HERO */}
      <div style={{ background:'linear-gradient(135deg,#7B1C1C 0%,#5a1212 100%)', padding:'7rem 2rem 4rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 20% 80%,rgba(196,154,108,0.15) 0%,transparent 50%)' }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', marginBottom:'0.75rem' }}>
            2024–2025 Executive Board
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.5rem,6vw,4rem)', fontWeight:700, color:'#fff', marginBottom:'0.75rem' }}>
            Meet the Team
          </h1>
          <p style={{ fontFamily:"'Lora',serif", fontSize:'1rem', color:'rgba(255,255,255,0.75)', maxWidth:500, margin:'0 auto' }}>
            The passionate individuals driving innovation in biomedical engineering at Concordia.
          </p>
        </div>
      </div>

      {/* PHOTO HINT */}
      <div style={{ background:'#EDE4D3', padding:'0.85rem 2rem', textAlign:'center', borderBottom:'1px solid #d9ccc0' }}>
        <span style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.12em', color:'#8a7a6e' }}>
          💡 Click on any profile circle to upload a photo
        </span>
      </div>

      {/* PRESIDENT */}
      {president && (
        <section style={{ maxWidth:800, margin:'4rem auto 0', padding:'0 2rem', textAlign:'center' }}>
          <div ref={r} style={{...rv,...label,justifyContent:'center'}}><span style={labelLine}/>Leadership</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3.5vw,2.5rem)',fontWeight:700,color:'#1C1410',marginBottom:'2.5rem'}}>
            Executive President
          </h2>
          <div ref={r} style={{...rv,transitionDelay:'0.2s',display:'flex',justifyContent:'center'}}>
            <div style={{ maxWidth:280, width:'100%' }}>
              <div
                onClick={() => document.getElementById(`upload-${president.id}`)?.click()}
                style={{
                  width:120, height:120, borderRadius:'50%', margin:'0 auto 1.25rem',
                  border:'4px solid #7B1C1C', overflow:'hidden', cursor:'pointer',
                  background:'#EDE4D3', display:'flex', alignItems:'center', justifyContent:'center',
                  position:'relative',
                }}
                title="Click to upload photo"
              >
                {president.photo
                  ? <img src={president.photo} alt={president.name} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                  : <span style={{fontSize:'2.5rem'}}>👤</span>
                }
              </div>
              <input id={`upload-${president.id}`} type="file" accept="image/*" style={{display:'none'}}
                onChange={e => { const f=e.target.files?.[0]; if(!f) return; const rd=new FileReader(); rd.onload=ev=>handlePhotoUpload(president.id,ev.target?.result as string); rd.readAsDataURL(f); }}/>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#7B1C1C',marginBottom:'0.4rem'}}>President</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.5rem',fontWeight:700,color:'#1C1410'}}>{president.name}</div>
            </div>
          </div>
        </section>
      )}

      {/* VP GRID */}
      <section style={{ maxWidth:1100, margin:'4rem auto', padding:'0 2rem 5rem' }}>
        <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Vice Presidents</div>
        <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3.5vw,2.5rem)',fontWeight:700,color:'#1C1410',marginBottom:'2.5rem'}}>
          Executive Board
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:'1.5rem' }}>
          {vps.map((m, i) => (
            <div key={m.id} ref={r} style={{...rv, transitionDelay:`${0.08*i}s`}}>
              <MemberCard member={m} onPhotoUpload={handlePhotoUpload}/>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN TEAM */}
      <section style={{background:'#1C1410',padding:'5rem 2rem',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div ref={r} style={{...rv,fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'1rem'}}>Open Positions</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,2.8rem)',fontWeight:700,color:'#FAF7F2',marginBottom:'1.25rem'}}>Join the Executive Team</h2>
          <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.8,color:'#8a7a6e',marginBottom:'2rem'}}>
            Build leadership experience, coordinate events and workshops, and make a real impact on your club and community.
          </p>
          <div ref={r} style={{...rv,transitionDelay:'0.3s'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform" target="_blank" rel="noreferrer"
              style={{background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.9rem 2rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
              Apply Now →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
