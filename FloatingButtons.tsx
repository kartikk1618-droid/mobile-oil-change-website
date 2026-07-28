import { useEffect, useState } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`flex h-11 w-11 items-center justify-center rounded-full bg-navy-700 text-white shadow-card ring-1 ring-white/10 transition-all hover:bg-navy-600 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp size={20} />
      </button>

      {/* WhatsApp */}
      <a
        href="https://wa.me/18005551234"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-105"
      >
        <MessageCircle size={22} />
      </a>

      {/* Call now */}
      <a
        href="tel:+18005551234"
        aria-label="Call now"
        className="group flex h-12 items-center gap-2 rounded-full bg-orange-500 pl-3 pr-5 text-white shadow-glow transition hover:bg-orange-600"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring" />
          <Phone size={18} className="relative" />
        </span>
        <span className="text-sm font-semibold">Call Now</span>
      </a>
    </div>
  );
}
