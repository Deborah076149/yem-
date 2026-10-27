import { Link } from 'react-router-dom'

const services = [
  {
    name: 'Fresh Pork',
    description: 'Freshly prepared pork, carefully handled and ready for your home or business.',
    detail: 'Tell us the quantity and cut you need when you order.',
    icon: '🥩',
  },
  {
    name: 'Spiced Pork',
    description: 'Pork seasoned with a delicious blend of spices for a rich, savory taste.',
    detail: 'Great for family meals, parties, and special occasions.',
    icon: '🌶️',
  },
  {
    name: 'Fried Pork',
    description: 'Flavorful fried pork, prepared fresh and ready to enjoy.',
    detail: 'Order a portion for yourself or a larger batch for your event.',
    icon: '🍖',
  },
]

function Services() {
  return (
    <main id="services" className="bg-stone-50 text-stone-900">
      <section className="relative overflow-hidden bg-amber-950 px-6 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
            Yem’s Pork Delicacy
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Good pork, prepared with care and brought closer to you.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-amber-100">
            Choose fresh, spiced, or fried pork for everyday meals, family gatherings, and special occasions.
            We take orders across Ogun State, from Sagamu to Abeokuta.
          </p>
          <Link
            to="/order"
            className="mt-8 inline-flex rounded-full bg-amber-400 px-7 py-3.5 font-bold text-amber-950 transition hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-200"
          >
            Place an order
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="font-bold uppercase tracking-widest text-amber-700">What we offer</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Made to satisfy every craving</h2>
            <p className="mt-4 leading-7 text-stone-600">
              Let us know what you’re planning and we’ll help you choose the right option and quantity.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
              >
                <span className="text-4xl" aria-hidden="true">{service.icon}</span>
                <h3 className="mt-5 text-xl font-bold">{service.name}</h3>
                <p className="mt-3 leading-7 text-stone-600">{service.description}</p>
                <p className="mt-4 text-sm font-medium text-amber-800">{service.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-100 px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-widest text-amber-800">Where we serve</p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">Serving Ogun State</h2>
            <p className="mt-4 max-w-xl leading-7 text-stone-700">
              We take orders around Ogun State, including locations along the Sagamu-to-Abeokuta route.
              Share your area when ordering so we can confirm availability and delivery arrangements.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold">Our opening hours</h3>
            <p className="mt-3 text-stone-700">Monday–Sunday</p>
            <p className="text-2xl font-extrabold text-amber-800">9:00 AM–6:00 PM</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">
              Please order during business hours. Delivery coverage and timing depend on your location.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Services