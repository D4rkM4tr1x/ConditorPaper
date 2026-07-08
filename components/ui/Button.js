export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition';
  const styles = {
    primary: 'bg-[#2f2a2a] text-white hover:bg-[#1f1b1b]',
    secondary: 'border border-[#e9d8d8] bg-white text-[#2f2a2a] hover:border-[#b48a45] hover:text-[#b48a45]',
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
