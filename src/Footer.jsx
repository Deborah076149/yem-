import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="text-xl font-bold tracking-wide text-white">
              Yem&apos;s Pork Delicacy
            </Link>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Flavorful meals, made with care and served fresh.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-4 text-sm sm:flex-row sm:gap-8">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-white">Services</Link></li>
              <li><Link to="/order" className="transition-colors hover:text-white">Order</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-white">About</Link></li>
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 sm:text-left">
          <p>&copy; {new Date().getFullYear()} Yem&apos;s Pork Delicacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer