import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Home", path: "/" },
  { title: "Pricing", path: "/pricing" },
  { title: "Contact Us", path: "/contact-us" },
];

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between px-10 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="Logo" width={39} height={48} />
        <h2 className="font-bold text-2xl">TravelGenius - AI</h2>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-5">
        {menuItems.map((item, index) => (
          <a key={index} href={item.path}>
            <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
              {item.title}
            </h2>
          </a>
        ))}
      </div>

      {/* Get Started Button #087443 */}
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
