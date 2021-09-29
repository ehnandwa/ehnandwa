import React from "react"

// @ts-ignore
function MenuItem({ link, name }) {
  return (
    <a
      href={link}
      className="block px-3 py-2 rounded-md text-base font-medium text-blue-10  "
    >
      {name}
    </a>
  )
}

export default MenuItem
