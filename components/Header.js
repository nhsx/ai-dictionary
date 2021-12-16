import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline"

const SearchBox = ({ searchTerm, setSearchTerm, searchRef }) => (
   <div className="relative font-mono">
      <input
         ref={searchRef}
         type="text"
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
         className="w-full py-3 px-4 peer bg-white bg-opacity-10 border border-blue-400 placeholder:text-blue-200 text-blue-50 rounded-md text-sm focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
         placeholder="Search terms"
      />
      {!searchTerm && (
         <div className="hidden peer-focus:hidden lg:flex justify-center items-center absolute right-0 top-0 p-2 border border-transparent">
            <div className="flex-1 px-2 py-1 bg-white rounded bg-opacity-10 text-sm text-blue-200">
               /
            </div>
         </div>
      )}
   </div>
)

export default function Header({ searchTerm, setSearchTerm, searchRef }) {
   return (
      <Disclosure as="nav" className="px-4 py-4 md:py-8 md:px-8 lg:px-12 bg-blue-500">
         {({ open }) => (
            <>
               <div className="flex justify-between items-center">

                  {/* Logo / headline */}
                  <div className="flex">
                     <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-white font-mono">AI Dictionary</h1>
                     </div>
                  </div>

                  {/* Current Search */}
                  {searchTerm && (
                     <div className="hidden lg:flex text-sm text-blue-200 font-medium font-mono max-w-md text-ellipsis overflow-hidden whitespace-pre">
                        Searching for: <span className="text-blue-100">{searchTerm}</span>
                     </div>
                  )}

                  {/* Desktop search */}
                  <div className="hidden sm:ml-6 sm:flex">
                     <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchRef={searchRef} />
                  </div>

                  {/* Mobile menu toggle */}
                  <div className="flex items-center sm:hidden">
                     {/* Mobile menu button */}
                     <Disclosure.Button className="bg-white bg-opacity-10 inline-flex items-center justify-center p-2 rounded-md text-blue-50 hover:text-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                           <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                           <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                     </Disclosure.Button>
                  </div>

               </div>

               {/* Mobile menu */}
               <Disclosure.Panel className="sm:hidden pt-4">
                  <div className="py-3">
                     <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchRef={searchRef} />
                  </div>
               </Disclosure.Panel>

            </>
         )}
      </Disclosure>
   )
}