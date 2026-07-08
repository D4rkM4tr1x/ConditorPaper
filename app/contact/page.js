import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Kontakt</p>
          <h1 className="mt-4 text-3xl font-semibold text-[#2f2a2a]">Wir freuen uns auf Ihre Nachricht</h1>
          <p className="mt-5 text-lg leading-8 text-[#6f6767]">
            Haben Sie Fragen zu unseren Produkten, der Bestellung oder individuellen Motiven? Schreiben Sie uns — wir helfen Ihnen gerne weiter.
          </p>

          <div className="mt-8 space-y-4 text-sm text-[#2f2a2a]">
            <div>
              <p className="font-semibold">E-Mail</p>
              <p className="mt-1 text-[#6f6767]">hello@conditorpaper.de</p>
            </div>
            <div>
              <p className="font-semibold">Telefon</p>
              <p className="mt-1 text-[#6f6767]">+49 152 123 456 78</p>
            </div>
            <div>
              <p className="font-semibold">Adresse</p>
              <p className="mt-1 text-[#6f6767]">Berlin, Deutschland</p>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)]">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">Name</label>
              <input className="w-full rounded-[16px] border border-[#e7d6d7] bg-[#fcf8f7] px-4 py-3 outline-none" placeholder="Ihr Name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">E-Mail</label>
              <input className="w-full rounded-[16px] border border-[#e7d6d7] bg-[#fcf8f7] px-4 py-3 outline-none" placeholder="ihre@email.de" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">Nachricht</label>
              <textarea className="min-h-[140px] w-full rounded-[16px] border border-[#e7d6d7] bg-[#fcf8f7] px-4 py-3 outline-none" placeholder="Wie können wir Ihnen helfen?" />
            </div>
            <button className="rounded-full bg-[#2f2a2a] px-6 py-3 font-semibold text-white transition hover:bg-[#1f1b1b]">
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
