export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b48a45]">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-semibold text-[#2f2a2a] sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-lg leading-8 text-[#6f6767]">{subtitle}</p> : null}
    </div>
  );
}
