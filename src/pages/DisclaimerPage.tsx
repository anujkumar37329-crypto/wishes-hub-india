import type { RouterHook } from '@/hooks/useRouter';
import { ArrowLeft } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function DisclaimerPage({ router }: Props) {
  const { navigate } = router;

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <button
        onClick={() => navigate('/')}
        className="mb-4 flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>

      <h1 className="text-2xl font-bold text-gray-900">Disclaimer</h1>
      <p className="mt-1 text-xs text-gray-400">Last updated: October 2026</p>

      <div className="mt-5 space-y-5 text-sm leading-relaxed text-gray-600" style={{ lineHeight: 1.8 }}>
        <section>
          <h2 className="text-base font-bold text-gray-900">General Information</h2>
          <p className="mt-1">
            The content on Wishes Hub India is provided for general informational and entertainment
            purposes only. All wishes, shayari, and messages are curated to spread joy and positivity.
            We make no representations or warranties of any kind regarding the accuracy or
            completeness of the content.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Content Ownership</h2>
          <p className="mt-1">
            The wishes and shayari published on this website are a collection from various sources
            and original creations. If you believe any content on this site infringes your
            copyright, please contact us at aktunoteshelp@gmail.com and we will address it promptly.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">External Links</h2>
          <p className="mt-1">
            Our website may contain links to external websites such as WhatsApp, Google, and other
            third-party services. We do not control and are not responsible for the content,
            privacy policies, or practices of these external sites.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Advertisements</h2>
          <p className="mt-1">
            This website displays advertisements served by Google AdSense and other advertising
            partners. We do not endorse any products or services advertised on our website. The
            ads are served based on your browsing history and interests as determined by the
            advertising partners.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Stylish Name Generator</h2>
          <p className="mt-1">
            The Stylish Name Generator tool uses Unicode characters to create decorative text
            variations. Some fonts may not display correctly on all devices or platforms. We are
            not responsible for any issues arising from the use of generated text on external
            platforms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Limitation of Liability</h2>
          <p className="mt-1">
            In no event shall Wishes Hub India be liable for any loss or damage arising from the
            use of this website or its content. Your use of the website is at your sole discretion
            and risk.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Contact Us</h2>
          <p className="mt-1">
            If you have any questions about this Disclaimer, please contact us at
            aktunoteshelp@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
