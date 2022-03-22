export default function Badge({ children }) {
   return (
      <div className="inline-flex bg-black bg-opacity-20 px-2 py-1 rounded text-sm space-x-2">
         <span className="text-white">{children}</span>
      </div>
   )
}