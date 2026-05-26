import Link from "next/link";
import { footer, nav, site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-[#030306]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-3xl font-medium tracking-tight text-white md:text-4xl">
              {footer.headline}
              <br />
              <span className="text-white/45">{footer.headlineMuted}</span>
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/50">
              {footer.description}
            </p>
          </div>

          <div className="flex flex-col gap-10 md:items-end md:text-right">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                {footer.connectLabel}
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white/80 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white/80 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/35">
                {footer.exploreLabel}
              </p>
              <ul className="mt-4 space-y-3">
                {nav
                  .filter((item) => item.href !== "/")
                  .map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-lg text-white/80 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-white/8 pt-8 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <p className="text-white/25">{footer.techNote}</p>
        </div>
      </div>
    </footer>
  );
}
