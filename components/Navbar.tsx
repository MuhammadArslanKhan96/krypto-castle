import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import Logo from "./Logo";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const menuItems = [
    { id: "#works", label: "How its works" },
    { id: "#roadmap", label: "Roadmap" },
    { id: "#community", label: "Community" },
    { id: "#about", label: "About" },
    { id: "#faq", label: "FAQ" },
  ];

  const router = useRouter();
  const { open } = useWeb3Modal();
  const { isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      className={`bg-[#0E121B] flex flex-col w-full ${isSticky ? "fixed z-[10] transition" : "fixed"
        }`}
    >
      <div className="4xl1:flex 4xl1:justify-center 4xl1:items-center">
      <div className="4xl1:max-w-[1440px]">
        
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="bg-[#0E121B] border-b-1.5 border-gray-800 py-1 px-8 max-lg:px-0 max-sm:px-2 z-0 max-sm:pl-0 flex justify-between [&>header]:!max-w-full"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden max-sm:pl-0"
        />
        <NavbarBrand
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setIsMenuOpen(false), router.push("/");
          }}
        >
          <Logo />
          <p className="font-semibold text-3xl max-sm:text-xl max-md:text-3xl text-inherit ">
            Krypto Castle
          </p>
        </NavbarBrand>
        <NavbarContent className="md:hidden hidden lg:flex gap-4" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.id}>
              <div className="text-base font-semibold text-[#CDCDCD] hover:text-white cursor-pointer">
                <a href={`${item.id}`} >{item.label}</a>
              </div>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              onClick={() => open()}
              className="font-semibold bg-[#222530] flex text-white rounded-lg px-6 max-sm:px-4 max-sm:py-2 py-2 text-base"
            >
              {isConnected ? "Connected" : "Connect Wallet"}
            </Button>
          </NavbarItem>
        </NavbarContent>
        {isMenuOpen && (
          <NavbarMenu className="bg-[#000000] py-10 px-8">
            {menuItems.map((item) => (
              <NavbarMenuItem key={item.id}>
                <div className="flex flex-col gap-1">
                  <div
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xl font-semibold text-[#CDCDCD] mb-6 hover:text-white cursor-pointer"
                  >
                    <a href={`${item.id}`} >{item.label}</a>
                  </div>
                </div>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
      </Navbar>
      </div>
      </div>
    </div>
  );
}
