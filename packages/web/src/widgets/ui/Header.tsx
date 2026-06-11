import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/cart", label: "Cart" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-medium tracking-tight text-text-h transition-colors hover:text-accent"
        >
          Betterware
        </Link>

        <nav
          className="flex items-center gap-1 sm:gap-2"
          aria-label="Main navigation"
        >
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent-bg hover:text-text-h ${
                  isActive ? "bg-accent-bg text-text-h" : "text-text"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
