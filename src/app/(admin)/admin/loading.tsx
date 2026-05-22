export default function AdminLoading() {
  return (
    <div className="min-h-screen bg-[#04040A] p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="h-8 w-48 bg-[#0F1017] rounded animate-pulse" />
        <div className="h-10 w-32 bg-[#0F1017] rounded-lg animate-pulse" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.08] bg-[#0F1017] p-5 space-y-3 animate-pulse"
          >
            <div className="h-3 w-20 bg-[#080808] rounded" />
            <div className="h-7 w-16 bg-[#080808] rounded" />
          </div>
        ))}
      </div>

      {/* Table skeleton */}
      <div className="rounded-xl border border-white/[0.08] bg-[#0F1017] overflow-hidden animate-pulse">
        {/* Table header */}
        <div className="flex gap-4 p-4 border-b border-white/[0.08]">
          <div className="h-4 w-1/4 bg-[#080808] rounded" />
          <div className="h-4 w-1/4 bg-[#080808] rounded" />
          <div className="h-4 w-1/4 bg-[#080808] rounded" />
          <div className="h-4 w-1/4 bg-[#080808] rounded" />
        </div>
        {/* Table rows */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex gap-4 p-4 border-b border-white/[0.08] last:border-b-0"
          >
            <div className="h-4 w-1/4 bg-[#080808] rounded" />
            <div className="h-4 w-1/4 bg-[#080808] rounded" />
            <div className="h-4 w-1/4 bg-[#080808] rounded" />
            <div className="h-4 w-1/4 bg-[#080808] rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}
