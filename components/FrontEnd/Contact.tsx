//testing code to production

"use client";
import React from "react";

const contactMethods = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        contact: "Ha Thetsane Lesia, Maseru 100, Lesotho",
        title: "Residence"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        contact: "+266 6332 5395",
        title: "Phone"
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
        ),
        contact: (
            <a
                href="mailto:bokangleqele7@gmail.com"
                className="text-blue-500 underline hover:text-blue-700"
            >
                bokangleqele7@gmail.com
            </a>
        ),
        title: "Email"
    },
    
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 100 12 6 6 0 000-12zm3 10v-2a1.5 1.5 0 00-1.5-1.5h-3A1.5 1.5 0 0013 18v2m3-12v.01M12 10h3.993v3.993H12V10z" />
            </svg>
        ),
        contact: (
            <a
                href="https://www.linkedin.com/in/bokang-leqele-03a1882b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
            >
                https://www.linkedin.com/in/bokang-leqele-03a1882b1/
            </a>
        ),
        title: "LinkedIn"
    },
    
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 .75a11.25 11.25 0 00-3.645 21.896c.288.053.392-.125.392-.277 0-.137-.005-.5-.007-.98-1.575.344-1.91-.76-2.033-1.457-.073-.314-.39-.786-.664-.943-.227-.127-.552-.437-.005-.446.512-.008.877.471.999.665.584 1.003 1.526.715 1.9.548.06-.422.229-.715.416-.88-1.657-.187-3.403-.83-3.403-3.698 0-.817.292-1.485.772-2.007-.077-.188-.335-.938.073-1.956 0 0 .628-.2 2.057.765a7.144 7.144 0 013.75 0c1.428-.965 2.057-.765 2.057-.765.407 1.018.15 1.768.073 1.956.48.522.772 1.19.772 2.007 0 2.877-1.75 3.509-3.413 3.69.236.203.447.608.447 1.226 0 .885-.007 1.6-.007 1.817 0 .152.102.332.395.276A11.25 11.25 0 0012 .75z" />
            </svg>
        ),
        contact: <a href="https://github.com/bokangleqele" target="_blank" rel="noopener noreferrer "  className="text-blue-500 underline hover:text-blue-700">https://github.com/bokangleqele</a>,
        title: "GitHub"
    }
];



export function ContactInfo() {
    return (
        <div className="p-10 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-800 md:px-8">
                <div className="max-w-xl space-y-3 text-center mx-auto">
                    <p className="text-3xl text-gray-800 font-semibold sm:text-4xl">
                        Know where you can find me
                    </p>
                    <p className="mt-2">
                        Looking forward to working with you
                    </p>
                </div>
                <div>
                    <ul className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
                        {contactMethods.map((item, idx) => (
                            <li key={idx} className="flex flex-col items-center">
                                <div className="flex-none text-gray-800 mb-2">
                                    {item.icon}
                                </div>
                                <h4 className="text-gray-800 text-lg font-medium">{item.title}</h4>
                                <p className="text-base text-center">{item.contact}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}