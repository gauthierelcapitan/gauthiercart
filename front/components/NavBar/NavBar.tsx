import Container from '@gauthiercart/design-system/Container/Container';
import { Icon } from '@gauthiercart/design-system/Icon/Icon';
import { Disclosure } from '@headlessui/react';
import React, { FC, memo } from 'react';

import NavbarItem, { NavbarItemProps } from './NavBarItem';

interface NavbarProps {
  menuLeft: NavbarItemProps[];
  menuRight: NavbarItemProps[];
}

const NavBar: FC<NavbarProps> = ({ menuLeft, menuRight }) => {
  const menuMobile = [...menuLeft, ...menuRight];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <nav className="flex justify-around bg-white/10 backdrop-blur-sm shadow-sm w-full fixed top-0 left-0 right-0 z-10">
        <Disclosure>
          {({ open, close }) => (
            <>
              <div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap">
                <div className="flex-col items-center justify-start order-1 hidden w-full md:flex md:flex-row md:justify-end md:w-auto md:order-none md:flex-1">
                  {menuLeft.map(({ label, sectionRef }) => (
                    <NavbarItem
                      key={label}
                      label={label}
                      sectionRef={sectionRef}
                    />
                  ))}
                </div>
                <div className="flex justify-between items-center w-full md:w-auto cursor-pointer">
                  <div onClick={scrollToTop} className="w-8">
                    <Icon variant="iceAxe" height={90} width={30} />
                  </div>
                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-white rounded-md md:hidden focus:text-white-500 focus:outline-none"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
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
                  {menuRight.map(({ label, sectionRef }) => (
                    <NavbarItem
                      key={label}
                      label={label}
                      sectionRef={sectionRef}
                    />
                  ))}
                </div>
              </div>
              <Disclosure.Panel>
                <div className="flex flex-col items-center justify-start order-2 w-full md:hidden">
                  {menuMobile.map(({ label, sectionRef }) => (
                    <NavbarItem
                      key={label}
                      label={label}
                      sectionRef={sectionRef}
                      onClick={() =>
                        setTimeout(() => {
                          close();
                        }, 750)
                      }
                    />
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
};

export default memo(NavBar);
