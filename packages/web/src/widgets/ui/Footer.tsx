export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-6 py-6">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-text">
          &copy; {year} Betterware. All rights reserved.
        </p>

        <nav className="flex items-center gap-4" aria-label="Footer navigation">
          <a
            href="#"
            className="text-sm text-text transition-colors hover:text-text-h"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-sm text-text transition-colors hover:text-text-h"
          >
            Checkout
          </a>
        </nav>
      </div>
    </footer>
  );
}
