import { useState } from 'react';

export default function DiwaliWishesAiCard() {
  const [name, setName] = useState('Raju');
  const [photo, setPhoto] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-center text-white">
          <h1 className="text-3xl font-bold">🪔 Happy Diwali 🪔</h1>
          <p className="mt-2">AI Photo Card Generator</p>
        </div>

        <div className="p-6 space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if(file) setPhoto(URL.createObjectURL(file));
            }}
            className="w-full"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Apna Naam Likho"
            className="w-full p-3 border rounded-xl"
          />

          <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl p-6 text-center text-white">
            {photo && <img src={photo} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white" />}
            <h2 className="text-2xl font-bold">Happy Diwali, {name}!</h2>
            <p className="mt-3 text-sm">My Heartfelt Diwali Wishes</p>
            <p className="mt-2 text-xs opacity-90">May this festival of lights brighten your life with joy and prosperity!</p>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold">
            Download Card
          </button>
        </div>
      </div>
    </div>
  );
}
