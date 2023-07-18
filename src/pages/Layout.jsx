import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//icons
import Brightness5Icon from "@mui/icons-material/Brightness5";
import DarkModeIcon from "@mui/icons-material/DarkMode";
//Context
import ContextTheme from "../context/ContextTheme";
import { Button } from "@mui/material";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Layout() {
  const { isDarkTheme, setIsDarkTheme } = useContext(ContextTheme);
  const [linkActive, setLinkActive] = useState("/");
  let location = useLocation();
  useEffect(() => {
    setLinkActive(location.pathname);
  }, [location]);
  console.log(ContextTheme);
  return (
    <Disclosure
      as="nav"
      className={`${isDarkTheme ? "bg-gray-800" : "bg-slate-200"}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  className={`inline-flex items-center justify-center rounded-md p-2 ${
                    isDarkTheme
                      ? "text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-white"
                      : "text-gray-800 hover:bg-slate-500 hover:text-slate-700 focus:ring-slate-100"
                  }  focus:outline-none focus:ring-2 focus:ring-inset `}
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <Link to={"/"}>
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src="./assets/letter-n.png"
                      alt="Your Company"
                    />
                  </Link>
                  <Link to={"/"}>
                    <img
                      className="hidden h-12 w-12 w-auto lg:block"
                      src="./assets/letter-n.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href === linkActive
                            ? `${
                                isDarkTheme
                                  ? "bg-gray-900 text-white"
                                  : "bg-slate-300 text-black"
                              } `
                            : `${
                                isDarkTheme
                                  ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                                  : "text-gray-600 hover:bg-gray-300 hover:text-black"
                              }`,
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <Button onClick={() => setIsDarkTheme(!isDarkTheme)}>
                  {isDarkTheme ? <DarkModeIcon /> : <Brightness5Icon />}
                </Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? `${
                          isDarkTheme
                            ? "bg-gray-900 text-white"
                            : "bg-gray-300 text-black"
                        } `
                      : `${
                          isDarkTheme
                            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                            : "text-gray-600 hover:bg-gray-300 hover:text-black"
                        } `,
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Layout;
