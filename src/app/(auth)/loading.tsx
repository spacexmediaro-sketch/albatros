export default function AuthLoading() {
  return (
    <div className="min-h-screen bg-[#04040A] flex items-center justify-center px-4">
      <div className="w-full max-w-sm space-y-6 animate-pulse">
        {/* Logo placeholder */}
        <div className="h-10 w-32 mx-auto bg-[#0F1017] rounded" />

        {/* Form card */}
        <div className="rounded-xl border border-white/[0.08] bg-[#0F1017] p-8 space-y-5">
          {/* Title */}
          <div className="h-6 w-40 mx-auto bg-[#080808] rounded" />

          {/* Input fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-3 w-16 bg-[#080808] rounded" />
              <div className="h-10 w-full bg-[#080808] rounded-lg" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-12 bg-[#080808] rounded" />
              <div className="h-10 w-full bg-[#080808] rounded-lg" />
            </div>
          </div>

          {/* Submit button */}
          <div className="h-11 w-full bg-[#080808] rounded-lg" />

          {/* Link */}
          <div className="h-3 w-48 mx-auto bg-[#080808] rounded" />
        </div>
      </div>
    </div>
  )
}
