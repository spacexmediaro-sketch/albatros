import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#04040A] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <p className="text-7xl font-bold text-[#C9A84C]">404</p>

        <h1 className="text-2xl font-bold text-white">
          Pagina nu a fost gasita
        </h1>

        <p className="text-[#8B8D97] text-sm leading-relaxed">
          Pagina pe care o cautati nu exista sau a fost mutata.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white text-sm font-medium rounded-lg hover:bg-[#C9A84C]/90 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Inapoi la pagina principala
        </Link>
      </div>
    </div>
  )
}
