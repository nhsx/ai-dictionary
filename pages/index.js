import { Router, useRouter } from "next/router"
import { useEffect, useMemo, useRef, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { currentTermIndexState, termsState } from "atoms/dictionary"
import Term from "components/Term"
import TermList from "components/TermList"
import Footer from "components/Footer"
import Header from "components/Header"

export default function Home() {

   // Access router
   const router = useRouter()

   // Shared state
   const terms = useRecoilValue(termsState)
   const [currentTermIndex, setCurrentTermIndex] = useRecoilState(currentTermIndexState)

   // Local state 
   const searchRef = useRef(null)
   const [showTerm, setShowTerm] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')
   const [keyToggle, setKeyToggle] = useState(false)
   const filteredTerms = useMemo(() => terms?.length > 0 ? (searchTerm?.length > 0 ? terms.filter(term => term.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1).sort() : [...terms].sort()) : [], [searchTerm])
   const currentTerm = useMemo(() => currentTermIndex !== null ? filteredTerms[currentTermIndex] : null, [currentTermIndex])

   // Terms nav 
   const onPrev = () => showTerm && setCurrentTermIndex((currentTermIndex - 1) < 0 ? (terms.length - 1) : (currentTermIndex - 1))
   const onNext = () => showTerm && setCurrentTermIndex((currentTermIndex + 1) >= terms.length ? 0 : (currentTermIndex + 1))

   // Handle keyboard input 
   function handleKeyInput(e) {
      if (e.key === 'ArrowLeft') {
         onPrev()
         e.preventDefault()
      }
      if (e.key === 'ArrowRight') {
         onNext()
         e.preventDefault()
      }
      if (e.key === 'Escape') {
         setShowTerm(false)
         e.preventDefault()
      }
      if (e.key === '/') {
         searchRef.current.focus()
         e.preventDefault()
      }
      setKeyToggle(!keyToggle)
   }

   // Detect current term from URL 
   useEffect(() => {
      if(router.query.term) {
         const matchedIndex = terms.findIndex((term) => term.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') === router.query.term)
         if(matchedIndex) setCurrentTermIndex(matchedIndex)
      }
   }, [])

   // Show selected term on select
   useEffect(() => {
      if (currentTermIndex !== null && !showTerm) setShowTerm(true)
      router.push( currentTermIndex ? { pathname: '/', query: { term: currentTerm.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '') }} : '/', undefined, { shallow: true })
   }, [currentTermIndex])

   // Clear search term to allow for re-selection 
   useEffect(() => {
      if (!showTerm) setTimeout(() => setCurrentTermIndex(null), 300)
   }, [showTerm])

   // Watch for key input 
   useEffect(() => {
      window.addEventListener("keydown", handleKeyInput)
      return () => {
         window.removeEventListener("keydown", handleKeyInput)
      };
   }, [showTerm, keyToggle])

   return (

      <>

         {/* Active term */}
         <Term
            title={currentTerm}
            description={"Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."}
            isOpen={showTerm}
            related={["APIs", "Algorithm", "Analogical Reasoning"]}
            onClose={() => setShowTerm(false)}
            onNext={onNext} 
            onPrev={onPrev}
         />

         <div className="min-h-screen lg:h-screen flex flex-col">

            {/* Header */}
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchRef={searchRef} />

            {/* Main content */}
            <TermList terms={filteredTerms} isShowingTerm={showTerm} onSelectTermIndex={(index) => setCurrentTermIndex(index)} />

            {/* Footer */}
            <Footer />

         </div>

      </>
   )
}
