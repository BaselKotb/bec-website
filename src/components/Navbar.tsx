import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(250,247,242,0.96)' : 'rgba(250,247,242,0.85)',
      backdropFilter: 'blur(8px)',
      borderBottom: scrolled ? '1px solid #d9ccc0' : '1px solid transparent',
      transition: 'all 0.3s ease',
      height: 68,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem',
    }}>
      {/* Logo */}
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <img src="/assets/images/logo.png" alt="BEC Logo" style={{ height: 44, width: 'auto' }} />
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.08em', lineHeight: 1.4, color: '#7B1C1C', textTransform: 'uppercase' }}>
            Biomedical<br/>Engineering Club
          </div>
        </a>
      </Link>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
        {links.map(l => (
          <Link key={l.href} href={l.href}>
            <a style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.7rem', letterSpacing: '0.10em', textTransform: 'uppercase',
              color: isActive(l.href) ? '#7B1C1C' : '#8a7a6e',
              fontWeight: isActive(l.href) ? 500 : 400,
              textDecoration: 'none', transition: 'color 0.2s',
              borderBottom: isActive(l.href) ? '2px solid #C49A6C' : '2px solid transparent',
              paddingBottom: 2,
            }}>
              {l.label}
            </a>
          </Link>
        ))}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform"
          target="_blank" rel="noreferrer"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.68rem', letterSpacing: '0.10em', textTransform: 'uppercase',
            background: '#7B1C1C', color: '#fff', padding: '0.55rem 1.25rem',
            border: '2px solid #7B1C1C', transition: 'background 0.2s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { (e.target as HTMLElement).style.background = '#5a1212'; }}
          onMouseLeave={e => { (e.target as HTMLElement).style.background = '#7B1C1C'; }}
        >
          Join Now →
        </a>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#7B1C1C' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open
            ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
            : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          }
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0,
          background: '#FAF7F2', borderBottom: '1px solid #d9ccc0',
          padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem',
          zIndex: 99,
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}>
              <a onClick={() => setOpen(false)} style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.75rem', letterSpacing: '0.10em', textTransform: 'uppercase',
                color: isActive(l.href) ? '#7B1C1C' : '#8a7a6e', textDecoration: 'none',
              }}>
                {l.label}
              </a>
            </Link>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdJEMXIpcMl0fsVZn-dhFao9V-M6Ux7gBGypZP52esIaqzEwQ/viewform"
            target="_blank" rel="noreferrer"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.68rem',
              letterSpacing: '0.10em', textTransform: 'uppercase',
              background: '#7B1C1C', color: '#fff', padding: '0.75rem 1.5rem',
              textAlign: 'center', textDecoration: 'none', display: 'block',
            }}
          >
            Join Now →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
