'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#04040A] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A84C]/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#C9A84C]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white">Ceva nu a mers bine</h1>

        <p className="text-[#8B8D97] text-sm leading-relaxed">
          A aparut o eroare neasteptata. Incercati din nou sau reveniti mai
          tarziu.
        </p>

        {error.digest && (
          <p className="text-[#8B8D97]/60 text-xs font-mono">
            Cod eroare: {error.digest}
          </p>
        )}

        <button
          onClick={() => unstable_retry()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C] text-white text-sm font-medium rounded-lg hover:bg-[#C9A84C]/90 transition-colors cursor-pointer"
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
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182"
            />
          </svg>
          Incercati din nou
        </button>
      </div>
    </div>
  )
}
