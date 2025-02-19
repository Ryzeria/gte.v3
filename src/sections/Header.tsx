"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleGetItNow = () => {
    router.push("/login");
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Product", id: "product" },
    { label: "Specifications", id: "specifications" },
    { label: "Customers", id: "customers" },
    { label: "Support", id: "support" },
  ];

  return (
    <header className="sticky top-0 z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Seamless Solutions for Tidal Intelligence</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 bg-transparent backdrop-blur-[2px]">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-black transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleGetItNow}
                className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-black/80 transition-colors"
              >
                Get it now
              </button>
            </nav>

            {isMobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 backdrop-blur-md bg-white/70 shadow-lg md:hidden">
                <nav className="flex flex-col py-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="py-2 px-6 text-black/60 hover:text-black hover:bg-white/50 text-left transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button 
                    onClick={handleGetItNow}
                    className="mx-6 mt-2 bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
                  >
                    Get it now
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};