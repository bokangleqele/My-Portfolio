// 'use client'

// // import { Blog } from "./Blog"
// // import Cards from "./Cards"
// // import { Carousel } from "./Carousel"
// // import FAQ from "./FAQ"
// // import Featured from "./Featured"
// // import Partner from "./Partner"

// export default function Hero() {

//   return (
//     <div className="">
//       <div className="lg:px-60 py-10">
//         {/* <Carousel /> */}
//       </div>
//       <div className="relative isolate px-6 pt-14 lg:px-8">
//         {/* <Featured />
//         <Cards />
//         <Blog />
//         <Partner />
//         <FAQ /> */}
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-white opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//         <div
//           aria-hidden="true"
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-white opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }



import React from "react";
import OrbitingItems from "@/components/FrontEnd/orbiting-items";
import { Icons } from "@/components/FrontEnd/icons";

const orbitingIcons = [
    <Icons.gitHub key="github" className="h-10 w-10 text-white" />,
    <Icons.figma key="figma" className="h-10 w-10 text-white" />,
    <Icons.linkedIn key="linkedin" className="h-10 w-10 text-white" />,
    <Icons.html key="html" className="h-10 w-10 text-white" />,
    <Icons.react key="react" className="h-10 w-10 text-white" />,
    <Icons.javascript key="javascript" className="h-10 w-10 text-white" />,
  ];
  

export default function Hero() {
    return (
        <>
            <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
                <div className="flex justify-between"></div>
                <div className="items-center space-y-2 md:flex md:space-x-6 md:space-y-0 md:ml-12"></div>
            </nav>
            <section className="py-18 dark:bg-slate-950">
                <div className="max-w-screen-xl mx-auto text-gray-600 dark:text-white gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-4xl text-gray-800 dark:text-white font-extrabold md:text-5xl">
                            Hello, I am Bokang Leqele
                        </h1>
                        <p>
                        Bokang Leqele is a software engineer with a background in Physics and Computer Science, specializing in React, React Native, TypeScript, and modern UI frameworks. With a strong analytical mindset and a focus on building high-performing, user-friendly applications, he thrives in collaborative environments and stays current with emerging technologies. Driven by a passion for problem-solving, Bokang is committed to continuous learning and delivering impactful solutions.
                        </p>
                        <p>Feel free to reach out and together, let&apos;s make the world a better place.</p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a
                                href="https://wa.me/26663325395"
                                className="block py-2 px-4 text-center text-white font-medium bg-green-500 duration-150 hover:bg-green-600 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Whatsapp
                            </a>
                            <a
                                href="mailto:bokangleqele7@gmail.com"
                                className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 dark:text-white hover:text-gray-500 dark:hover:text-blue-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex"
                            >
                                Email
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-sm relative">
                        <OrbitingItems radius={40} items={orbitingIcons} />
                    </div>
                </div>
            </section>
        </>
    );
}
