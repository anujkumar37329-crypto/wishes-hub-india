import { useState } from 'react';

export function DiwaliWishesAiCardPage() {
  const [name, setName] = useState('Raju');
  const [photo, setPhoto] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">🪔 Diwali AI Card Maker</h1>

        <div className="bg-white rounded-2xl shadow-xl p-5 space-y-4">
          <div>
            <label className="text-sm font-bold">1. Apni Photo Upload Karo</label>
            <input type="file" accept="image/*" onChange={(e)=>{
              const f=e.target.files?.[0]; if(f) setPhoto(URL.createObjectURL(f));
            }} className="w-full mt-2 p-2 border rounded-xl" />
          </div>
          <div>
            <label className="text-sm font-bold">2. Naam Likho</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Jaise Raju" className="w-full mt-2 p-3 border rounded-xl" />
          </div>

          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl p-1">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 rounded-xl p-6 text-center">
              {photo && <img src={photo} className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-orange-400 shadow-lg" />}
              <h2 className="text-2xl font-extrabold mt-4 text-orange-700">Happy Diwali, {name}!</h2>
              <p className="mt-2 font-semibold text-gray-700">My Heartfelt Diwali Wishes</p>
              <p className="mt-3 text-sm text-gray-600">Is Diwali apke jeevan me khushiyan, samridhi aur roshni aaye. 🪔✨</p>
              <div className="mt-4 text-3xl">🪔🎆🎇🪔</div>
            </div>
          </div>

          <button className="w-full bg-orange-500 text-white py-3 rounded-xl font-bold">Download Card</button>
        </div>
      </div>
    </div>
  );
}
