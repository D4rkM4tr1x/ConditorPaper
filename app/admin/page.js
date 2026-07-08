export default function AdminPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Admin</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#2f2a2a]">Admin-Bereich</h1>
        <p className="mt-3 text-slate-600">Verwalten Sie Produkte, Kategorien, Bestellungen und Bewertungen.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[24px] border border-[#f0e4e5] bg-[#fcf8f7] p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Produkte</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Hinzufügen und Bearbeiten von Produktkarten.</p>
          </div>
          <div className="rounded-[24px] border border-[#f0e4e5] bg-[#fcf8f7] p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Bestellungen</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Anzeigen und Ändern von Status.</p>
          </div>
          <div className="rounded-[24px] border border-[#f0e4e5] bg-[#fcf8f7] p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Bewertungen</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Moderation von Bewertungen und Rating.</p>
          </div>
          <div className="rounded-[24px] border border-[#f0e4e5] bg-[#fcf8f7] p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Gutscheine</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Erstellen von Rabatten und Aktionen.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
