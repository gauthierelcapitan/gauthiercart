import React, { FC, RefObject } from 'react';

export interface NavbarItemProps {
  label: string;
  sectionRef: RefObject<HTMLDivElement>;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, sectionRef }) => {
  return (
    <div
      key={label}
      onClick={() =>
        sectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
      }
      className="px-5 py-2 text-xl font-mono font-medium text-gray-500 hover:text-white cursor-pointer link link-underline link-underline-black"
    >
      {label}
    </div>
  );
};

export default NavbarItem;
