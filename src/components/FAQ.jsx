import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

function FAQ() {
  const faqs = [
    { q: 'Sunt produsele sigure pentru uz casnic?', a: 'Da — sunt testate, certificate și conforme cu legislația UE.' },
    { q: 'Ambalajele sunt industriale. E ok pentru acasă?', a: 'Da. Sunt concentrate și eficiente, exact de aceea sunt folosite de HoReCa.' },
    { q: 'Cât durează livrarea?', a: '24–48h în toată România.' },
    { q: 'De ce sunt mai bune decât produsele din supermarket?', a: 'Formule profesionale, putere reală, consum redus, rezultate vizibile.' },
    { q: 'Ce recomandați pentru început?', a: 'Degresant rapid, anticalcar, detergent pardoseli, odorizant profesional.' },
  ]

  const [open, setOpen] = useState(0)

  return (
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Întrebări frecvente</h2>
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="font-semibold text-slate-800">{item.q}</span>
                <ChevronDown className={`w-5 h-5 text-slate-600 transition-transform ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-slate-700">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
