'use client';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TransitionPanel } from '@/components/motion-primitives/transition-panel';
import React, { useState } from 'react';

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  secondTitle?: string;
  rotate?: "x" | "y";
}

interface AboutMeProps extends React.HTMLAttributes<HTMLDivElement> {
  rotate?: "x" | "y";
  className?: string;
}

export default function AboutMe({ rotate = "y", className, ...props }: AboutMeProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const ITEMS = [
    {
      title: 'Energy access fellow',
      subtitle: 'OnePower | May 2025 - Present',
      content:
        'Actively contributing to the development and optimization of decentralized energy solutions aimed at expanding access to reliable electricity in underserved communities.',
    },
    {
      title: 'Young Ai Leader Volunteer',
      subtitle: 'Young Ai Leaders member | Feb 2025 - Present',
      content:
        'A young AI leader with a passion for innovation and technology. As a member of the Young AI Leaders community Lesotho hub, I am dedicated to leveraging the power of artificial intelligence to drive meaningful change and solve real-world problems.',
    },
    {
      title: 'Software Engineer',
      subtitle: 'STEAMLes | Feb 2025 - May 2025',
      content:
        'Gained experience working with microcontrollers (Arduino), participated in outreach activities, and conducted research on robotics technologies and market trends.',
    },
    {
      title: 'Software Engineer',
      subtitle: 'Nucleus dev Pty Ltd | Aug 2024 - Jan 2025',
      content:
        'Frontend Developer specializing in building responsive and user-friendly websites and mobile applications using technologies like React, React Native, and modern JavaScript frameworks.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8" {...props}>
      {/* Header Section */}
      <SectionHeader title="Experience" />

      <div className="w-full max-w-5xl">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6 mb-4">
          {ITEMS.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-md px-4 py-1 text-sm sm:text-base font-medium transition-colors ${
                activeIndex === index
                  ? 'bg-zinc-200 text-zinc-900 dark:bg-indigo-800 dark:text-zinc-100'
                  : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="overflow-hidden">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            variants={{
              enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
              center: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
            }}
          >
            {ITEMS.map((item, index) => (
              <div
                key={index}
                className="py-10 flex flex-col items-center text-center px-4"
              >
                <h3 className="mb-2 text-xl font-semibold text-zinc-800 dark:text-indigo-400">
                  {item.subtitle}
                </h3>
                <p className="max-w-3xl text-zinc-600 dark:text-white text-base sm:text-lg">
                  {item.content}
                </p>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center mt-12 mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Skills</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12 px-2">
        {[
          {
            title: "Web Development",
            image: "/software.jpg",
            subtitle: "Front End developer",
            description:
              "Proficient in HTML, CSS, JavaScript, React, and modern frameworks, with a focus on creating responsive, accessible, and high-performance websites.",
          },
          {
            title: "UI/UX Designer",
            image: "/web2.jpg",
            subtitle: "Figma designer",
            description:
              "A skilled UI/UX designer with expertise in Figma, specializing in creating visually engaging and user-centered designs that enhance the overall user experience.",
          },
          {
            title: "Mobile Application",
            subtitle: "Mobile app developer",
            image: "/iphone_640.jpg",
            description:
              "Specialized in cross-platform mobile app development using React Native and Expo, delivering high-quality solutions for both iOS and Android platforms.",
          },
        ].map((card, index) => (
          <FlipCard key={index} {...card} rotate={rotate} className={className} />
        ))}
      </div>

      {/* Educational Background */}
      <SectionHeader title="Educational Background" />
      <div className="flex flex-wrap justify-center gap-6 mb-12 px-2">
        {[
          {
            title: "BSc Physics & Computer Science",
            subtitle: "2020 - 2024",
            image: "/varsity.jpg",
            description:
              "Double major in Physics and Computer Science, with a final year project focusing on the correlation between energy bandgap and dielectric constant of semiconductor materials at the nanoscale.",
          },
          {
            title: "LGCSE",
            subtitle: "2015 - 2019",
            image: "/school_640.jpg",
            description:
              "Successfully completed the LGCSE certificate. Having also obtained the ICT certificate.",
          },
          {
            title: "Cisco",
            subtitle: "Feb - 2025",
            image: "/cisco.png",
            description:
              "Completed the Introduction to Data Science certificate from Cisco.",
          },
        ].map((card, index) => (
          <FlipCard key={index} {...card} rotate={rotate} className={className} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ image, title, subtitle, secondTitle, description, rotate = "y", className, ...props }: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group w-72 sm:w-64 h-80 [perspective:1000px]", className)} {...props}>
      <div className={cn("relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]", self[0])}>
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40"
          />
          <div className="absolute bottom-4 left-4 text-lg font-bold text-white">{title}</div>
          <div className="absolute top-4 left-4 text-white">
            {secondTitle && <h3 className="text-base font-medium">{secondTitle}</h3>}
          </div>
        </div>

        {/* Back */}
        <div className={cn("absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]", self[1])}>
          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-lg font-bold text-white">{subtitle}</h1>
            <p className="mt-1 border-t border-t-gray-200 py-4 text-sm font-medium leading-snug text-gray-100">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mt-10 mb-6 px-4">
      <h1 className="text-3xl font-bold text-indigo-600">{title}</h1>
    </div>
  );
}
