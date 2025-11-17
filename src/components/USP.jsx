import { Sparkles, ShieldCheck, Gauge, Droplets, CheckCircle2 } from 'lucide-react'

function USP() {
  const items = [
    { icon: Sparkles, text: 'Rezultate profesionale în câteva minute' },
    { icon: ShieldCheck, text: 'Formule testate și certificate' },
    { icon: Gauge, text: 'Concentrate = consum redus, cost mai mic' },
    { icon: Droplets, text: 'Putere reală împotriva grăsimii, calcarului, petelor' },
    { icon: CheckCircle2, text: 'Funcționează acolo unde produsele obișnuite cedează' },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-10">
          Soluțiile Profesionale Folosite de Restaurante, Hoteluri și Clinici — Acum în Casa Ta.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, text }, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 rounded-xl border border-slate-100 bg-white shadow-sm">
              <div className="shrink-0 rounded-lg bg-blue-600/10 p-3">
                <Icon className="w-6 h-6 text-blue-700" />
              </div>
              <p className="text-slate-800 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default USP
