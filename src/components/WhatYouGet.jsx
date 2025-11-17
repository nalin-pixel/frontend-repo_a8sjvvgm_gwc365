import { Gift, Timer, ShieldCheck, Star } from 'lucide-react'

function WhatYouGet() {
  const bullets = [
    'O casă care arată și miroase impecabil',
    'Produse care țin mai mult și curăță mai bine',
    'Calitatea folosită în restaurante și hoteluri',
    'Economie de timp și bani',
    'Siguranța unor formule testate și conforme legal',
  ]

  const icons = [Star, Gift, Timer, ShieldCheck, Star]

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Ce primești</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {bullets.map((b, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <Icon className="w-5 h-5 text-blue-700 mt-0.5" />
                <span className="text-slate-800">{b}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet
