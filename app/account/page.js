export default function AccountPage() {
  return (
    <main className="min-h-screen bg-transparent px-4 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[24px] border border-[#f0e4e5] bg-white p-4 shadow-[0_20px_60px_rgba(47,42,42,0.07)] sm:rounded-[32px] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b48a45] sm:text-sm">Konto</p>
        <h1 className="mt-2 text-2xl font-semibold text-[#2f2a2a] sm:mt-3 sm:text-3xl">Mein Konto</h1>
        <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">Verwalten Sie Bestellungen, Favoriten und persönliche Daten.</p>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[18px] border border-[#f0e4e5] bg-[#fcf8f7] p-4 sm:rounded-[24px] sm:p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Profil</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Name, E-Mail, Telefon.</p>
          </div>
          <div className="rounded-[18px] border border-[#f0e4e5] bg-[#fcf8f7] p-4 sm:rounded-[24px] sm:p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Bestellungen</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Kaufhistorie und Status.</p>
          </div>
          <div className="rounded-[18px] border border-[#f0e4e5] bg-[#fcf8f7] p-4 sm:rounded-[24px] sm:p-5">
            <h2 className="font-semibold text-[#2f2a2a]">Favoriten</h2>
            <p className="mt-2 text-sm text-[#6f6767]">Liste Ihrer Lieblingsprodukte.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
