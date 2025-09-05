export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">Loading Bailiwick Guides</h2>
        <p className="text-text-secondary">Preparing your legal resources...</p>
      </div>
    </div>
  );
}
