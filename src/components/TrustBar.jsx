import { ShieldCheck, CheckCircle2, Truck, Building2, FlaskConical } from 'lucide-react'

function TrustBar() {
  const items = [
    { icon: CheckCircle2, text: 'Peste 50.000 de clienți' },
    { icon: Building2, text: '20+ ani experiență' },
    { icon: ShieldCheck, text: 'Folosite în restaurante' },
    { icon: FlaskConical, text: 'Testate în laborator' },
    { icon: Truck, text: 'Livrare rapidă' },
  ]
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 -mt-6">
      <div className="grid sm:grid-cols-5 gap-3">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white/80 backdrop-blur border border-slate-200 px-4 py-3 text-sm text-slate-700 shadow-sm">
            <Icon className="w-4 h-4 text-blue-700" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
