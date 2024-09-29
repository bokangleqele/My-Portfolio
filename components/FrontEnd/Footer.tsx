'use client'

import {Facebook, Twitter} from "lucide-react";
import Link from "next/link";
import { ModeToggle } from './ModeToggle';

export default function  Footer() {

    
    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8">
            <div className="max-w-lg sm:mx-auto sm:text-center">
                
                <p className="leading-relaxed mt-2 text-[15px]">
                    Website solely built by Bokang Leqele.
                </p>
            </div>
           
            <div className="mt-8 items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                    <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <Link href="https://www.facebook.com/profile.php?id=61554715555087">
                                    <Facebook/>
                                </Link>
                            </li>

                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <Link href="https://www.youtube.com/@Sebabatso_lesotho">
                                    <Twitter/>
                                </Link>
                            </li>

                        
                    </ul>
                    <ModeToggle />
                </div>
            </div>
            <style jsx>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
