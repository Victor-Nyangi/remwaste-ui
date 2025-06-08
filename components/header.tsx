import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-xl font-bold pl-4 text-foreground">
            Wewantwaste
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
