import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import data from "data/terms.json"

export default function Term({ isOpen, name, description, related, onClose, onNext, onPrev, onSelectTermSlug }) {

   /**
    * Get related terms from array
    */
   const relatedTerms = related?.length ? related.map(termCode => data.terms.find(term => term.termCode === termCode)) : []

   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={onClose}
         >
            <div className="min-h-screen">
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <Dialog.Overlay className="fixed bg-gradient-to-b from-blue-500 to-blue-600 inset-0" />
               </Transition.Child>

               <Transition.Child
                  as={Fragment}
                  className="relative z-10 inset-0 px-4 py-4 md:py-8 md:px-8 lg:px-12 max-w-7xl mx-auto"
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-x-5"
                  enterTo="opacity-100 translate-x-0"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-x-0"
                  leaveTo="opacity-0 translate-x-5"
               >
                  <div>

                     {/* Close */}
                     <button
                        type="button"
                        onClick={onClose}
                        className="font-medium underline text-white hover:text-blue-200 duration-100 mb-8 focus:outline-none"
                     >
                        Back to dictionary
                     </button>

                     <div className="flex justify-between space-x-8 items-start">
                        <div>
                           <Dialog.Title as="h2" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono">
                              {name}
                           </Dialog.Title>
                        </div>
                        <div className="flex items-center">
                           <button type="button" className="block p-1 text-white w-10 h-10" onClick={onPrev}>
                              <ArrowLeftIcon />
                           </button>
                           <button type="button" className="block p-1 text-white w-10 h-10" onClick={onNext}>
                              <ArrowRightIcon />
                           </button>
                        </div>
                     </div>

                     <Dialog.Description as="div" className="mt-6 text-xl md:text-2xl text-blue-200">
                        <div id="term-content" dangerouslySetInnerHTML={{ __html: description }}></div>
                     </Dialog.Description>

                     {/* Related terms */}
                     {
                        relatedTerms?.length > 0 && (
                           <div className="space-y-2 font-mono mt-24">
                              <h3 className="text-white font-bold">Related terms</h3>
                              {relatedTerms.map((term, index) => (
                                 <button
                                    key={term.name}
                                    type="button"
                                    onClick={() => onSelectTermSlug(term.termCode)}
                                    className="block text-blue-200 hover:text-white duration-100"
                                 >
                                    {term.name}
                                 </button>

                              ))}
                           </div>
                        )
                     }

                  </div>
               </Transition.Child>
            </div>
         </Dialog>
      </Transition>
   )
}