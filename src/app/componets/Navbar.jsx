import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Shopping", href: "/shopping" },
  { name: "Write & Publish with us", href: "/publish" },
  { name: "Contact Us", href: "/contact" },
  { name: "Events", href: "/events" },
];

// MobileNav Component
function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4   ">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-2 py-1 text-lg hover:text-[#F07347] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

// Navbar Component
export function Navbar() {
  return (
   <>
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-red-400 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileNav />
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 md:w-10 md:h-10">
              <svg viewBox="0 0 40 40" className="w-full h-full text-[#272974]">
                <path
                  fill="currentColor"
                  d="M20 0L24.49 15.51L40 20L24.49 24.49L20 40L15.51 24.49L0 20L15.51 15.51L20 0Z"
                />
              </svg>
            </div>
            <span className="text-[#F07347] text-lg md:text-xl font-medium">
              Kanta Publication
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm lg:text-base text-gray-700 hover:text-[#F07347] transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Shopping Cart */}
          <Link
            href="/cart"
            className="p-2 hover:text-[#F07347] transition-colors ml-auto md:ml-0"
          >
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6" />
            <span className="sr-only">Shopping Cart</span>
          </Link>
        </div>
      </div>
    </nav>
   </>
  );
}
