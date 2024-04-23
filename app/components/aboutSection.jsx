"use client";
import { useState, useTransition } from "react";
import Image from "next/image";
import SectionsTab from "./sections";

const sections = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className=" pl-2">
        <li>Flutter</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Dart frog</li>
        <li>Fast API</li>
        <li>Node.js</li>
        <li>Spring Boot</li>
        <li>AWS</li>
        <li>Code Magic</li>
        <li>GitHub Actions</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul>
        <li>
          <strong>
            Bachelors of Technology in Computer Science and Engineering
          </strong>
          <br></br>
          <p className="text-slate-500 text-pretty text-sm">
            {" "}
            Guru Gobind Singh Indraprastha University
            <span className="text-slate-200 text-pretty font-semibold text-sm">
              {" "}
              CGPA 8.9{" "}
              <span className="text-slate-50000 text-pretty  text-xs">{`(till 6th sem)`}</span>
            </span>
            <br></br>
            <p className="text-slate-200 text-pretty font-semibold text-sm">
              09/2021 - 09/2025
            </p>
          </p>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="pl-2">
        <li className="my-2">
          <strong>Full Stack Developer</strong>
          <br></br>
          Nestafar Pvt Ltd, August 2023 - Present, remote<br></br>
          <ul>
            <li className="text-slate-500 text-pretty text-sm">
              Optimized app load times by 40% in areas with limited internet
              connectivity.
            </li>
          </ul>
        </li>
        <li className="my-2">
          <strong>Flutter and Backend Developer Intern</strong>
          <br></br>
          AngryBaaz Pvt Ltd, January 2023 - July 2023, remote<br></br>
          <ul>
            <li className="text-slate-500 text-pretty text-sm">
              Consolidated three separate apps into SwiftCafe, improving user
              experience and simplifying maintenance.
            </li>
          </ul>
        </li>
        <li className="my-2">
          <strong>Flutter Blog Writing Intern</strong>
          <br></br>
          Gravity Pvt Ltd, December 2022 - January 2023, remote<br></br>
          <ul>
            <li className="text-slate-500 text-pretty text-sm">
              Researched and documented 50+ Flutter widgets, optimizing user
              interface functionality.
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tabState, settabState] = useState(sections.at(0).id);
  const [isPending, startTransition] = useTransition();
  const handleTransition = (id) => {
    startTransition(() => {
      settabState(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          alt="developer image"
          src={"/images/developer.png"}
          width={500}
          height={500}
          className="rounded-3xl col-span-1   "
        />
        <div className="h-full w-full flex flex-col item-center justify-center">
          <h2 className="text-white  md:text-5xl text-4xl font-semibold text-center py-5 justify-self-center place-self-center ">
            About Me
          </h2>
          <p className="text-white text-lg text-center">
            Experienced Full Stack Developer with 1 year of experience at
            Nestafar Pvt Ltd. Proficient in multiple programming languages and
            frameworks, with a strong understanding of both front-end and
            back-end development. Seeking new opportunities to further enhance
            skills and contribute to the success of a dynamic organization
          </p>
          <div className="flex felx-row space-x-3 mt-4 ">
            {sections.map((value, index) => (
              <SectionsTab
                key={index}
                active={value.id == tabState}
                title={value.title}
                selected={() => {
                  handleTransition(value.id);
                }}
              />
            ))}
          </div>
          <div className="mt-3 ">
            {sections.find((value) => value.id === tabState).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
