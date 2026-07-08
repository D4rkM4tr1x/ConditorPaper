'use client';

import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setMessage(`Danke! Benachrichtigungen werden an ${email} gesendet.`);
    setEmail('');
  };

  return (
    <section className="mx-auto mt-8 max-w-7xl px-4 lg:px-8">
      <div className="rounded-[32px] border border-[#f0e4e5] bg-white p-8 shadow-[0_15px_40px_rgba(47,42,42,0.06)]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">E-Mail-Benachrichtigungen</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#2f2a2a]">Erhalten Sie Neuheiten und Sonderangebote</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6f6767]">Melden Sie sich an und wir informieren Sie über neue Kollektionen und exklusive Rabatte.</p>
          </div>
          <form onSubmit={submit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ihre E-Mail"
              className="w-full rounded-full border border-[#e9d8d8] bg-[#fcf8f7] px-4 py-3 text-sm outline-none"
            />
            <button className="rounded-full bg-[#2f2a2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1b1b]">
              Anmelden
            </button>
          </form>
        </div>
        {message ? <p className="mt-4 text-sm font-medium text-[#b48a45]">{message}</p> : null}
      </div>
    </section>
  );
}
