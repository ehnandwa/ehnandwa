import React from "react"
import Link from "next/link"
import OpenMobileMenuIcon from "@evans/components/Icons/Button/OpenMobileMenuIcon"

function Header() {
  return (
    <header className="relative">
      <nav className="header">
        <div className="flex relative items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a>
              <span className="font-semibold text-xl lg:ml-64 tracking-tight">
                EHN
              </span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button type="button" className="click-btn">
            <OpenMobileMenuIcon className="fill-current h-3 w-3" />
          </button>
        </div>
        <div className="w-full  block hidden flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm space-x-10 lg:flex-grow">
            <a className="block mt-4 lg:inline-block  lg:mt-0 text-teal-200 hover:text-white mr-4">
              Home
            </a>
            <a className="block mt-4 lg:inline-block  lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>
          <div className="lg:mr-44">
            <Link href="/">
              <a className="resume">Resume</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
