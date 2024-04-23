import React from "react";
import {CodeBracketIcon, EyeIcon} from "@heroicons/react/24/outline"
import Link from "next/link";

function ProjectCard({ title, desc, img , githubLink , livelink}) {
  return (
    <div className="my-8 md:my-0">
      <div
        className="h-52 md:h-74 rounded-t-2xl relative group"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div
          className="overlay flex items-center justify-center rounded-t-2xl absolute  top-0 left-0 w-full h-full bg-zinc-700 bg-opacity-0
        hidden group-hover:flex group-hover:bg-opacity-60 transition-all duration-1000 "
        >
          {githubLink != null ?<Link href={githubLink} className="rounded-full mx-2 border-2 border-stone-600 h-14 w-14 relative hover:border-white group/link">
            <CodeBracketIcon className=" h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-600 group-hover/link:text-white"/>
            </Link>: null } 
            {livelink != null ?<Link  href={livelink} className="rounded-full border-2 mx-2 border-stone-600 h-14 w-14 relative hover:border-white group/link">
            <EyeIcon className=" h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-stone-600 group-hover/link:text-white"/>
            </Link>:null  }
        </div>
      </div>

      <div className="text-white rounded-b-2xl bg-slate-800 md:py-6 md:px-4 px-2 py-3">
        <h4 className="text-xl font-semibold md:mb-4 mb-2"> {title}</h4>
        <p className="text-slate-300">{desc}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
