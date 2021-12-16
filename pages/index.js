import { useEffect, useMemo, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { currentTermIndexState, termsState } from "atoms/dictionary"
import Term from "components/Term"
import TermList from "components/TermList"
import Footer from "components/Footer"
import Header from "components/Header"

export default function Home() {

   // Shared state
   const terms = useRecoilValue(termsState)
   const [currentTermIndex, setCurrentTermIndex] = useRecoilState(currentTermIndexState)

   // Local state 
   const [showTerm, setShowTerm] = useState(false)
   const [searchTerm, setSearchTerm] = useState(null)
   const filteredTerms = useMemo(() => terms?.length > 0 ? (searchTerm?.length > 0 ? terms.filter(term => term.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1).sort() : [...terms].sort()) : [], [searchTerm])
   const currentTerm = useMemo(() => currentTermIndex !== null ? filteredTerms[currentTermIndex] : null, [currentTermIndex])

   // Show selected term on select
   useEffect(() => {
      if (currentTermIndex !== null && !showTerm) setShowTerm(true)
   }, [currentTermIndex])

   // Clear search term to allow for re-selection 
   useEffect(() => {
      if (!showTerm) setTimeout(() => setCurrentTermIndex(null), 300)
   }, [showTerm])

   return (

      <>

         {/* Active term */}
         <Term
            title={currentTerm}
            description={"Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision."}
            isOpen={showTerm}
            related={["APIs", "Algorithm", "Analogical Reasoning"]}
            onClose={() => setShowTerm(false)}
         />

         <div className="min-h-screen lg:h-screen flex flex-col">

            {/* Header */}
            <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Main content */}
            <TermList terms={filteredTerms} isShowingTerm={showTerm} onSelectTermIndex={(index) => setCurrentTermIndex(index)} />

            {/* Footer */}
            <Footer />

         </div>

      </>
   )
}
