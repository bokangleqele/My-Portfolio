"use client"; // This directive is required for client components in Next.js
import React from "react";

export function AboutMe() {
    return (
        <div className="p-10">
            <div className="max-w-screen-xl mx-auto px-4 dark:text-white md:px-8">
                <div className="max-w-xl space-y-3 text-center mx-auto">
                    <h1 className="text-3xl font-semibold sm:text-4xl dark:text-white">
                        About Me
                    </h1>
                    <p className="mt-4 text-base">
                        Hello! I’m Bokang Leqele, an IT technician and software engineering intern passionate about solving complex problems and creating efficient solutions. My journey in tech began with a BSc in Physics and Computer Science, providing a solid foundation in analytical thinking and problem-solving. I've gained hands-on experience in coding, troubleshooting, and systems administration, all skills I continuously hone through my work and side projects.
                    </p>
                    <p className="mt-4 text-base">
                        I aim to bridge the gap between technology and practical applications, striving to make systems work seamlessly. Currently, I’m eager to grow as a developer, learning new technologies and frameworks to better serve in my roles and enhance user experiences. Feel free to connect with me through the details below!
                    </p>
                </div>
            </div>
        </div>
    );
}
