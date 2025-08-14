"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoArrowRight } from "react-icons/go";
import { LuArrowDownRight } from "react-icons/lu";
import roundedRightArrow from "@/assets/images/icons/rounded-right-arrow.svg";
import CustomImage from "./customImage";
const containedBtn = "bg-white border border-white ";
const outlinedBtn = "border-2 border-white text-white bg-transparent";
const primaryBtn = `
  rounded
  text-xs
  xxs:text-sm
  xs:text-base
  h-8
  xxs:h-9
  xs:h-10
  lg:h-[2.7rem]
  px-3
  xxs:px-4
  lg:px-5
  lg:py-5
  min-w-[80px]
  xxs:min-w-[90px]
  xs:min-w-[100px]
  lg:min-w-[144px]
  4xl:min-w-[180px]
  text-baseblack
  flex
  items-center
  justify-center
  font-medium
  duration-400
  transition-all
  ease-linear
  whitespace-nowrap
`;

/**
 *
 * @param {*} href, className, rest props
 * @returns Link for header with active class
 */
export const HeaderLinkButton = ({
  href = "#",
  className = "",
  activeItem,
  ...rest
}) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || activeItem
      ? "text-white font-medium"
      : "text-gray-400 !font-normal";

  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`uppercase text-sm 2xl:text-base 2xl: px-4 hover:text-white hover:font-medium transition-all duration-300 ${isActive} ${className}`}
      {...rest}
    >
      {/* {pathname === href && (
        <motion.div 
          layoutId="active-pill"
          className="bg-white rounded-lg absolute inset-0 lg:rounded-none"
          transition={{
            type: "spring",
            duration: 0.5,
            bounce: 0.2,
          }}
        />
      )}
      <span className="relative z-10">
      </span> */}
      {rest.children}
    </Link>
  );
};

export const LinkButton = ({
  href = "",
  className = "",
  arrow = false,
  collectionArrow = false,
  roundedArrow = false,
  arrowColor = "black",
  children,
  ...rest
}) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={`flex gap-2 overflow-hidden  items-center  group transition-all duration-300 ease-in-out hover:bg-transparent hover:text-white ${containedBtn} ${primaryBtn} ${className}`}
      {...rest}
    >
      {children}
      {arrow && (
        <span className="h-full w-full mx-2 relative">
          <GoArrowRight className="-translate-x-1/2 -translate-y-1/2 absolute duration-300 ease-in-out group-hover:hidden left-1/2 lg:group-hover:translate-x-10 top-1/2 transition-transform" />
          <GoArrowRight className="-translate-x-5 -translate-y-1/2 absolute duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 left-1/2 opacity-0 top-1/2 transition-all" />
        </span>
      )}
      {collectionArrow && <LuArrowDownRight className="text-2xl" />}
      {roundedArrow && (
        <span className="flex h-full w-full items-center mx-1">
          <CustomImage
            titleAttr=""
            altAttr=""
            srcAttr={roundedRightArrow}
            className="w-8 group-hover:!filter group-hover:!invert"
          />
        </span>
      )}
    </Link>
  );
};

/**
 *
 * @param {*} href, className, rest props
 * @returns Button with border/bg
 * @description contained/outlined button
 */

export const Button = ({ className = "", variant = "contained", ...rest }) => {
  return (
    <button
      className={`${
        variant === "contained" ? containedBtn : outlinedBtn
      } ${primaryBtn} ${className}`}
      {...rest}
    />
  );
};
