'use client';

import Link from 'next/link';
import { useStore } from '@/components/providers/StoreProvider';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, discount, total, promoCode, setPromoCode, applyPromo, removePromo, appliedPromo, message } = useStore();

  return (
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[32px] border border-[#f0e4e5] bg-white/80 p-8 shadow-[0_15px_40px_rgba(47,42,42,0.05)]">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Warenkorb</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#2f2a2a]">Ihre Auswahl</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Prüfen Sie Ihre ausgewählten Produkte und gehen Sie zur Kasse.</p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-[28px] border border-[#f0e4e5] bg-white p-6 shadow-[0_15px_45px_rgba(47,42,42,0.06)]">
            <div className="flex items-center justify-between border-b border-[#f0e4e5] pb-4">
              <h2 className="text-xl font-semibold text-[#2f2a2a]">Produkte</h2>
              <span className="text-sm text-[#6f6767]">{cart.length} Artikel</span>
            </div>
            <div className="mt-4 space-y-4">
              {cart.length ? cart.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-[24px] border border-[#f0e4e5] bg-[#fcf8f7] p-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-semibold text-[#2f2a2a]">{item.name}</h3>
                    <p className="text-sm text-[#6f6767]">{Number(item.price).toFixed(2)} € pro Stück</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                      className="w-16 rounded-full border border-[#e9d8d8] bg-white px-3 py-2 text-sm"
                    />
                    <span className="font-semibold text-[#2f2a2a]">{(Number(item.price) * item.quantity).toFixed(2)} €</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-sm text-[#b48a45]">Entfernen</button>
                  </div>
                </div>
              )) : <p className="text-sm text-[#6f6767]">Ihr Warenkorb ist aktuell leer.</p>}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#f0e4e5] bg-white p-6 shadow-[0_15px_45px_rgba(47,42,42,0.06)]">
            <h2 className="text-xl font-semibold text-[#2f2a2a]">Gesamt</h2>
            <div className="mt-4 space-y-3 text-sm text-[#6f6767]">
              <div className="flex justify-between"><span>Zwischensumme</span><span>{subtotal.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Rabatt</span><span>-{discount.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Versand</span><span>Kostenlos</span></div>
            </div>
            <div className="mt-6 border-t border-[#f0e4e5] pt-4">
              <div className="flex items-center justify-between text-lg font-semibold text-[#2f2a2a]">
                <span>Gesamt</span>
                <span>{total.toFixed(2)} €</span>
              </div>

              <div className="mt-4">
                <input
                  value={promoCode}
                  onChange={(event) => setPromoCode(event.target.value)}
                  placeholder="Promo-Code"
                  className="w-full rounded-full border border-[#e9d8d8] bg-[#fcf8f7] px-4 py-3 text-sm outline-none"
                />
                <div className="mt-3 flex gap-2">
                  <button onClick={() => applyPromo(promoCode)} className="rounded-full bg-[#2f2a2a] px-4 py-2 text-sm font-semibold text-white">Einlösen</button>
                  {appliedPromo ? <button onClick={removePromo} className="rounded-full border border-[#e7d6d7] px-4 py-2 text-sm">Entfernen</button> : null}
                </div>
                {appliedPromo ? <p className="mt-2 text-sm text-[#b48a45]">Aktiver Code: {appliedPromo.code}</p> : null}
              </div>

              <Link href="/checkout" className="mt-6 flex w-full items-center justify-center rounded-full bg-[#2f2a2a] px-6 py-3 font-semibold text-white transition hover:bg-[#1f1b1b]">
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
