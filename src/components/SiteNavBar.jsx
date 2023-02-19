import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const SiteNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cArea, setCArea] = useState(false);
  const router = useRouter();
  const active = "text-red-600";
  const normal = "text-gray-800";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto py-4  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <div className="flex-shrink-0 ">
              <Link href="/" className="">
                <Image
                  src="/logo.png"
                  alt="First Line Logistics Logo"
                  width={60}
                  height={60}
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex gap-4 items-baseline">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === "/" ? active : normal
                  }  hover:text-gray-300`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === "/about" ? active : normal
                  }  hover:text-gray-300`}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === "/services" ? active : normal
                  }  hover:text-gray-300`}
                >
                  Services
                </Link>
                <div
                  onMouseEnter={() => setCArea(true)}
                  onMouseLeave={() => setCArea(false)}
                  className="inline px-3 py-2 rounded-md "
                >
                  <p
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      router.pathname === "/tracking" ||
                      router.pathname === "/quotation" ||
                      router.pathname === "/pickup-request" ||
                      router.pathname === "/login" ||
                      router.pathname === "/account"
                        ? active
                        : normal
                    }  hover:text-gray-300`}
                  >
                    Client Area <span>{cArea ? "△" : "▽"}</span>
                  </p>
                  <div
                    className={`absolute ${
                      cArea ? "block" : "hidden"
                    } flex flex-col w-40 py-4 rounded-lg bg-white shadow-lg z-[5000]`}
                  >
                    <Link
                      href="/tracking"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === "/tracking" ? active : normal
                      }  hover:text-gray-300`}
                    >
                      Track an Item
                    </Link>
                    <Link
                      href="/quotation"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === "/quotation" ? active : normal
                      }  hover:text-gray-300`}
                    >
                      Quotation
                    </Link>
                    <Link
                      href="/pickup-request"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === "/pickup-request" ? active : normal
                      }  hover:text-gray-300`}
                    >
                      Pickup Request
                    </Link>
                    <Link
                      href="/login"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === "/login" ? active : normal
                      }  hover:text-gray-300`}
                    >
                      Login
                    </Link>
                    <Link
                      href="/account"
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        router.pathname === "/account" ? active : normal
                      }  hover:text-gray-300`}
                    >
                      My Account
                    </Link>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === "/contact" ? active : normal
                  }  hover:text-gray-300`}
                >
                  Contact
                </Link>
                <Link
                  href="/career"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === "/career" ? active : normal
                  }  hover:text-gray-300`}
                >
                  Career
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              router.pathname === "/" ? active : normal
            }  hover:text-gray-300`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              router.pathname === "/about" ? active : normal
            }  hover:text-gray-300`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              router.pathname === "/services" ? active : normal
            }  hover:text-gray-300`}
          >
            Services
          </Link>
          <div
            onClick={() => setCArea(!cArea)}
            className="inline px-3 py-2 rounded-md"
          >
            <p
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                router.pathname === "/tracking" ||
                router.pathname === "/quotation" ||
                router.pathname === "/pickup-request" ||
                router.pathname === "/login" ||
                router.pathname === "/account"
                  ? active
                  : normal
              }  hover:text-gray-300`}
            >
              Client Area <span>{cArea ? "△" : "▽"}</span>
            </p>
            <div
              className={`${
                cArea ? "block" : "hidden"
              } flex flex-col w-40 py-4   z-[5000]`}
            >
              <Link
                href="/tracking"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/tracking" ? active : normal
                }  hover:text-gray-300`}
              >
                Track an Item
              </Link>
              <Link
                href="/quotation"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/quotation" ? active : normal
                }  hover:text-gray-300`}
              >
                Quotation
              </Link>
              <Link
                href="/pickup-request"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/pickup-request" ? active : normal
                }  hover:text-gray-300`}
              >
                Pickup Request
              </Link>
              <Link
                href="/login"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/login" ? active : normal
                }  hover:text-gray-300`}
              >
                Login
              </Link>
              <Link
                href="/account"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  router.pathname === "/account" ? active : normal
                }  hover:text-gray-300`}
              >
                My Account
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              router.pathname === "/contact" ? active : normal
            }  hover:text-gray-300`}
          >
            Contact
          </Link>
          <Link
            href="/career"
            className={`px-3 py-2 rounded-md text-sm font-medium ${
              router.pathname === "/career" ? active : normal
            }  hover:text-gray-300`}
          >
            Career
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SiteNavBar;
