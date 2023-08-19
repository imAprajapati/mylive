"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
const CustomLink: React.FC<{
  title: string;
  href: string;
  className: string;
}> = ({ title, href, className }) => {
  const router = usePathname();
  return (
    <Link
      href={href}
      className={`relative group  ${
        router === href ? "text-blue-700" : "text-secondary-5"
      } ${className}`}
      passHref
    >
      {title}
      <span
        className={`h-[1px] inline-block  absolute 
        -bottom-0.5 left-0 group-hover:w-full transition-[width] 
        duration-500 ease ${
          router === href ? "w-full bg-blue-700" : "w-0 bg-secondary-50"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
function Navbar() {
  const [showButton, setShowButton] = React.useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setShowButton(false);
  }, [pathname]);
  return (
    <>
      <header className="h-16 shadow-md sticky top-0 z-[999] bg-white flex items-center bg-whit border-b border-solid border-gray-400">
        <div className="md:w-[80%] mx-auto flex items-center justify-between">
          <nav className="1/2">
            {/* <Image src='/next.svg' className='bg-teal-50' width='100' height='100'  alt='hello'/> */}
            <Link href="/">
              <Image src='/images/Logo.jpeg' width={50} height={50} alt="my-live"/>
            </Link>
          </nav>
          <nav className="hidden lg:flex  sm:w-[70%] md:w-1/2 items-center justify-between space-x-6">
            <CustomLink href="/" title="Home" className="my-1" />
            <CustomLink href="/contact" title="Contact" className="my-1" />
            <CustomLink href="/delete-user" title="Delete User" className="my-1" />
            <CustomLink href="/privacy-policy" title="Privacy Policy" className="my-1" />
            <CustomLink href="/terms-conditions" title="Terms Conditions" className="my-1" />
          </nav>
          <div className="lg:hidden">
            <span
              onClick={() => setShowButton(!showButton)}
              className=" text-2xl absolute right-5 top-[14px] border border-solid border-white px-2"
            >
              &#9776;
            </span>
          </div>
          <nav
            className={`z-[999] bg-black h-[100vh] absolute inset-0 flex flex-col justify-center 
              transform transition-all duration-500 ease-in-out items-center ${
              showButton ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
            }`}
          >
            <span
              onClick={() => setShowButton(!showButton)}
              className="text-3xl absolute right-5 top-[14px] border border-solid border-white px-2 shadow"
            >
              {" "}
              &#215;
            </span>
            <CustomLink href="/" title="Home" className="my-1" />
            <CustomLink href="/about" title="About" className="my-1" />
            <CustomLink href="/contact" title="Contact" className="my-1" />
            <CustomLink href="/privacy-policy" title="Privacy Policy" className="my-1" />
            <CustomLink href="/terms-conditions" title="Terms Conditions" className="my-1" />
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
