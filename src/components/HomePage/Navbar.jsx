import Link from "next/link";
import { ShoppingCart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

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
    <div>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <Menu className="h-6 w-6 text-black" />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#25276F]">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-lg text-white hover:text-[#F07347] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

// Navbar Component
export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-red-400 rounded-lg px-4 py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <img
              src="/logo.png" // Replace this with the correct image path
              alt="Kanta Publication Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[#F07347] text-xl md:text-2xl font-serif font-semibold">Kanta Publication</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center flex-grow justify-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base lg:text-lg text-gray-700 hover:text-[#F07347] transition-colors whitespace-nowrap font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Shopping Cart */}
        {/* <Link
          href="/cart"
          className="p-2 hover:text-[#F07347] transition-colors ml-auto"
        >
          <ShoppingCart className="h-6 w-6 text-black" />
          <span className="sr-only">Shopping Cart</span>
        </Link> */}

        {/* Mobile Menu */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
