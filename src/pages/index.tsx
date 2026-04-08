import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const rv: React.CSSProperties = { opacity: 0, transform: 'translateY(24px)', transition: 'opacity 0.7s ease, transform 0.7s ease' };
const label: React.CSSProperties = { fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.75rem' };
const labelLine: React.CSSProperties = { width:20, height:1, background:'#C49A6C', display:'inline-block', flexShrink:0 };

export default function HomePage() {
  const refs = useRef<HTMLElement[]>([]);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { const el = e.target as HTMLElement; el.style.opacity='1'; el.style.transform='translateY(0)'; }
    }), { threshold: 0.1 });
    refs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);
  const r = (el: HTMLElement | null) => { if (el && !refs.current.includes(el)) refs.current.push(el); };

  return (
    <div style={{ background:'#FAF7F2', minHeight:'100vh' }}>
      <Navbar />

      {/* HERO */}
      <section style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'100vh', alignItems:'center', paddingTop:68 }}>
        <div style={{ padding:'clamp(3rem,6vw,6rem) clamp(1.5rem,4vw,4rem)' }}>
          <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Concordia University · Montréal</div>
          <h1 ref={r} style={{...rv,transitionDelay:'0.1s', fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.8rem,5.5vw,5rem)', fontWeight:700, lineHeight:1.08, color:'#1C1410', marginBottom:'1.5rem'}}>
            Concordia<br/><span style={{color:'#7B1C1C'}}>Biomedical</span><br/>Engineering<br/>Club.
          </h1>
          <p ref={r} style={{...rv,transitionDelay:'0.2s', fontFamily:"'Lora',serif", fontSize:'1.05rem', lineHeight:1.8, color:'#5a4a3e', maxWidth:480, marginBottom:'2.5rem'}}>
            The Biomedical Engineering Club is dedicated to fostering a community of aspiring biomedical engineers at Concordia University. Our mission is to explore innovative solutions that bridge engineering and healthcare, preparing members for careers in this dynamic field.
          </p>
          <div ref={r} style={{...rv,transitionDelay:'0.3s', display:'flex', gap:'1rem', flexWrap:'wrap'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform" target="_blank" rel="noreferrer"
              style={{background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.85rem 1.75rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
              Join Our Community →
            </a>
            <a href="mailto:BEC@csu.qc.ca"
              style={{background:'transparent',color:'#7B1C1C',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.85rem 1.75rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
              Email Us
            </a>
          </div>
        </div>
        <div style={{height:'100vh',position:'relative',overflow:'hidden'}}>
          <img src="/assets/images/team_photo.jpg" alt="BEC Team" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
          <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,rgba(250,247,242,0.3) 0%,transparent 30%)'}}/>
        </div>
      </section>

      {/* QUOTE STRIP */}
      <section style={{background:'#7B1C1C',padding:'4rem 2rem',textAlign:'center'}}>
        <div style={{maxWidth:800,margin:'0 auto'}}>
          <div ref={r} style={{...rv,fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'1.25rem'}}>Our Mission</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.4rem,3vw,2.2rem)',fontWeight:600,color:'#fff',lineHeight:1.5,fontStyle:'italic'}}>
            "Bridging engineering and healthcare — preparing the next generation of biomedical innovators."
          </h2>
        </div>
      </section>

      {/* CARDS */}
      <section style={{padding:'5rem 2rem',maxWidth:1100,margin:'0 auto'}}>
        <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Explore</div>
        <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'#1C1410',marginBottom:'3rem'}}>What We Do</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'1.5rem'}}>
          {[
            {href:'/projects',title:'Our Projects',desc:"From AI dermatology tools to the True North Biomedical Competition — see what we're building.",tag:'Active Work'},
            {href:'/team',title:'Meet the Team',desc:'The passionate students behind BEC — our executive board, project leads, and open roles.',tag:'The People'},
            {href:'/contact',title:'Get Involved',desc:"Interested in joining, collaborating, or sponsoring? We'd love to hear from you.",tag:'Connect'},
          ].map((c,i)=>(
            <Link key={c.href} href={c.href}>
              <a ref={r} style={{...rv,transitionDelay:`${0.1*(i+1)}s`,background:'#fff',border:'1px solid #d9ccc0',padding:'2rem',textDecoration:'none',display:'block',transition:'box-shadow 0.25s,transform 0.2s'}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow='0 8px 32px rgba(124,28,28,0.12)';(e.currentTarget as HTMLElement).style.transform='translateY(-3px)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow='none';(e.currentTarget as HTMLElement).style.transform='translateY(0)';}}>
                <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.18em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'0.75rem'}}>{c.tag}</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.4rem',fontWeight:700,color:'#7B1C1C',marginBottom:'0.75rem'}}>{c.title}</h3>
                <p style={{fontFamily:"'Lora',serif",fontSize:'0.9rem',lineHeight:1.7,color:'#5a4a3e'}}>{c.desc}</p>
                <div style={{marginTop:'1.25rem',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.68rem',letterSpacing:'0.08em',color:'#7B1C1C'}}>Explore →</div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* GOALS */}
      <section style={{background:'#EDE4D3',padding:'5rem 2rem'}}>
        <div style={{maxWidth:1100,margin:'0 auto'}}>
          <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Our Goals</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'#1C1410',marginBottom:'3rem'}}>Unlocking the Future of<br/>Biomedical Engineering</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'2rem'}}>
            {[
              {icon:'📚',title:'Education',desc:'Resources and workshops to enhance technical skills in biomedical engineering.'},
              {icon:'🤝',title:'Collaboration',desc:'Interdisciplinary teamwork bridging engineering, health sciences, and related fields.'},
              {icon:'🔗',title:'Networking',desc:'Connect with industry professionals, alumni, and faculty for mentorship opportunities.'},
              {icon:'💡',title:'Innovation',desc:'Creative problem-solving through hands-on projects and competitions.'},
            ].map((g,i)=>(
              <div key={g.title} ref={r} style={{...rv,transitionDelay:`${0.1*(i+1)}s`,background:'#FAF7F2',border:'1px solid #d9ccc0',padding:'1.75rem'}}>
                <div style={{fontSize:'1.6rem',marginBottom:'0.75rem'}}>{g.icon}</div>
                <h3 style={{fontFamily:"'Playfair Display',serif",fontSize:'1.15rem',fontWeight:700,color:'#7B1C1C',marginBottom:'0.6rem'}}>{g.title}</h3>
                <p style={{fontFamily:"'Lora',serif",fontSize:'0.88rem',lineHeight:1.7,color:'#5a4a3e'}}>{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{background:'#1C1410',padding:'5rem 2rem',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div ref={r} style={{...rv,fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'1rem'}}>Open to All Students</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,2.8rem)',fontWeight:700,color:'#FAF7F2',marginBottom:'1.25rem'}}>Ready to Join BEC?</h2>
          <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.8,color:'#8a7a6e',marginBottom:'2rem'}}>Whether you're in engineering, health sciences, or just curious — there's a place for you here.</p>
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
