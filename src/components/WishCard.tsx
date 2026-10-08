import { Copy, Check, Share2 } from 'lucide-react';
import { useState } from 'react';

type Props = {
  text: string;
  index: number;
};

export function WishCard({ text, index }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(text + '\n\n— via Wishes Hub India');
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div className="group relative rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-lg hover:ring-2 hover:ring-amber-200">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-xs font-bold text-white">
          {index + 1}
        </span>
        <span className="text-xs font-medium text-gray-400">Wish #{index + 1}</span>
      </div>
      <p className="mb-4 text-[15px] leading-relaxed text-gray-800" style={{ lineHeight: 1.7 }}>
        {text}
      </p>
      <div className="flex gap-2">
        <button
          onClick={handleCopy}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
        <button
          onClick={handleWhatsApp}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-600 active:scale-95"
        >
          <Share2 className="h-4 w-4" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
