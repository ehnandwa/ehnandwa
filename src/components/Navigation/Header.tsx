import React, { useState } from "react"
import Link from "next/link"
import OpenMobileMenuIcon from "@evans/components/Icons/Button/OpenMobileMenuIcon"
import CloseMobileMenuIcon from "@evans/components/Icons/Button/CloseMobileMenuIcon"
import MenuItem from "@evans/components/MenuItem/MenuItem"

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <nav className=" fixed-nav ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div>
                <Link href="/">
                  <a className="">
                    <span>EN</span>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hiddenx space-x-16">
              <Link href="/">
                <a className="home ">Home</a>
              </Link>
              <Link href="/">
                <a className="blog">Blog</a>
              </Link>
            </div>

            <div className="hidden-y">
              <a href="" className="resume">
                Resume
              </a>
            </div>

            <div className="md:hidden flex items-center ">
              {showMenu ? (
                <CloseMobileMenuIcon
                  className="h-6 w-6"
                  onClick={() => setShowMenu(!showMenu)}
                />
              ) : (
                <OpenMobileMenuIcon
                  className="h-6 w-6 mr-2 "
                  onClick={() => setShowMenu(!showMenu)}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="relative ">
          <div className=" pt-12 flex w-full absolute">
            <div className="flex bg-gray-1 w-full flex-col">
              <MenuItem link="/" name="Home" />
              <MenuItem link="/" name="Blog" />
              <MenuItem link="/" name="Resume" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
export default Header
