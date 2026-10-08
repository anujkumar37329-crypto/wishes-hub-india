import { useState } from 'react';
import { Home, Sparkles, Heart, Type, Menu, X } from 'lucide-react';
import type { RouterHook } from '@/hooks/useRouter';

type Props = {
  router: RouterHook;
};

const navItems = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Festival Wishes', path: '/festival-wishes', icon: Sparkles },
  { label: 'Shayari', path: '/shayari', icon: Heart },
  { label: 'Stylish Names', path: '/stylish-names', icon: Type },
];

export function Header({ router }: Props) {
  const [open, setOpen] = useState(false);
  const { path, navigate } = router;

  const go = (to: string) => {
    navigate(to);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex h-16 items-center justify-between">
          <button onClick={() => go('/')} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-rose-500 to-fuchsia-500 text-lg font-bold text-white shadow-md">
              W
            </div>
            <div className="text-left">
              <span className="block text-base font-bold leading-tight text-gray-900">
                Wishes Hub
              </span>
              <span className="block text-[10px] font-medium leading-tight text-amber-600">
                India
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = path === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-50"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = path === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => go(item.path)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-amber-50 text-amber-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
