import React, { useState } from 'react'
 
function Order() {
  const [quantities, setQuantities] = useState({ fresh: "", spiced: "", fried: "" })
  const [orderPlaced, setOrderPlaced] = useState(false)

  const products = [
    {
      id: "fresh",
      name: "Fresh Pork",
      description: "Freshly prepared, quality pork.",
      price: 5000,
      unit: "per order",
      image:
        "https://res.cloudinary.com/wrxvhdpw/image/upload/v1789139450/fresh-pork-meat-background-top-view-photo.jpg",
    },
    {
      id: "spiced",
      name: "Spiced Pork",
      description: "Richly seasoned for a bold flavour.",
      price: 2000,
      unit: "per portion",
      image:
        "https://res.cloudinary.com/wrxvhdpw/image/upload/v1789240303/images_4.jpg",
    },
    {
      id: "fried",
      name: "Fried Pork",
      description: "Crispy, flavourful and ready to enjoy.",
      price: 2000,
      unit: "per portion",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const quantityFor = (id) => Number(quantities[id]) || 0
  const total = products.reduce(
    (sum, product) => sum + product.price * quantityFor(product.id),
    0,
  )
  const whatsappMessage = encodeURIComponent(
    `Hello, I have placed an order and would like to confirm my payment:\n${products
      .filter((product) => quantityFor(product.id) > 0)
      .map((product) => `${product.name} x ${quantityFor(product.id)}`)
      .join('\n')}\nOrder total: ₦${total.toLocaleString()}`,
  )

  const updateQuantity = (id, value) => {
    setQuantities((current) => ({
      ...current,
      [id]: value,
    }))
    setOrderPlaced(false)
  }

  const addOne = (id) => {
    setQuantities((current) => ({
      ...current,
      [id]: String(quantityFor(id) + 1),
    }))
    setOrderPlaced(false)
  }

  return (
    <main id="order" className="min-h-screen bg-amber-50 px-4 py-12 text-stone-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-orange-700">
            Yem’s Pork Delicacy
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Place your order
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-stone-600">
            Choose your favourite, select the quantity and enjoy the goodness.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl border border-orange-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="mb-5 h-48 w-full rounded-xl object-cover"
              />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-6 text-stone-600">
                {product.description}
              </p>
              <p className="mt-5 text-2xl font-extrabold text-orange-700">
                ₦{product.price.toLocaleString()}
                <span className="ml-1 text-sm font-medium text-stone-500">
                  {product.unit}
                </span>
              </p>
              <label className="mt-5 block text-sm font-semibold" htmlFor={`${product.id}-quantity`}>
                Quantity
              </label>
              <div className="mt-2 flex w-full min-w-0 gap-2">
                <input
                  id={`${product.id}-quantity`}
                  type="number"
                  min="0"
                  step="1"
                  value={quantities[product.id]}
                  onChange={(event) => updateQuantity(product.id, event.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-stone-300 px-4 py-3 outline-none transition focus:border-orange-600 focus:ring-2 focus:ring-orange-200"
                />
                <button
                  type="button"
                  onClick={() => addOne(product.id)}
                  aria-label={`Add one ${product.name}`}
                  className="flex shrink-0 items-center justify-center rounded-lg bg-orange-600 px-4 text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-stone-900 p-6 text-white shadow-lg sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-stone-300">Order total</p>
              <p className="mt-1 text-3xl font-extrabold">₦{total.toLocaleString()}</p>
            </div>
            <button
              type="button"
              onClick={() => setOrderPlaced(true)}
              disabled={total === 0}
              className="rounded-lg bg-orange-600 px-6 py-3 font-bold text-white transition hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-stone-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Place order
            </button>
          </div>
          {orderPlaced && (
            <div className="mt-4">
              <p role="status" className="text-sm text-orange-200">
                Your order is ready! Please contact us to confirm and arrange payment.
              </p>
              <a
                href={`https://wa.me/2348159343551?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Confirm payment on WhatsApp"
                className="mt-3 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 font-bold text-white transition hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
                  <path d="M12.04 2a9.87 9.87 0 0 0-8.42 15.02L2 22l5.15-1.57A9.93 9.93 0 1 0 12.04 2Zm0 18.1a8.15 8.15 0 0 1-4.15-1.13l-.3-.18-3.06.93.95-2.98-.2-.31a8.16 8.16 0 1 1 6.76 3.67Zm4.48-6.12c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.56.06-.25-.13-1.07-.39-2.04-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.52.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
                </svg>
                Confirm payment on WhatsApp
              </a>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Order
