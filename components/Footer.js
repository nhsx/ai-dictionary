import { prefix } from "lib/prefix";
import Link from "next/link";

export default function Footer() {
   return (
      <footer className="px-4 py-8 md:px-8 lg:px-12 bg-blue-600">
         <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:items-center sm:space-y-0 sm:space-x-6">
            <div>
               <img src={`${prefix}/logo-inverted.svg`} alt="NHSX Logo" width={80} height={40} className="object-contain" />
            </div>
            <div className="flex flex-col items-center space-y-6 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8 font-semibold font-mono text-white">
               <Link href="#">
                  <a>
                     NHS AI Lab
                  </a>
               </Link>
               <Link href="#">
                  <a>
                     Share
                  </a>
               </Link>
               <Link href="#">
                  <a
                     target="_BLANK"
                     className="rounded-full"
                  >
                     <svg className="w-10 h-10 flex-shrink-0 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 16" fill="none">
                        <g clipPath="url(githublogo)">
                           <path fill="currentColor" fillRule="evenodd" d="M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z" clipRule="evenodd" className="jsx-1651122719"></path>
                        </g>
                        <defs>
                           <clipPath id="githublogo">
                              <path fill="transparent" d="M0 0h15.86v15.86H0z" transform="translate(.253906 .0493164)"></path>
                           </clipPath>
                        </defs>
                     </svg>
                  </a>
               </Link>
            </div>
         </div>
      </footer>
   )
}