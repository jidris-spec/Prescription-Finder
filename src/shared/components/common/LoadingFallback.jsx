export default function LoadingFallback() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="h-10 w-10 rounded-full border-4 border-primary/20 border-t-primary animate-spin"
          aria-hidden="true"
        />
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    </div>
  )
}
