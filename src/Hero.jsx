import { Link } from "react-router-dom";

function Hero() {
  return (
    <main
      id="home"
      className="relative isolate flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-orange-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2400&q=85"
          alt=""
          className="hero-banner-image h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-orange-950/90 via-orange-950/65 to-orange-950/35" />
      </div>
      <div className="max-w-3xl text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-orange-300">
          Welcome to
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          Yem&apos;s Pork Delicacy
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-amber-50/90">
          A new home for Yem&apos;s Pork Delicacy. More delicious details are
          coming soon.
        </p>
        <Link
          to="/order"
          className="mt-8 inline-flex rounded-md bg-orange-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-500 focus-visible:outline focus-visible:outline2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Order Now
        </Link>
      </div>
    </main>
  );
}

export default Hero;
