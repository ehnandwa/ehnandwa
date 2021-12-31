import React from "react";

function Header() {
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-gray-900  py-4 md:px-10 px-7">
        <div className="flex items-center justify-center overflow-hidden  rounded-full">
          <div className=" flex items-center justify-center ">
            <div className="w-16 h-16 animate-spin bg-gradient-to-r from-rose-500 via-indigo-500 to-green-500 relative rounded-full">
              <div className="top-1/2 left-1/2 w-10 h-10 absolute transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 border-2 rounded-full">
                <div className="top-1/2 left-1/2 w-26 h-26 relative transform  bg-gray-900  rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;
