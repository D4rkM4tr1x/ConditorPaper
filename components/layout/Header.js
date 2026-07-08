'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/catalog', label: 'Katalog' },
  { href: '/cart', label: 'Warenkorb' },
  { href: '/account', label: 'Konto' },
  { href: '/admin', label: 'Admin' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0e4e5] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.2em] text-[#2f2a2a]"
          onClick={() => setMenuOpen(false)}
        >
          CONDITOR PAPER
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-medium text-[#6f6767] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#b48a45]">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Burger button */}
        <button
          className="flex flex-col justify-center gap-[5px] p-2 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-[2px] w-6 bg-[#2f2a2a] transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#2f2a2a] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#2f2a2a] transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? 'max-h-80' : 'max-h-0'}`}
      >
        <nav className="flex flex-col border-t border-[#f0e4e5] bg-white px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#f0e4e5] py-3 text-sm font-medium text-[#6f6767] transition last:border-b-0 hover:text-[#b48a45]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
