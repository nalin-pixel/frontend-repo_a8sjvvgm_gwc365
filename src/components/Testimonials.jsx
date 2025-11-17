function Testimonials() {
  const items = [
    { text: '⭐️⭐️⭐️⭐️⭐️ “Degresantul lor e incredibil. Îl pulverizezi și gata.” — Andreea, București' },
    { text: '⭐️⭐️⭐️⭐️⭐️ “Mult peste supermarket. Și prețurile sunt mai bune.” — Daniel, Cluj' },
    { text: '⭐️⭐️⭐️⭐️⭐️ “A venit repede, ambalat perfect.” — Ioana, Brașov' },
  ]

  return (
    <section className="bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Ce spun clienții</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-slate-800 leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
