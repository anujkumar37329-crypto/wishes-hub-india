import { useRouter } from '@/hooks/useRouter';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AdSlot } from '@/components/AdSlot';
import { HomePage } from '@/pages/HomePage';
import { CategoryPage } from '@/pages/CategoryPage';
import { FestivalWishesPage } from '@/pages/FestivalWishesPage';
import { ShayariPage } from '@/pages/ShayariPage';
import { StylishNamesPage } from '@/pages/StylishNamesPage';
import { FancyTextPage } from '@/pages/FancyTextPage';
import { NicknameGeneratorPage } from '@/pages/NicknameGeneratorPage';
import { InstaBioPage } from '@/pages/InstaBioPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { DisclaimerPage } from '@/pages/DisclaimerPage';

function App() {
  const router = useRouter();
  const { path } = router;

  const renderPage = () => {
    if (path === '/') return <HomePage router={router} />;
    if (path === '/festival-wishes') return <FestivalWishesPage router={router} />;
    if (path === '/stylish-names') return <StylishNamesPage router={router} />;
    if (path === '/fancy-text') return <FancyTextPage router={router} />;
    if (path === '/nickname-generator') return <NicknameGeneratorPage router={router} />;
    if (path === '/insta-bio') return <InstaBioPage router={router} />;
    if (path === '/about') return <AboutPage router={router} />;
    if (path === '/contact') return <ContactPage router={router} />;
    if (path === '/privacy-policy') return <PrivacyPage router={router} />;
    if (path === '/disclaimer') return <DisclaimerPage router={router} />;

    if (path.startsWith('/category/')) {
      const slug = path.replace('/category/', '');
      return <CategoryPage router={router} slug={slug} />;
    }

    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-gray-500">Page not found</p>
        <button onClick={() => router.navigate('/')} className="mt-4 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-white">Go Home</button>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header router={router} />
      <main className="flex-1">{renderPage()}
        {path === '/' && (<div className="mx-auto max-w-5xl px-4 py-6"><AdSlot /></div>)}
      </main>
      <Footer router={router} />
    </div>
  );
}

export default App;
