import { CheckCircle2 } from 'lucide-react'

function WhoFor() {
  const bullets = [
    'Vrei rezultate reale, nu marketing',
    'Vrei curățenie rapidă, fără frecare',
    'Vrei produse testate și sigure',
    'Vrei calitate HoReCa la preț accesibil',
    'Vrei o casă impecabilă și miros proaspăt',
  ]
  return (
    <section className="bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">Pentru cine este</h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <p className="text-slate-800 font-medium mb-4">Aici găsești produsele potrivite dacă:</p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
                <span className="text-slate-700">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhoFor
