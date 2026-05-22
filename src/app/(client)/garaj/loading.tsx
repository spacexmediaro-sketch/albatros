export default function GarajLoading() {
  return (
    <div className="min-h-screen bg-[#04040A] p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-8 w-40 bg-[#0F1017] rounded animate-pulse" />
        <div className="h-10 w-36 bg-[#0F1017] rounded-lg animate-pulse" />
      </div>

      {/* Car cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.08] bg-[#0F1017] overflow-hidden animate-pulse"
          >
            {/* Car image placeholder */}
            <div className="h-44 bg-[#080808]" />

            <div className="p-5 space-y-4">
              {/* Car name */}
              <div className="h-5 w-3/4 bg-[#080808] rounded" />

              {/* Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <div className="h-3 w-16 bg-[#080808] rounded" />
                  <div className="h-3 w-24 bg-[#080808] rounded" />
                </div>
                <div className="flex justify-between">
                  <div className="h-3 w-12 bg-[#080808] rounded" />
                  <div className="h-3 w-20 bg-[#080808] rounded" />
                </div>
                <div className="flex justify-between">
                  <div className="h-3 w-20 bg-[#080808] rounded" />
                  <div className="h-3 w-16 bg-[#080808] rounded" />
                </div>
              </div>

              {/* Action button */}
              <div className="h-9 w-full bg-[#080808] rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
