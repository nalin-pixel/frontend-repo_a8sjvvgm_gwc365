function ProductCategories() {
  const data = [
    {
      title: 'Bucătărie',
      items: [
        'Detergent spălare vase',
        'Detergent mașină vase',
        'Degresanți rapizi',
        'Anticalcar electrocasnice',
      ],
      img: 'https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Baie',
      items: ['Detergenți grupuri sanitare', 'Dezinfectanți', 'Soluții anticalcar', 'Eliminatori miros WC'],
      img: 'https://images.unsplash.com/photo-1602151592621-c1a028d3f393?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Suprafețe',
      items: ['Inox', 'Mobilă', 'Geamuri', 'Pardoseli'],
      img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Curățări grele',
      items: ['Rufe', 'Detergent lichid și solid', 'Aditivi pete', 'Balsam rufe'],
      img: 'https://images.unsplash.com/photo-1604335399105-a0d7b2f9a7e3?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Miros & Aer',
      items: ['Odorizante', 'Soluții parfumare', 'Eliminatori mirosuri'],
      img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop',
    },
    {
      title: 'Extra',
      items: ['Consumabile', 'Tratamente pardoseli', 'Soluții canalizări'],
      img: 'https://images.unsplash.com/photo-1582582621953-48d0b2ae1bea?q=80&w=600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="produse" className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Categorii Produse</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((card, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-xl transition">
              <div className="h-40 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-700 list-disc list-inside">
                  {card.items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
                <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2">
                  Vezi produse
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
