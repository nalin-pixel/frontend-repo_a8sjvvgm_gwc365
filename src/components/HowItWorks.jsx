import { CheckCircle2 } from 'lucide-react'

function HowItWorks() {
  const steps = [
    'Alegi produsele de care ai nevoie',
    'Completezi formularul de comandă în 1 minut',
    'Noi procesăm rapid comanda',
    'Livrare rapidă în toată România',
    'Te bucuri de rezultate profesionale la tine acasă',
  ]

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Cum funcționează</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={i} className="relative rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1"><CheckCircle2 className="w-5 h-5 text-emerald-600" /></div>
                <p className="text-sm font-medium text-slate-800">{s}</p>
              </div>
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-blue-700">{i+1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
