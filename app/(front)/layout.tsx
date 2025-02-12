// import Footer from '@/components/FrontEnd/Footer'
import Navbar from '@/components/FrontEnd/Navbar';
import React, { ReactNode } from 'react';
import Footer from '@/components/FrontEnd/Footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-200 min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer menuItems={[]} />
    </div>
  );
}
