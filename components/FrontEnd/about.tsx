"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-start pt-10 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">About Me</h1>
      
      {/* First Subheading */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4"> {/* Flex container for cards */}
        {/* First Card */}
        <div className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
               "bg-[url(/sourcee_640.jpg)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/Bokang.jpg"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Bokang Leqele
                </p>
                <p className="text-sm text-gray-400">Front end Developer</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Web Development
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
               Proficient in HTML, CSS, JavaScript, React, Next.js, Typescript and morden frameworks
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/iphone_640.jpg)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/Bokang.jpg" // Replace with the second avatar image
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Bokang Leqele
                </p>
                <p className="text-sm text-gray-400">Front end Developer</p>
              </div>
            </div>
            <div className=" text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Mobile Application
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                Confident with using React Native and Expo go App.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Subheading */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 mt-10">Experiences</h2>
      <div className="flex flex-wrap justify-center gap-4"> {/* Flex container for cards */}
        {/* Third Card */}
        <div className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/computer_640.jpg)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/Bokang.jpg"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Bokang Leqele
                </p>
                <p className="text-sm text-gray-400">Software Engineer</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Software Engineer
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
              Currently a software engineer intern at Nucleus Pty Ltd, Maseru, Lesotho
              </p>
            </div>
          </div>
        </div>

        {/* Fourth Card */}
        
      </div>

      {/* Third Subheading */}
      <h2 className="text-2xl font-semibold mb-4 mt-10 text-gray-700">Educational Background</h2>
      <div className="flex flex-wrap justify-center gap-4"> {/* Flex container for cards */}
        {/* First Card */}
        <div className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/university_640.jpg)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/Bokang.jpg"
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Bokang Leqele
                </p>
                <p className="text-sm text-gray-400">Bsc Physics & Computer science</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                Bsc Physics & Computer Science
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                2024: Obtained a degree in Physics & Computer Science
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="max-w-xs w-full group/card">
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
              "bg-[url(/school_640.jpg)] bg-cover"
            )}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src="/Bokang.jpg" // Replace with the second avatar image
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex flex-col">
                <p className="font-normal text-base text-gray-50 relative z-10">
                  Bokang Leqele
                </p>
                <p className="text-sm text-gray-400">LGCSE</p>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                LGCSE
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                2019: Successfully completed Lesotho General Certificate of Secondary Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
