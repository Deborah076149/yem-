import React from 'react'

function About() {
  return (
    <section id="about" className="scroll-mt-8 bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700">
              About Yem's Pork Delicacy
            </p>
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Great pork, prepared with care and served with a smile.
            </h1>
            <p className="mt-6 text-base leading-7 text-gray-600 sm:text-lg">
              We make it easy to enjoy delicious pork and dependable service.
              Whether you're ordering for yourself, your family, or a gathering,
              we're here to help you find something tasty and make ordering
              straightforward from start to finish.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
              Pork can be a nourishing source of protein, which helps support
              muscle growth and repair. Depending on the cut and preparation, it
              can also provide nutrients such as B vitamins, zinc, and iron.
              Enjoy it as part of a varied, balanced diet.
            </p>
            <div className="mt-8 rounded-xl bg-amber-50 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Visit us in Ogun State
              </h2>
              <p className="mt-2 text-gray-600">Kajola Street, Ogun State</p>
            </div>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We care about good food and friendly, attentive service. Get in
              touch to place your order—we look forward to serving you!
            </p>
          </div>
          <div className="flex min-h-64 items-center justify-center rounded-2xl bg-amber-100 p-8 text-center sm:min-h-80">
            <div>
              <p className="text-5xl" aria-hidden="true">🍽️</p>
              <p className="mt-4 text-xl font-semibold text-amber-900">
                Delicious moments start here
              </p>
              <p className="mt-2 text-amber-800">
                Freshly prepared and ready for your table.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About