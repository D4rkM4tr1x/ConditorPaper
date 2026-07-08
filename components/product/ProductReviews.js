'use client';

import { useEffect, useState } from 'react';

function formatStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

export default function ProductReviews({ product }) {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: '', comment: '', rating: 5 });

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(`reviews:${product.slug}`);
      if (stored) {
        setReviews(JSON.parse(stored));
      }
    } catch {
      // Ignore malformed storage values.
    }
  }, [product.slug]);

  const submitReview = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;

    const nextReview = {
      id: `${product.slug}-${Date.now()}`,
      name: form.name.trim(),
      comment: form.comment.trim(),
      rating: Number(form.rating),
      createdAt: new Date().toLocaleDateString('de-DE'),
    };

    const nextReviews = [nextReview, ...reviews];
    setReviews(nextReviews);
    window.localStorage.setItem(`reviews:${product.slug}`, JSON.stringify(nextReviews));
    setForm({ name: '', comment: '', rating: 5 });
  };

  const average = reviews.length
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <section className="mt-10 rounded-[28px] border border-[#f0e4e5] bg-[#fcf8f7] p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-[#2f2a2a]">Bewertungen und Rezensionen</h2>
          <p className="mt-2 text-sm leading-7 text-[#6f6767]">Teilen Sie Ihre Erfahrung mit anderen Kunden.</p>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-sm text-[#2f2a2a] shadow-sm">
          Ø {average} / 5 · {reviews.length} Bewertungen
        </div>
      </div>

      <form onSubmit={submitReview} className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto]">
        <input
          value={form.name}
          onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
          placeholder="Ihr Name"
          className="rounded-full border border-[#e9d8d8] bg-white px-4 py-3 text-sm outline-none"
        />
        <select
          value={form.rating}
          onChange={(event) => setForm((prev) => ({ ...prev, rating: Number(event.target.value) }))}
          className="rounded-full border border-[#e9d8d8] bg-white px-4 py-3 text-sm outline-none"
        >
          <option value="5">5 Sterne</option>
          <option value="4">4 Sterne</option>
          <option value="3">3 Sterne</option>
          <option value="2">2 Sterne</option>
          <option value="1">1 Stern</option>
        </select>
        <button className="rounded-full bg-[#2f2a2a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f1b1b]">
          Bewertung senden
        </button>
        <textarea
          value={form.comment}
          onChange={(event) => setForm((prev) => ({ ...prev, comment: event.target.value }))}
          placeholder="Ihre Rezension..."
          className="md:col-span-3 min-h-[100px] rounded-[20px] border border-[#e9d8d8] bg-white px-4 py-3 text-sm outline-none"
        />
      </form>

      <div className="mt-8 space-y-4">
        {reviews.length ? (
          reviews.map((review) => (
            <div key={review.id} className="rounded-[24px] border border-[#e9d8d8] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-[#2f2a2a]">{review.name}</p>
                <span className="text-sm text-[#b48a45]">{formatStars(review.rating)}</span>
              </div>
              <p className="mt-2 text-sm leading-7 text-[#6f6767]">{review.comment}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#6f6767]">{review.createdAt}</p>
            </div>
          ))
        ) : (
          <p className="rounded-[24px] border border-dashed border-[#e9d8d8] bg-white p-6 text-sm text-[#6f6767]">
            Noch keine Bewertungen. Seien Sie die erste Person, die diese Kollektion bewertet.
          </p>
        )}
      </div>
    </section>
  );
}
