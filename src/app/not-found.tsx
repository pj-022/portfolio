import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-white/35">404</p>
      <h1 className="mt-4 font-display text-4xl font-medium text-white">
        Page not found
      </h1>
      <Link
        href="/"
        className="mt-8 text-sm text-white/50 transition-colors hover:text-white"
      >
        ← Back home
      </Link>
    </div>
  );
}
