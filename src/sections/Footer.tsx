"use client";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
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
  };

  const socialLinks = [
    {
      icon: SocialX,
      url: "https://twitter.com/geomarinetides",
      label: "Twitter/X"
    },
    {
      icon: SocialInsta,
      url: "https://instagram.com/geomarinetides",
      label: "Instagram"
    },
    {
      icon: SocialLinkedin,
      url: "https://linkedin.com/company/geomarine",
      label: "LinkedIn"
    },
    {
      icon: SocialPin,
      url: "https://pinterest.com/geomarine",
      label: "Pinterest"
    },
    {
      icon: SocialYoutube,
      url: "https://youtube.com/@geomarinetides",
      label: "YouTube"
    }
  ];

  const navItems = [
    { label: "About", id: "about" },
    { label: "Product", id: "product" },
    { label: "Specifications", id: "specifications" },
    { label: "Customers", id: "customers" },
    { label: "Support", id: "support" }
  ];

  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex justify-center gap-6 mt-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={`Visit our ${social.label}`}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
        
        <p className="mt-6">&copy; 2025 Geomarine, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};