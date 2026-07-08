import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)] lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Über uns</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#2f2a2a] sm:text-4xl">
          Schönes Zuckerpapier für elegante Kuchen
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#6f6767]">
          Conditor Paper bietet hochwertige essbare Dekorationen für Kuchen, Torten und Desserts. Unsere Kollektionen verbinden moderne Ästhetik mit hoher Qualität und sorgen für ein besonders stimmiges Ergebnis.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] bg-[#fcf8f7] p-6">
            <h2 className="text-lg font-semibold text-[#2f2a2a]">Premium-Qualität</h2>
            <p className="mt-3 text-sm leading-7 text-[#6f6767]">Sicher, geschmacklich fein und ideal für kreative Dekorationen.</p>
          </div>
          <div className="rounded-[24px] bg-[#fcf8f7] p-6">
            <h2 className="text-lg font-semibold text-[#2f2a2a]">Moderne Designs</h2>
            <p className="mt-3 text-sm leading-7 text-[#6f6767]">Von Geburtstagsmotiven bis hin zu individuellen Sonderanfertigungen.</p>
          </div>
          <div className="rounded-[24px] bg-[#fcf8f7] p-6">
            <h2 className="text-lg font-semibold text-[#2f2a2a]">Schneller Versand</h2>
            <p className="mt-3 text-sm leading-7 text-[#6f6767]">Schnelle Lieferung und einfache Bestellung direkt online.</p>
          </div>
        </div>

        <div className="mt-10">
          <Link href="/catalog" className="rounded-full bg-[#2f2a2a] px-6 py-3 font-semibold text-white transition hover:bg-[#1f1b1b]">
            Zum Sortiment
          </Link>
        </div>
      </div>
    </main>
  );
}
