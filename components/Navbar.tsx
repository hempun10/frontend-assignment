import React from "react";
import { Container } from "./export";
import Link from "next/link";
import Navlinks from "./Navlinks";
import NavActions from "./Navactions";

const Navbar = () => {
  return (
    <div className=" border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">OnlineStore</p>
          </Link>
          <Navlinks />
          <NavActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
