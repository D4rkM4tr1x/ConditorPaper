'use client';

import Link from 'next/link';
import { useStore } from '@/components/providers/StoreProvider';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, discount, total, promoCode, setPromoCode, applyPromo, removePromo, appliedPromo, message } = useStore();

  return (
    <main className="min-h-screen bg-transparent px-4 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[24px] border border-[#f0e4e5] bg-white/80 p-4 shadow-[0_15px_40px_rgba(47,42,42,0.05)] sm:rounded-[32px] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b48a45] sm:text-sm">Warenkorb</p>
          <h1 className="mt-2 text-2xl font-semibold text-[#2f2a2a] sm:mt-3 sm:text-3xl">Ihre Auswahl</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:mt-3 sm:text-base">Prüfen Sie Ihre ausgewählten Produkte und gehen Sie zur Kasse.</p>
        </div>

        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[2fr_1fr]">
          {/* Product list */}
          <div className="rounded-[24px] border border-[#f0e4e5] bg-white p-4 shadow-[0_15px_45px_rgba(47,42,42,0.06)] sm:rounded-[28px] sm:p-6">
            <div className="flex items-center justify-between border-b border-[#f0e4e5] pb-3 sm:pb-4">
              <h2 className="text-lg font-semibold text-[#2f2a2a] sm:text-xl">Produkte</h2>
              <span className="text-xs text-[#6f6767] sm:text-sm">{cart.length} Artikel</span>
            </div>
            <div className="mt-4 space-y-3 sm:space-y-4">
              {cart.length ? cart.map((item) => (
                <div key={item.id} className="flex flex-col gap-3 rounded-[18px] border border-[#f0e4e5] bg-[#fcf8f7] p-3 sm:rounded-[24px] sm:p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold text-[#2f2a2a]">{item.name}</h3>
                    <p className="mt-0.5 text-sm text-[#6f6767]">{Number(item.price).toFixed(2)} € pro Stück</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                      className="w-14 rounded-full border border-[#e9d8d8] bg-white px-2 py-1.5 text-sm sm:w-16 sm:px-3 sm:py-2"
                    />
                    <span className="font-semibold text-[#2f2a2a]">{(Number(item.price) * item.quantity).toFixed(2)} €</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm text-[#b48a45]">Entfernen</button>
                  </div>
                </div>
              )) : <p className="text-sm text-[#6f6767]">Ihr Warenkorb ist aktuell leer.</p>}
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-[24px] border border-[#f0e4e5] bg-white p-4 shadow-[0_15px_45px_rgba(47,42,42,0.06)] sm:rounded-[28px] sm:p-6">
            <h2 className="text-lg font-semibold text-[#2f2a2a] sm:text-xl">Gesamt</h2>
            <div className="mt-4 space-y-3 text-sm text-[#6f6767]">
              <div className="flex justify-between"><span>Zwischensumme</span><span>{subtotal.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Rabatt</span><span>-{discount.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Versand</span><span>Kostenlos</span></div>
            </div>
            <div className="mt-4 border-t border-[#f0e4e5] pt-4 sm:mt-6">
              <div className="flex items-center justify-between text-base font-semibold text-[#2f2a2a] sm:text-lg">
                <span>Gesamt</span>
                <span>{total.toFixed(2)} €</span>
              </div>

              <div className="mt-4">
                <input
                  value={promoCode}
                  onChange={(event) => setPromoCode(event.target.value)}
                  placeholder="Promo-Code"
                  className="w-full rounded-full border border-[#e9d8d8] bg-[#fcf8f7] px-4 py-2.5 text-sm outline-none sm:py-3"
                />
                <div className="mt-2 flex gap-2 sm:mt-3">
                  <button onClick={() => applyPromo(promoCode)} className="rounded-full bg-[#2f2a2a] px-4 py-2 text-sm font-semibold text-white">Einlösen</button>
                  {appliedPromo ? <button onClick={removePromo} className="rounded-full border border-[#e7d6d7] px-4 py-2 text-sm">Entfernen</button> : null}
                </div>
                {appliedPromo ? <p className="mt-2 text-sm text-[#b48a45]">Aktiver Code: {appliedPromo.code}</p> : null}
              </div>

              <Link href="/checkout" className="mt-4 flex w-full items-center justify-center rounded-full bg-[#2f2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1b1b] sm:mt-6 sm:text-base">
                Zur Kasse
              </Link>
              {message ? <p className="mt-3 text-sm text-[#b48a45]">{message}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
