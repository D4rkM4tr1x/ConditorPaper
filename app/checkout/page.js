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
    <main className="min-h-screen bg-transparent px-4 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_20px_60px_rgba(47,42,42,0.07)]">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">Kasse</p>
        <h1 className="mt-3 text-3xl font-semibold text-[#2f2a2a]">Bestellung abschließen</h1>
        <p className="mt-3 text-slate-600">Füllen Sie die Daten aus und wir senden Ihre Bestellung.</p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">Name</label>
              <input value={name} onChange={(event) => setName(event.target.value)} className="w-full rounded-[20px] border border-[#e9d8d8] px-4 py-3 outline-none ring-0" placeholder="Geben Sie Ihren Namen ein" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">Telefon</label>
              <input value={phone} onChange={(event) => setPhone(event.target.value)} className="w-full rounded-[20px] border border-[#e9d8d8] px-4 py-3 outline-none ring-0" placeholder="Telefonnummer eingeben" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">E-Mail</label>
              <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-[20px] border border-[#e9d8d8] px-4 py-3 outline-none ring-0" placeholder="ihre@email.de" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">Lieferadresse</label>
              <textarea value={address} onChange={(event) => setAddress(event.target.value)} className="min-h-[120px] w-full rounded-[20px] border border-[#e9d8d8] px-4 py-3 outline-none ring-0" placeholder="Adresse angeben" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#2f2a2a]">Zahlungsmethode</label>
              <select value={paymentMethod} onChange={(event) => setPaymentMethod(event.target.value)} className="w-full rounded-[20px] border border-[#e9d8d8] px-4 py-3 outline-none ring-0">
                <option value="online">Online-Zahlung</option>
                <option value="invoice">Rechnung</option>
              </select>
            </div>
            <button className="rounded-full bg-[#2f2a2a] px-6 py-3 font-semibold text-white transition hover:bg-[#1f1b1b]">
              Bestellung bestätigen
            </button>
          </form>

          <div className="rounded-[28px] bg-[#fcf8f7] p-6">
            <h2 className="text-xl font-semibold text-[#2f2a2a]">Ihre Bestellung</h2>
            <div className="mt-4 space-y-3 text-sm text-[#6f6767]">
              {cart.length ? cart.map((item) => (
                <div key={item.id} className="flex justify-between gap-3"><span>{item.name} × {item.quantity}</span><span>{(Number(item.price) * item.quantity).toFixed(2)} €</span></div>
              )) : <p>Ihr Warenkorb ist leer.</p>}
              <div className="flex justify-between"><span>Zwischensumme</span><span>{subtotal.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Rabatt</span><span>-{discount.toFixed(2)} €</span></div>
              <div className="flex justify-between"><span>Versand</span><span>0 €</span></div>
            </div>
            <div className="mt-6 border-t border-[#e9d8d8] pt-4 text-lg font-semibold text-[#2f2a2a]">
              Gesamt: {total.toFixed(2)} €
            </div>
            {message ? <p className="mt-3 text-sm text-[#b48a45]">{message}</p> : null}
          </div>
        </div>
      </div>
    </main>
  );
}
