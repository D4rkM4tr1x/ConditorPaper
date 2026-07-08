import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4">
      <div className="rounded-3xl bg-white p-8 text-center shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">Seite nicht gefunden</h1>
        <p className="mt-3 text-slate-600">Die angeforderte Seite ist nicht verfügbar.</p>
        <Link href="/" className="mt-6 inline-block rounded-full bg-brand-600 px-6 py-3 font-semibold text-white">
          Zur Startseite
        </Link>
      </div>
    </main>
  );
}
