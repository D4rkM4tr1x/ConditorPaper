export default function Footer() {
  return (
    <footer className="border-t border-[#f0e4e5] bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[#6f6767] lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Conditor Paper. Alle Rechte vorbehalten.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/about" className="transition hover:text-[#b48a45]">Über uns</a>
          <a href="/contact" className="transition hover:text-[#b48a45]">Kontakt</a>
          <a href="/privacy" className="transition hover:text-[#b48a45]">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
