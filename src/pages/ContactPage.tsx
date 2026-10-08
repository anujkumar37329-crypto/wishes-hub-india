import type { RouterHook } from '@/hooks/useRouter';
import { ArrowLeft, Mail } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function ContactPage({ router }: Props) {
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

      <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
      <p className="mt-2 text-sm text-gray-500">
        We would love to hear from you. Reach out with any questions, suggestions, or feedback.
      </p>

      <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-rose-500 text-white">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-gray-900">Email Us</h2>
            <p className="mt-1 text-sm text-gray-500">
              For any queries, feedback, or partnership opportunities, please email us at:
            </p>
            <a
              href="mailto:aktunoteshelp@gmail.com"
              className="mt-2 inline-block text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              aktunoteshelp@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
        <h2 className="text-sm font-bold text-gray-900">Response Time</h2>
        <p className="mt-1 text-sm text-gray-500">
          We typically respond within 24 to 48 hours. Please include as much detail as possible in
          your email so we can assist you better.
        </p>
      </div>
    </div>
  );
}
