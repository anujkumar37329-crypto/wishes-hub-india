import type { RouterHook } from '@/hooks/useRouter';
import { ArrowLeft } from 'lucide-react';

type Props = {
  router: RouterHook;
};

export function AboutPage({ router }: Props) {
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

      <h1 className="text-2xl font-bold text-gray-900">About Us</h1>

      <div className="mt-5 space-y-4 text-sm leading-relaxed text-gray-600" style={{ lineHeight: 1.8 }}>
        <p>
          Welcome to <strong>Wishes Hub India</strong> — your one-stop destination for heartfelt
          wishes, beautiful shayari, and creative tools to make every celebration special.
        </p>
        <p>
          We understand that words have the power to connect hearts, express emotions, and make
          moments memorable. That is why we have curated a collection of wishes and shayari in
          both Hindi and English, covering festivals like Diwali, special occasions like
          birthdays, and heartfelt emotions like love and friendship.
        </p>
        <p>
          Our <strong>Stylish Name Generator</strong> tool lets you transform any name into 10
          different stylish font variations, perfect for social media bios, WhatsApp display
          names, and creative messages.
        </p>
        <h2 className="text-lg font-bold text-gray-900 pt-2">What We Offer</h2>
        <ul className="ml-4 list-disc space-y-2">
          <li>Diwali Wishes — Light up the festival with heartfelt messages</li>
          <li>Birthday Wishes — Make every birthday extra special</li>
          <li>Love Shayari — Express your deepest emotions beautifully</li>
          <li>Friendship Shayari — Celebrate the bond of true friendship</li>
          <li>Stylish Name Generator — Create 10 stylish font variations instantly</li>
        </ul>
        <p>
          Every wish and shayari on our platform comes with easy Copy and WhatsApp Share buttons,
          so you can spread joy with just a tap. We are constantly adding new content to keep our
          collections fresh and relevant.
        </p>
        <p>
          Thank you for visiting Wishes Hub India. We hope our words help you express what your
          heart feels. If you have any suggestions or feedback, we would love to hear from you.
        </p>
      </div>
    </div>
  );
}
