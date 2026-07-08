import Link from 'next/link';

const faqs = [
  {
    question: 'Wie lange dauert die Lieferung?',
    answer: 'Die Lieferung erfolgt in der Regel innerhalb von 2–4 Werktagen nach Zahlungseingang.',
  },
  {
    question: 'Kann ich individuelle Motive bestellen?',
    answer: 'Ja, wir bieten individuelle Drucklösungen für besondere Anlässe und Kundenwünsche an.',
  },
  {
    question: 'Ist das Papier essbar?',
    answer: 'Ja, unsere Papierprodukte sind speziell für den Kontakt mit Lebensmitteln entwickelt und sicher verzehrbar.',
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)] lg:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">FAQ</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#2f2a2a]">Häufige Fragen</h1>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-[24px] border border-[#f0e4e5] bg-[#fcf8f7] p-6">
              <h2 className="text-lg font-semibold text-[#2f2a2a]">{item.question}</h2>
              <p className="mt-2 text-sm leading-7 text-[#6f6767]">{item.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/contact" className="rounded-full bg-[#2f2a2a] px-6 py-3 font-semibold text-white transition hover:bg-[#1f1b1b]">
            Kontaktieren Sie uns
          </Link>
        </div>
      </div>
    </main>
  );
}
