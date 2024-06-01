'use client';
import Link from 'next/link';
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useTheme } from '@/context/ThemeContext';
import { SunIcon, XMarkIcon, MenuIcon, Bars3Icon  } from '@heroicons/react/24/outline'// You can use any icon library
import { MoonIcon } from '@heroicons/react/24/solid'// You can use any icon library
import useScrollDirection from '@/hooks/useScrollDirection';
import { cn } from '@/lib/utils';
import MaxWidthWrapper from './MaxWidthWrapper';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const scrollDirection = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);

  let timeline = gsap.timeline()
  const links = [
    { href: 'https://makemyweb.ai', label: 'Make My Web' },
    { href: '/', label: 'Home' },
    { href: '/company', label: 'Company' },
    { href: '/blogs', label: 'Blogs' },
  ];

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const router = useRouter();
  const pathname = usePathname()

  useGSAP(() => {
    timeline.from(".logo , .li-links", {
      y: -30,
      repeat: false,
      yoyo: 0,
      // rotation: 360,
      duration: 1,
      stagger: 0.15,
      opacity: 0,
      ease: "power1.inOut",
    });
    // gsap.from(".image-hero-wrapper", {
    //   y: -40,
    //   repeat: false,
    //   yoyo: 0,
    //   // rotation: 360,
    //   duration: 1.5,
    //   stagger: 0.15,
    //   opacity: 0,
    //   ease: "power1.inOut",
    // });
  }, []);

  return (
    <nav className={cn("fixed  w-full top-0 flex justify-between items-center px-4 bg-white dark:bg-[hsla(0,11%,88%,0.06)] dark:backdrop-blur-[80px] shadow-md transition-transform duration-300 z-30 md:px-28", 
    {
        'transform -translate-y-full': scrollDirection === 'down',
        'transform translate-y-0': scrollDirection === 'up',
      })}>
        <MaxWidthWrapper className='md:ml:20 md:mr-20'>
      <div className="text-2xl font-bold">
        <Link href="/">
          <div className="text-black dark:text-white">
            <img
            src='https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=96&q=75'
            className='dark:invert logo'
            />
          </div>
        </Link>
      </div>
      </MaxWidthWrapper>
      <div className="hidden  md:flex space-x-4 items-center">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <div
              className={twMerge(
                clsx(
                    'font-bold',
                    "li-links",
                    'text-black dark:text-white',
                  pathname === link.href && 'bg-gradient-to-r from-blue-400 to-teal-200 text-transparent bg-clip-text font-bold',
                )
              )}
            >
              {link.label}
            </div>
          </Link>
        ))}
        <button onClick={toggleTheme} className="p-2 rounded transition-all duration-300">
          {theme === 'light' ? (
            <MoonIcon className="w-6 h-6 text-black dark:text-white" />
          ) : (
            <SunIcon className="w-6 h-6 text-black dark:text-yellow-500" />
          )}
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={handleMenuToggle} className="p-2 rounded transition-all duration-300">
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-black dark:text-white"/>
          ) : (
            <Bars3Icon className="w-6 h-6 text-black dark:text-white"  />//>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black dark:backdrop-blur-[80px] shadow-md p-4 md:hidden transition-all duration-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={twMerge(
                  clsx(
                    'font-bold',
                    'text-black dark:text-white my-2',
                    pathname === link.href && 'bg-gradient-to-r from-blue-400 to-teal-200 text-transparent bg-clip-text font-bold',
                  )
                )}
              >
                {link.label}
              </div>
            </Link>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded transition-colors duration-300 w-full text-left mt-2 ml-40">
            {theme === 'light' ? (
              <MoonIcon className="w-6 h-6 text-black dark:text-white" />
            ) : (
              <SunIcon className="w-6 h-6 text-black dark:text-yellow-500" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
