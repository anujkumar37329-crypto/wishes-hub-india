import type { RouterHook } from '@/hooks/useRouter';
import { ArrowLeft } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function PrivacyPage({ router }: Props) {
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

      <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-1 text-xs text-gray-400">Last updated: October 2026</p>

      <div className="mt-5 space-y-5 text-sm leading-relaxed text-gray-600" style={{ lineHeight: 1.8 }}>
        <section>
          <h2 className="text-base font-bold text-gray-900">Introduction</h2>
          <p className="mt-1">
            At Wishes Hub India, we respect your privacy and are committed to protecting your
            personal data. This Privacy Policy explains how we collect, use, and safeguard
            information when you use our website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Information We Collect</h2>
          <p className="mt-1">
            We do not require you to create an account or provide personal information to use our
            website. We may collect non-personal data such as browser type, device information,
            and usage patterns through cookies and analytics tools to improve our service.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Cookies and Tracking</h2>
          <p className="mt-1">
            We use cookies to enhance your browsing experience and to understand how visitors
            interact with our content. Third-party vendors, including Google, may use cookies to
            serve ads based on your prior visits to our website or other websites.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Google AdSense</h2>
          <p className="mt-1">
            This website uses Google AdSense to display advertisements. Google may use cookies to
            serve ads based on your interests. You can opt out of personalized advertising by
            visiting Google Ads Settings at adssettings.google.com.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Third-Party Links</h2>
          <p className="mt-1">
            Our website may contain links to external sites such as WhatsApp. We are not
            responsible for the privacy practices or content of these third-party websites. We
            encourage you to review their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Data Security</h2>
          <p className="mt-1">
            We take reasonable measures to protect your information. However, no method of
            transmission over the internet is completely secure. We strive to use commercially
            acceptable means to protect your data.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Children's Privacy</h2>
          <p className="mt-1">
            Our website is suitable for all ages and does not knowingly collect personal
            information from children under 13 years of age.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Changes to This Policy</h2>
          <p className="mt-1">
            We may update this Privacy Policy from time to time. Any changes will be posted on
            this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-900">Contact Us</h2>
          <p className="mt-1">
            If you have any questions about this Privacy Policy, please contact us at
            aktunoteshelp@gmail.com.
          </p>
        </section>
      </div>
    </div>
  );
}
