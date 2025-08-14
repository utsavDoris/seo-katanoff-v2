"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { HeaderLinkButton, LinkButton } from "./button";
import logo from "@/assets/images/logo.webp";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsMenuOpen,
  setIsWhatWeBuyDropDownOpen,
  setIsWhatWeSellDropDownOpen,
} from "@/store/slices/commonSlice";
import { DropDown } from "./dynamiComponents";
import { usePathname } from "next/navigation";
import CustomImage from "./customImage";
import { useWindowSize } from "@/utils/hooks";

const Header = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { isMenuOpen, isWhatwebuyDropDownOpen, isWhatwesellDropDownOpen } =
    useSelector(({ common }) => common);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const size = useWindowSize();

  const toggleMenu = () => dispatch(setIsMenuOpen(!isMenuOpen));

  const whatWeSellDropDownList = [
    {
      href: "/rare-coins-collection",
      title: "Rare Coins & Collections",
    },
    {
      href: "/gold-silver-platinum",
      title: "Gold, Silver, Platinum",
    },
    { href: "/estate-jewelry", title: "Estate Jewelry" },
    { href: "/diamond-jewelry", title: "Lab Diamond Jewelry" },
    { href: "/watches", title: "Watches " },

    {
      href: "/vintage-platinum-jewelry",
      title: "Vintage Platinum Jewelry",
    },
  ];

  const whatWeBuyDropDownList = [
    {
      href: "/rare-coins-collection",
      title: "Rare Coins & Collections",
    },
    {
      href: "/gold-silver-platinum",
      title: "Gold, Silver, Platinum",
    },
    { href: "/estate-jewelry", title: "Estate Jewelry" },

    { href: "/watches", title: "Watches " },
    {
      href: "/vintage-platinum-jewelry",
      title: "Vintage Platinum Jewelry",
    },
  ];

  const menuList = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    {
      label: "What We Buy",
      dropDown: whatWeBuyDropDownList,
      isDropDownOpen: isWhatwebuyDropDownOpen,
      setIsDropDownOpen: (value) => dispatch(setIsWhatWeBuyDropDownOpen(value)),
    },
    {
      label: "What We Sell",
      dropDown: whatWeSellDropDownList,
      isDropDownOpen: isWhatwesellDropDownOpen,
      setIsDropDownOpen: (value) =>
        dispatch(setIsWhatWeSellDropDownOpen(value)),
    },
    { href: "/labgrown-diamond", label: "Lab Grown Diamonds" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (
          currentScrollY > lastScrollY &&
          currentScrollY > 300 &&
          isMenuOpen !== true
        ) {
          setIsHeaderVisible(false);
          dispatch(setIsWhatWeSellDropDownOpen(false));
          dispatch(setIsWhatWeBuyDropDownOpen(false));
        } else {
          setIsHeaderVisible(true);
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const closeAllDropdown = useCallback(() => {
    dispatch(setIsWhatWeSellDropDownOpen(false));
    dispatch(setIsWhatWeBuyDropDownOpen(false));
    dispatch(setIsMenuOpen(false));
  }, [dispatch]);
  const isDynamicHeight = pathname === "/" || pathname === "/labgrown-diamond";

  return (
    <header
      className={`fixed w-full z-50 transition-transform duration-300 bg-black  ${
        isHeaderVisible
          ? "translate-y-0"
          : "-translate-y-[120px] xl:-translate-y-[140px]"
      } ${
        isDynamicHeight
          ? lastScrollY < 100 && !isMenuOpen
            ? "bg-black/70"
            : ""
          : null
      } `}
    >
      <div className="container">
        <div className="mx-auto flex gap-2 xxs:gap-3 xs:gap-4 items-center justify-between py-4 lg:py-3 2xl:py-6">
          <div className="flex items-center ">
            <Link href="/">
              <CustomImage
                srcAttr={logo}
                titleAttr=""
                altAttr=""
                className="object-cover w-[100px] md:w-[120px] 2xl:w-[130px] "
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="gap-0 2xl:gap-0 flex items-center">
              {menuList.map((item) =>
                item.dropDown ? (
                  <li key={item.label}>
                    <DropDown
                      title={item.label}
                      menuList={item.dropDown}
                      onToggle={() => setIsMenuOpen(false)}
                      isDropDownOpen={item.isDropDownOpen}
                      setIsDropDownOpen={item.setIsDropDownOpen}
                    />
                  </li>
                ) : (
                  <HeaderLinkButton
                    key={item?.label}
                    href={item?.href}
                    onClick={closeAllDropdown}
                  >
                    {item?.label}
                  </HeaderLinkButton>
                )
              )}
            </ul>
          </nav>

          {/* Contact Button - Desktop */}
          <LinkButton
            href="/contact-us"
            arrow={true}
            className="hidden lg:flex !py-0 lg:!h-[2.3rem] 4xl:!h-[3rem]"
          >
            Contact Us
          </LinkButton>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-1.5 xxs:p-2 hover:bg-white/10 rounded-full text-white transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <RxCross2 className="w-5 h-5 xxs:w-6 xxs:h-6" />
            ) : (
              <IoMenu className="w-5 h-5 xxs:w-6 xxs:h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <nav className="text-center h-screen px-2 xxs:px-3 xs:px-4  py-2 flex flex-col gap-3">
                {menuList.map((item) =>
                  item.dropDown ? (
                    <DropDown
                      key={item.label}
                      title={item.label}
                      menuList={item.dropDown}
                      isDropDownOpen={item.isDropDownOpen}
                      setIsDropDownOpen={item.setIsDropDownOpen}
                    />
                  ) : (
                    <HeaderLinkButton
                      key={item?.label}
                      href={item?.href}
                      onClick={() => dispatch(setIsMenuOpen(false))}
                      className="w-full justify-center rounded-lg"
                    >
                      {item?.label}
                    </HeaderLinkButton>
                  )
                )}
                <div className="justify-center flex">
                  <LinkButton
                    href="/contact"
                    onClick={() => dispatch(setIsMenuOpen(false))}
                    className="!px-20 lg:!px-auto mt-2 "
                    arrow={true}
                  >
                    Contact Us
                  </LinkButton>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
