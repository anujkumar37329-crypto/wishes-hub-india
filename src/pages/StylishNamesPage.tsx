import { useState } from 'react';
import { generateStylishNames } from '@/data/stylishFonts';
import type { RouterHook } from '@/hooks/useRouter';
import { AdSlot } from '@/components/AdSlot';
import { Copy, Check, Share2, Type, Sparkles } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function StylishNamesPage({ router }: Props) {
  const { navigate } = router;
  const [input, setInput] = useState('');
  const [results, setResults] = useState<{ name: string; text: string }[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleGenerate = () => {
    const names = generateStylishNames(input);
    setResults(names);
  };

  const handleCopy = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  const handleWhatsApp = (text: string) => {
    const msg = encodeURIComponent(text + '\n\n— via Wishes Hub India');
    window.open(`https://wa.me/?text=${msg}`, '_blank');
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg">
        <div className="relative">
          <div className="flex items-center gap-2">
            <Type className="h-6 w-6 text-amber-400" />
            <h1 className="text-2xl font-bold">Stylish Name Generator</h1>
          </div>
          <p className="mt-1 text-sm text-white/70">
            Enter your name and get 10 different stylish font variations to copy and share
          </p>
        </div>
      </div>

      <div className="mt-6">
        <AdSlot />
      </div>

      {/* Input */}
      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
        <label className="mb-2 block text-sm font-semibold text-gray-700">Enter your name</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            placeholder="e.g. Rahul, Priya, Amit..."
            className="flex-1 rounded-xl border border-gray-200 px-4 py-3 text-base text-gray-900 outline-none transition-colors focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
          />
          <button
            onClick={handleGenerate}
            disabled={!input.trim()}
            className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 px-5 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Sparkles className="h-4 w-4" />
            Generate
          </button>
        </div>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-bold text-gray-900">Stylish Variations ({results.length})</h2>
          {results.map((result, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md hover:ring-2 hover:ring-amber-200"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">{result.name}</span>
              </div>
              <p className="mb-3 text-xl text-gray-900" style={{ wordBreak: 'break-word' }}>
                {result.text}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => handleCopy(result.text, idx)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 active:scale-95"
                >
                  {copiedIdx === idx ? (
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
                  onClick={() => handleWhatsApp(result.text)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-500 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600 active:scale-95"
                >
                  <Share2 className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && input.trim() === '' && (
        <div className="mt-6 rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
          <Type className="mx-auto h-10 w-10 text-gray-300" />
          <p className="mt-3 text-sm text-gray-400">
            Enter a name above and click Generate to see stylish variations
          </p>
        </div>
      )}

      <div className="mt-8">
        <AdSlot />
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate('/')}
          className="text-sm font-medium text-amber-600 hover:text-amber-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
