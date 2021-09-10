import React from "react"
import Link from "next/link"
import OpenMobileMenuIcon from "@evans/components/Icons/Button/OpenMobileMenuIcon"

function Header() {
  return (
    <header className="fixed ">
      <nav className="nav">
        <div className="flex justify-between">
          <div className="flex">
            <div>
              <Link href="/">
                <a className="ehn">
                  <span className="font-bold">EHN</span>
                </a>
              </Link>
            </div>
          </div>

          <div className="hiddenx">
            <Link href="/">
              <a className="py-5 px-3">Home</a>
            </Link>
            <Link href="/">
              <a className="py-5 px-3">Blog</a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/">
              <a className="resume">Resume</a>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button type="button">
              <OpenMobileMenuIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
export default Header
