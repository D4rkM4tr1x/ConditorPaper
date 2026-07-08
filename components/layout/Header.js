import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Startseite' },
  { href: '/catalog', label: 'Katalog' },
  { href: '/cart', label: 'Warenkorb' },
  { href: '/account', label: 'Konto' },
  { href: '/admin', label: 'Admin' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#f0e4e5] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] text-[#2f2a2a]">
          CONDITOR PAPER
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-[#6f6767] md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-[#b48a45]">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
