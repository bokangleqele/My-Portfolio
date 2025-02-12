import { cn } from "@/lib/utils";
import Image from "next/image";



interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  subtitle?: string;
  rotate?: "x" | "y";
}

interface AboutMeProps extends React.HTMLAttributes<HTMLDivElement> {
  rotate?: "x" | "y";
  className?: string;
}

export default function AboutMe({ rotate = "y", className, ...props }: AboutMeProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4" {...props}>
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Skills</h1>
      </div>

      {/* Flex Container for Cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {[{
          title: "Web Development",
          image: "/software.jpg",
          subtitle: "Front End developer",
          description: "Proficient in HTML, CSS, JavaScript, React, and modern frameworks. Skilled in building responsive, user-friendly websites with a focus on performance and accessibility.",
        },
        {
          title: "UI/UX Designer",
          image: "/web2.jpg",
          subtitle: "Figma designer",
          description: "A creative UI/UX designer proficient in Figma, specializing in crafting visually appealing and user-friendly designs.",
        }, {
          title: "Mobile Application",
          subtitle: "Mobile app developer",
          image: "/iphone_640.jpg",
          description: "React Native and Expo Go developer, specializing in cross-platform mobile app development.",
        }].map((card, index) => (
          <FlipCard key={index} {...card} rotate={rotate} className={className} />
        ))}
      </div>

      {/* Experience Section */}
      <SectionHeader title="Experience" />
      <FlipCard
        title="Software Engineer"
        subtitle="Aug 2024 - Present"
        image="/computer_640.jpg"
        description="Responsibilities include developing user-friendly websites and collaborating with teammates using version control."
        rotate={rotate}
        className={className}
      />

      {/* Educational Background */}
      <SectionHeader title="Educational Background" />
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {[{
          title: "BSc Physics & Computer Science",
          subtitle: "2020 - 2024",
          image: "/varsity.jpg",
          description: "Double major in physics and computer science. During my final year project in physics, I studied correlation between energy bandgap and dielectric constant of semiconductor materials at a nanoscale.",
        }, {
          title: "LGCSE",
          subtitle: "2015 - 2019",
          image: "/school_640.jpg",
          description: "Successfully completed the LGCSE certificate. Having also obtained the ICT certificate.",
        }].map((card, index) => (
          <FlipCard key={index} {...card} rotate={rotate} className={className} />
        ))}
      </div>
    </div>
  );
}

function FlipCard({ image, title, subtitle, description, rotate = "y", className, ...props }: FlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div className={cn("group h-72 w-56 [perspective:1000px]", className)} {...props}>
      <div className={cn("relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]", self[0])}>
        {/* Front */}
        <div className="absolute h-full w-full [backface-visibility:hidden]">


      <Image src={image} alt={title} width={500} height={500} className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-black/40" 
      />

          <div className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</div>
        </div>

        {/* Back */}
        <div className={cn("absolute h-full w-full rounded-2xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]", self[1])}>
          <div className="flex min-h-full flex-col gap-2">
            <h1 className="text-xl font-bold text-white">{subtitle}</h1>
            <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center mt-8 mb-4">
      <h1 className="text-3xl font-bold text-indigo-600">{title}</h1>
    </div>
  );
}
