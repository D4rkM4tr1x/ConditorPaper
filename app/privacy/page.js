import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)] lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Datenschutz</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#2f2a2a]">Datenschutz und Cookies</h1>
        <p className="mt-6 text-lg leading-8 text-[#6f6767]">
          Wir behandeln Ihre Daten vertraulich und nur im Rahmen der gesetzlichen Bestimmungen. Ihre Informationen werden ausschließlich zur Bearbeitung Ihrer Bestellung und zur Verbesserung unseres Services verwendet.
        </p>

        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-[#2f2a2a]">1. Welche Daten wir sammeln</h2>
            <p className="mt-2 text-sm leading-7 text-[#6f6767]">Name, E-Mail, Adresse, Telefonnummer und Bestellinformationen.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#2f2a2a]">2. Verwendung der Daten</h2>
            <p className="mt-2 text-sm leading-7 text-[#6f6767]">Zur Verarbeitung von Bestellungen, Kommunikation und Serviceverbesserung.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-[#2f2a2a]">3. Ihre Rechte</h2>
            <p className="mt-2 text-sm leading-7 text-[#6f6767]">Sie können jederzeit Auskunft über Ihre gespeicherten Daten verlangen.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/contact" className="rounded-full border border-[#e7d6d7] bg-white px-6 py-3 font-semibold text-[#2f2a2a] transition hover:border-[#c8a96b] hover:text-[#b48a45]">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </main>
  );
}
