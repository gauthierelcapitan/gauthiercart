import React, { FC, RefObject } from 'react';

export interface NavbarItemProps {
  label: string;
  onClick?: () => void;
  sectionRef: RefObject<HTMLDivElement>;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, sectionRef, onClick }) => {
  return (
    <div
      key={label}
      onClick={(event) => {
        event.preventDefault();
        sectionRef?.current?.scrollIntoView({ behavior: 'smooth' });
        onClick && onClick();
      }}
      className="w-40 px-5 py-2 text-xl font-mono font-medium text-gray-500 hover:text-white cursor-pointer link link-underline link-underline-black"
    >
      {label}
    </div>
  );
};

export default NavbarItem;
