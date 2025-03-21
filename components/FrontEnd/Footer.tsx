"use client";

import { useState } from "react";
import Link from "next/link";
import { menuIcons } from "./icons"; // Importing the icons
import {FaCopyright } from "react-icons/fa";


// Define the types for the menu items
type MenuItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Expecting a React component for the icon
  href: string;
};

type FlowerMenuProps = {
  menuItems: MenuItem[]; // List of menu items
  iconColor?: string;
  backgroundColor?: string;
  animationDuration?: number;
  togglerSize?: number;
};

// Menu Toggler component
const MenuToggler = ({
  isOpen,
  onChange,
  backgroundColor,
  iconColor,
  animationDuration,
  togglerSize,
  iconSize,
}: {
  isOpen: boolean;
  onChange: () => void;
  backgroundColor: string;
  iconColor: string;
  animationDuration: number;
  togglerSize: number;
  iconSize: number;
}) => {
  const lineHeight = iconSize * 0.1;
  const lineWidth = iconSize * 0.8;
  const lineSpacing = iconSize * 0.25;

  return (
    <>
      <input
        id="menu-toggler"
        type="checkbox"
        checked={isOpen}
        onChange={onChange}
        className="absolute inset-0 z-10 m-auto cursor-pointer opacity-0"
        style={{ width: togglerSize, height: togglerSize }}
      />
      <label
        htmlFor="menu-toggler"
        className="absolute inset-0 z-20 m-auto flex cursor-pointer items-center justify-center rounded-full transition-all"
        style={{
          backgroundColor,
          color: iconColor,
          transitionDuration: `${animationDuration}ms`,
          width: togglerSize,
          height: togglerSize,
        }}
      >
        <span
          className="relative flex flex-col items-center justify-center"
          style={{ width: iconSize, height: iconSize }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`absolute bg-current transition-all ${
                isOpen && i === 0
                  ? "opacity-0"
                  : isOpen
                  ? `${i === 1 ? "rotate-45" : "-rotate-45"}`
                  : ""
              }`}
              style={{
                transitionDuration: `${animationDuration}ms`,
                width: lineWidth,
                height: lineHeight,
                top: isOpen
                  ? `calc(50% - ${lineHeight / 2}px)`
                  : `calc(50% + ${(i - 1) * lineSpacing}px - ${lineHeight / 2}px)`,
              }}
            />
          ))}
        </span>
      </label>
    </>
  );
};

// Menu Item component
const MenuItem = ({
  item,
  index,
  isOpen,
  iconColor,
  backgroundColor,
  animationDuration,
  itemCount,
  itemSize,
  iconSize,
}: {
  item: MenuItem;
  index: number;
  isOpen: boolean;
  iconColor: string;
  backgroundColor: string;
  animationDuration: number;
  itemCount: number;
  itemSize: number;
  iconSize: number;
}) => {
  const Icon = item.icon; // Get the Icon component passed in

  return (
    <li
      className={`absolute inset-0 m-auto transition-all ${isOpen ? "opacity-100" : "opacity-0"}`}
      style={{
        width: itemSize,
        height: itemSize,
        transform: isOpen
          ? `rotate(${(270 / (itemCount - 1)) * index - 90}deg) translateX(-${itemSize + 30}px)`
          : "none",
        transitionDuration: `${animationDuration}ms`,
      }}
    >
      <Link
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex h-full w-full items-center justify-center rounded-full opacity-60 transition-all duration-100 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        } group hover:scale-125 hover:opacity-100`}
        style={{
          backgroundColor,
          color: iconColor,
          transform: `rotate(-${(360 / itemCount) * index}deg)`,
          transitionDuration: `${animationDuration}ms`,
        }}
      >
        <Icon
          className="transition-transform duration-200 group-hover:scale-125"
          style={{ width: iconSize, height: iconSize }}
        />
      </Link>
    </li>
  );
};

// FlowerMenu component
export default function FlowerMenu({
  menuItems,
  iconColor = "white",
  backgroundColor = "rgba(255, 255, 255, 0.2)",
  animationDuration = 500,
  togglerSize = 40,
}: FlowerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = (menuItems || []).length;

  const itemSize = togglerSize * 2;
  const iconSize = Math.max(24, Math.floor(togglerSize * 0.6));

  // Define your menu items
  const items: MenuItem[] = [
    { icon: menuIcons[0].icon, href: "https://wa.me/26663325395" },
    { icon: menuIcons[1].icon, href: "https://github.com/bokangleqele" },
    { icon: menuIcons[2].icon, href: "https://www.linkedin.com/in/bokang-leqele-03a1882b1/" },
    { icon: menuIcons[3].icon, href: "mailto:bokangleqele7@gmail.com" },
  ];

  return (
    <nav className="relative min-h-64 w-full sm:w-[35vw] sm:h-[8vh] h-auto flex justify-center items-center">
      {/* Header Text */}
      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-white font-bold">
        Find me here
      </div>

      <MenuToggler
        isOpen={isOpen}
        onChange={() => setIsOpen(!isOpen)}
        backgroundColor={backgroundColor}
        iconColor={iconColor}
        animationDuration={animationDuration}
        togglerSize={togglerSize}
        iconSize={iconSize}
      />
      <ul className="absolute inset-0 m-0 h-full w-full list-none p-0">
        {(items || []).map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            index={index}
            isOpen={isOpen}
            iconColor={iconColor}
            backgroundColor={backgroundColor}
            animationDuration={animationDuration}
            itemCount={itemCount}
            itemSize={itemSize}
            iconSize={iconSize}
          />
        ))}
      </ul>

      {/* Centered Text */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-80 text-white sm:block hidden">
        Website Solely Built by Bokang Leqele
      </div>

      {/* Copyright Text */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-[800px] text-white sm:block hidden">
        <span className="flex items-center">
          <FaCopyright className="mr-2" />
          All rights reserved
        </span>
      </div>
    </nav>
  );
}
