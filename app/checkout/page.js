'use client';

import { useState } from 'react';
import { useStore } from '@/components/providers/StoreProvider';

export default function CheckoutPage() {
  const { cart, subtotal, discount, total, paymentMethod, setPaymentMethod, setEmail, email, placeOrder, message } = useStore();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const submit = (event) => {
    event.preventDefault();
    placeOrder(email);
  };

  return (
    <main className="min-h-screen bg-transparent px-4 py-8 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[24px] border border-[#f0e4e5] bg-white p-4 shadow-[0_20px_60px_rgba(47,42,42,0.07)] sm:rounded-[32px] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#b48a45] sm:text-sm">Kasse</p>
        <h1 className="mt-2 text-2xl font-semibold text-[#2f2a2a] sm:mt-3 sm:text-3xl">Bestellung abschließen</h1>
        <p className="mt-2 text-sm text-slate-600 sm:mt-3 sm:text-base">Füllen Sie die Daten aus und wir senden Ihre Bestellung.</p>

        <div className="mt-6 grid gap-6 sm:mt-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#2f2a2a] sm:mb-2">Name</label>
              <input value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-[16px] border border-[#e9d8d8] px-4 py-2.5 text-sm outline-none sm:rounded-[20px] sm:py-3" placeholder="Geben Sie Ihren Namen ein" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#2f2a2a] sm:mb-2">Telefon</label>
              <input value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full rounded-[16px] border border-[#e9d8d8] px-4 py-2.5 text-sm outline-none sm:rounded-[20px] sm:py-3" placeholder="Telefonnummer eingeben" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#2f2a2a] sm:mb-2">E-Mail</label>
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-[16px] border border-[#e9d8d8] px-4 py-2.5 text-sm outline-none sm:rounded-[20px] sm:py-3" placeholder="ihre@email.de" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#2f2a2a] sm:mb-2">Lieferadresse</label>
              <textarea value={address} onChange={(event) => setAddress(event.target.value)} className="min-h-[100px] w-full rounded-[16px] border border-[#e9d8d8] px-4 py-2.5 text-sm outline-none sm:min-h-[120px] sm:rounded-[20px] sm:py-3" placeholder="Adresse angeben" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-semibold text-[#2f2a2a] sm:mb-2">Zahlungsmethode</label>
              <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)} className="w-full rounded-[16px] border border-[#e9d8d8] px-4 py-2.5 text-sm outline-none sm:rounded-[20px] sm:py-3">
                <option value="online">Online-Zahlung</option>
                <option value="invoice">Rechnung</option>
              </select>
            </div>
            <button className="w-full rounded-full bg-[#2f2a2a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1b1b] sm:w-auto sm:text-base">
              Bestellung bestätigen
            </button>
          </form>

          {/* Order summary */}
          <div className="rounded-[18px] bg-[#fcf8f7] p-4 sm:rounded-[28px] sm:p-6">
            <h2 className="text-lg font-semibold text-[#2f2a2a] sm:text-xl">Ihre Bestellung</h2>
            <div className="mt-4 space-y-2 text-sm text-[#6f6767] sm:space-y-3">
              {cart.length ? cart.map((item) => (
                <div key={item.id} className="flex justify-between gap-3">
                  <span className="flex-1 truncate">{item.name} × {item.quantity}</span>
                  <span className="shrink-0">{(Number(item.price) * item.quantity).toFixed(2)} €</span>
                </div>
              )) : <p>Ihr Warenkorb ist leer.</p>}
              <div className="flex justify-between"><span>Zwischensumme</span><span>{subtotal.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Rabatt</span><span>-{discount.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Versand</span><span>0 €</span></div>
            </div>
            <div className="mt-4 border-t border-[#e9d8d8] pt-4 text-base font-semibold text-[#2f2a2a] sm:mt-6 sm:text-lg">
              Gesamt: {total.toFixed(2)} €
            </div>
            {message ? <p className="mt-3 text-sm text-[#b48a45]">{message}</p> : null}
          </div>
        </div>
      </div>
    </main>
  );
}
