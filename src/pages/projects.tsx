import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const rv: React.CSSProperties = { opacity:0, transform:'translateY(24px)', transition:'opacity 0.7s ease, transform 0.7s ease' };
const label: React.CSSProperties = { fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', display:'flex', alignItems:'center', gap:'0.6rem', marginBottom:'0.75rem' };
const labelLine: React.CSSProperties = { width:20, height:1, background:'#C49A6C', display:'inline-block', flexShrink:0 };

export default function ProjectsPage() {
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

      {/* PAGE HERO */}
      <div style={{ background:'linear-gradient(135deg,#7B1C1C 0%,#5a1212 100%)', padding:'7rem 2rem 4rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, backgroundImage:'radial-gradient(circle at 20% 80%,rgba(196,154,108,0.15) 0%,transparent 50%),radial-gradient(circle at 80% 20%,rgba(196,154,108,0.10) 0%,transparent 50%)' }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ fontFamily:"'IBM Plex Mono',monospace", fontSize:'0.65rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#C49A6C', marginBottom:'0.75rem' }}>
            BEC · Concordia University
          </div>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.5rem,6vw,4rem)', fontWeight:700, color:'#fff' }}>
            Our Projects
          </h1>
        </div>
      </div>

      {/* AI DERMATOLOGY — FEATURED */}
      <section style={{ maxWidth:1100, margin:'0 auto', padding:'5rem 2rem' }}>
        <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Featured Project · Active</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          <div>
            <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'#7B1C1C',lineHeight:1.1,marginBottom:'1.25rem'}}>
              AI Dermatology<br/>Diagnostic Tool
            </h2>
            <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.85,color:'#5a4a3e',marginBottom:'1.5rem'}}>
              A clinical decision-support system designed to assist healthcare professionals in making faster and more accurate preliminary dermatological diagnoses. This project combines a powerful visual analysis CNN with a symptom analysis engine to provide comprehensive, evidence-based differential diagnosis, covering over 320 conditions with a CNN trained on 23 common visual classes.
            </p>
            <div ref={r} style={{...rv,transitionDelay:'0.3s',display:'flex',gap:'2rem',marginBottom:'2rem',flexWrap:'wrap'}}>
              {[['320+','Conditions Covered'],['23','CNN Visual Classes'],['Active','Status']].map(([n,l])=>(
                <div key={l}>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.8rem',fontWeight:700,color:'#7B1C1C'}}>{n}</div>
                  <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.15em',textTransform:'uppercase',color:'#8a7a6e'}}>{l}</div>
                </div>
              ))}
            </div>
            <div ref={r} style={{...rv,transitionDelay:'0.4s',display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              <a href="https://github.com/Concordia-Biomedical-Engineering-Club/ai-dermatology-tool" target="_blank" rel="noreferrer"
                style={{background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.7rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.8rem 1.5rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
                View on GitHub →
              </a>
              <a href="mailto:BEC@csu.qc.ca?subject=AI Dermatology Tool"
                style={{background:'transparent',color:'#7B1C1C',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.7rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.8rem 1.5rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
                Get Involved
              </a>
            </div>
          </div>
          <div ref={r} style={{...rv,transitionDelay:'0.2s',position:'relative',aspectRatio:'4/3',overflow:'hidden',border:'1px solid #d9ccc0'}}>
            <img src="/assets/images/dermatology.jpg" alt="AI Dermatology Tool" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            <div style={{position:'absolute',top:'1rem',left:'1rem',background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.12em',textTransform:'uppercase',padding:'0.3rem 0.7rem'}}>
              Active
            </div>
          </div>
        </div>
      </section>

      <div style={{borderTop:'1px solid #d9ccc0',margin:'0 2rem'}}/>

      {/* TRUE NORTH COMPETITION */}
      <section style={{ maxWidth:1100, margin:'0 auto', padding:'5rem 2rem' }}>
        <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Competition · 2025–2026</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'start' }}>
          <div>
            <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,3rem)',fontWeight:700,color:'#7B1C1C',lineHeight:1.1,marginBottom:'1.25rem'}}>
              True North<br/>Biomedical Competition
            </h2>
            <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.85,color:'#5a4a3e',marginBottom:'2rem'}}>
              BEC is competing in the True North Biomedical Competition, a prestigious intercollegiate challenge that tasks student teams with designing innovative biomedical engineering solutions. Our team is working to develop a cutting-edge solution that addresses real clinical needs — representing Concordia University with ambition and rigour.
            </p>
            <div ref={r} style={{...rv,transitionDelay:'0.3s',background:'#EDE4D3',border:'1px solid #d9ccc0',padding:'1.5rem'}}>
              <div style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.18em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'0.75rem'}}>Competition Details</div>
              <div style={{display:'flex',flexDirection:'column',gap:'0.6rem'}}>
                {[['Event','True North Biomedical Competition'],['Team','Concordia BEC'],['Status','Competing'],['Contact','BEC@csu.qc.ca']].map(([k,v])=>(
                  <div key={k} style={{display:'flex',gap:'1rem'}}>
                    <span style={{fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.68rem',color:'#8a7a6e',minWidth:70}}>{k}</span>
                    <span style={{fontFamily:"'Lora',serif",fontSize:'0.9rem',color:'#1C1410'}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div ref={r} style={{...rv,transitionDelay:'0.15s',position:'relative',aspectRatio:'4/3',overflow:'hidden',border:'1px solid #d9ccc0',background:'#3a47b0',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img src="/assets/images/truenorth_logo.png" alt="True North Biomedical Competition" style={{width:'90%',height:'90%',objectFit:'contain',padding:'1rem'}}/>
            <div style={{position:'absolute',top:'1rem',left:'1rem',background:'#C49A6C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.6rem',letterSpacing:'0.12em',textTransform:'uppercase',padding:'0.3rem 0.7rem'}}>
              2025–2026
            </div>
          </div>
        </div>
      </section>

      <div style={{borderTop:'1px solid #d9ccc0',margin:'0 2rem'}}/>

      {/* RESEARCH OPPORTUNITIES */}
      <section style={{ maxWidth:1100, margin:'0 auto', padding:'5rem 2rem' }}>
        <div ref={r} style={{...rv,...label}}><span style={labelLine}/>Ongoing</div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          <div ref={r} style={{...rv,position:'relative',aspectRatio:'4/3',overflow:'hidden',border:'1px solid #d9ccc0'}}>
            <img src="/assets/images/product2.jpg" alt="Student Research" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
          </div>
          <div>
            <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,3.5vw,2.5rem)',fontWeight:700,color:'#7B1C1C',lineHeight:1.1,marginBottom:'1.25rem'}}>
              Student Research<br/>Opportunities
            </h2>
            <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.85,color:'#5a4a3e',marginBottom:'2rem'}}>
              Get involved in cutting-edge research projects with faculty mentors. Our club connects students with research opportunities in medical imaging, biosensors, rehabilitation engineering, and computational biology. Build your portfolio while contributing to meaningful healthcare innovations.
            </p>
            <div ref={r} style={{...rv,transitionDelay:'0.3s'}}>
              <a href="mailto:BEC@csu.qc.ca?subject=Research Opportunities"
                style={{background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.7rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.8rem 1.5rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
                Get Involved →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROPOSE */}
      <section style={{background:'#EDE4D3',padding:'5rem 2rem',textAlign:'center'}}>
        <div style={{maxWidth:600,margin:'0 auto'}}>
          <div ref={r} style={{...rv,fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.65rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'#C49A6C',marginBottom:'1rem'}}>Have an Idea?</div>
          <h2 ref={r} style={{...rv,transitionDelay:'0.1s',fontFamily:"'Playfair Display',serif",fontSize:'clamp(2rem,4vw,2.8rem)',fontWeight:700,color:'#1C1410',marginBottom:'1.25rem'}}>Propose a Project</h2>
          <p ref={r} style={{...rv,transitionDelay:'0.2s',fontFamily:"'Lora',serif",fontSize:'1rem',lineHeight:1.8,color:'#5a4a3e',marginBottom:'2rem'}}>
            Got an idea that bridges engineering and healthcare? Join BEC and pitch it. We provide mentorship, resources, and a collaborative team to bring your vision to life.
          </p>
          <div ref={r} style={{...rv,transitionDelay:'0.3s',display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform" target="_blank" rel="noreferrer"
              style={{background:'#7B1C1C',color:'#fff',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.9rem 2rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
              Join & Propose →
            </a>
            <a href="mailto:BEC@csu.qc.ca?subject=Project Idea"
              style={{background:'transparent',color:'#7B1C1C',fontFamily:"'IBM Plex Mono',monospace",fontSize:'0.72rem',letterSpacing:'0.10em',textTransform:'uppercase',padding:'0.9rem 2rem',border:'2px solid #7B1C1C',textDecoration:'none',display:'inline-block'}}>
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
