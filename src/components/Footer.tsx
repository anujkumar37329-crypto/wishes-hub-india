import { Mail, Info, Shield, FileText, Heart } from 'lucide-react';
import type { RouterHook } from '@/hooks/useRouter';

type Props = {
  router: RouterHook;
};

const footerLinks = [
  { label: 'About Us', path: '/about', icon: Info },
  { label: 'Contact Us', path: '/contact', icon: Mail },
  { label: 'Privacy Policy', path: '/privacy-policy', icon: Shield },
  { label: 'Disclaimer', path: '/disclaimer', icon: FileText },
];

export function Footer({ router }: Props) {
  const { navigate } = router;

  return (
    <footer className="mt-12 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 via-rose-500 to-fuchsia-500 text-sm font-bold text-white">
                W
              </div>
              <span className="text-sm font-bold text-gray-900">Wishes Hub India</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your one-stop destination for heartfelt wishes, shayari, and stylish name
              generators. Share love and joy with every message.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.path}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-amber-600 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold text-gray-900">Categories</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('/festival-wishes')} className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                  Festival Wishes
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/shayari')} className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                  Shayari
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/stylish-names')} className="text-sm text-gray-500 hover:text-amber-600 transition-colors">
                  Stylish Names
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Wishes Hub India. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-gray-400">
            Made with <Heart className="h-3 w-3 fill-rose-500 text-rose-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
