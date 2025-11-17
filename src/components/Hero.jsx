import { CheckCircle2, ShieldCheck, Truck, FlaskConical, Building2, Users } from 'lucide-react'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-emerald-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-16 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Curățenie Profesională Pentru Casa Ta — Rezultate Vizibile În Câteva Minute, La Preț de Supermarket.
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-700">
              Produsele folosite în HoReCa de peste 20 de ani, testate și certificate, acum disponibile pentru uz casnic cu livrare rapidă în toată România.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a href="#produse" className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 shadow-lg shadow-blue-600/20 transition">
                Cumpără Produse Profesionale
              </a>
              <div className="flex items-center gap-3 text-slate-600">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span className="text-sm">Certificate și testate</span>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 bg-white/70 backdrop-blur rounded-xl px-4 py-3 shadow-sm">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Peste 50.000 de clienți</span>
                <span className="text-slate-300">•</span>
                <Building2 className="w-4 h-4 text-blue-600" />
                <span>20+ ani experiență</span>
                <span className="text-slate-300">•</span>
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Folosite în restaurante</span>
                <span className="text-slate-300">•</span>
                <FlaskConical className="w-4 h-4 text-blue-600" />
                <span>Testate în laborator</span>
                <span className="text-slate-300">•</span>
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Livrare rapidă</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-blue-500 to-emerald-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-white grid grid-cols-2 gap-2 p-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center">
                    <img src={`https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop`} alt="Produse profesionale" className="w-full h-full object-cover rounded-lg mix-blend-multiply" />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg px-4 py-3 border border-slate-100">
              <div className="flex items-center gap-2 text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold text-slate-800">Certificat HoReCa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
