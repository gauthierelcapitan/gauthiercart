import Container from '@gauthiercart/design-system/Container/Container';
import { Icon } from '@gauthiercart/design-system/Icon/Icon';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, {FC, RefObject } from 'react';

interface NavbarItem {
    label: string
    ref: RefObject<HTMLDivElement>
}

interface NavbarProps {
    menuRight: NavbarItem[]
    menuLeft: NavbarItem[]
}

const NavBar: FC<NavbarProps> = ({menuLeft, menuRight}) => {

  const menuMobile = [...menuLeft, ...menuRight];

  return (
    <Container>
      <nav className="flex justify-around bg-white/10 backdrop-blur-sm shadow-sm w-full fixed top-0 left-0 right-0 z-10">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {menuLeft.map(({label, ref}) => (
                      <div onClick={() => ref.current?.scrollIntoView({behavior: "smooth"})} className="px-5 py-2 text-xl font-mono font-medium text-gray-600 dark:text-gray-400 hover:text-white link link-underline link-underline-black">
                        {label}
                      </div>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full md:w-auto">
                  <Link href="/">
                    <a className="w-12 dark:hidden">
                      <Icon variant="iceAxe" height={60} width={20} />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="hidden w-12 dark:block">
                      <Icon variant="iceAxe" height={120} width={40} />
                    </a>
                  </Link>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md md:hidden focus:text-white-500 focus:outline-none dark:text-gray-300 "
                  >
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>
                </div>

                <div className="flex-col items-center justify-start order-2 hidden w-full md:flex md:flex-row md:w-auto md:flex-1 md:order-none">
                  {menuRight.map(({label, ref}) => (
                      <div onClick={() => ref.current?.scrollIntoView({behavior: "smooth"})} className="px-5 py-2 text-xl font-mono font-medium text-gray-600 dark:text-gray-400 hover:text-white link link-underline link-underline-black">
                  {label}
                      </div>
                      ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {menuMobile.map(({label, ref}) => (
                      <div onClick={() => ref.current?.scrollIntoView({behavior: "smooth"})} className="px-5 py-2 text-xl font-mono font-medium text-gray-600 dark:text-gray-400 hover:text-white link link-underline link-underline-black">
                        {label}
                      </div>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
      <style>
        {`
                .link-underline {
                border-bottom-width: 0;
                background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
                background-size: 0 3px;
                background-position: 0 100%;
                background-repeat: no-repeat;
                transition: background-size .5s ease-in-out;
            }

                .link-underline-black {
                background-image: linear-gradient(transparent, transparent), linear-gradient(#FC6443, #FD0D7A)
            }

                .link-underline:hover {
                background-size: 100% 3px;
                background-position: 0 100%
            }`}
      </style>
    </Container>
  );
}

export default NavBar
