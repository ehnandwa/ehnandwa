function Header() {
  return(
    <header className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">

          <div className="flex space-x-4">
            <div>
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <span className="font-bold">Ehn</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href=""
               className="py-2 px-3  hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Resume</a>
          </div>
        </div>
      </div>
    </header>
  )

}
export default Header
