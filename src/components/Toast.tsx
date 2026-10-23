import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#111111] text-white px-4 py-3.5 rounded-2xl shadow-2xl border border-[#333] flex items-center gap-3 animate-fade-in"
    >
      <CheckCircle2 className="w-5 h-5 text-[#C8A27A] shrink-0" />
      <p className="text-xs sm:text-sm font-medium text-white flex-1">{message}</p>
      <button
        onClick={onClose}
        aria-label="Dismiss message"
        className="text-white/60 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
