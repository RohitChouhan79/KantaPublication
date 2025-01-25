import Link from "next/link";
import {   ShoppingCart } from "lucide-react";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";




// when we  use client  -------1 imp point 25 jan 










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
          <Menu className="h-5 w-5 text-black" />
          <span className="sr-only">Toggle menu</span>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#25276F]">
          {/* Adding a visually hidden title for accessibility */}
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-4">
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
    </div>
  );
}

// Navbar Component
export function Navbar() {
  return (
   <>
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-red-400 rounded-lg px-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu */}

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 md:w-10 md:h-10 ">
                <img
                  src="/logo.png" // Replace this with the correct image path
                  alt="Kanta Publication Logo"
                  className="w-full h-full object-cover"
                />
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
            <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-black" />
            <span className="sr-only">Shopping Cart</span>
          </Link>

          <div className="md:hidden mt-2">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
   </>
  );
}
