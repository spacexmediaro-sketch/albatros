export default function PublicLoading() {
  return (
    <div className="min-h-screen bg-[#04040A]">
      {/* Hero skeleton */}
      <div className="w-full h-[400px] bg-[#0F1017] animate-pulse" />

      {/* Content skeleton */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
        {/* Title */}
        <div className="space-y-3">
          <div className="h-8 w-64 bg-[#0F1017] rounded animate-pulse" />
          <div className="h-4 w-96 bg-[#0F1017] rounded animate-pulse" />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.08] bg-[#0F1017] p-6 space-y-4 animate-pulse"
            >
              <div className="h-40 bg-[#080808] rounded-lg" />
              <div className="h-5 w-3/4 bg-[#080808] rounded" />
              <div className="space-y-2">
                <div className="h-3 w-full bg-[#080808] rounded" />
                <div className="h-3 w-5/6 bg-[#080808] rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* Text block */}
        <div className="space-y-3">
          <div className="h-4 w-full bg-[#0F1017] rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-[#0F1017] rounded animate-pulse" />
          <div className="h-4 w-4/6 bg-[#0F1017] rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}
