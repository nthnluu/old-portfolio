import React from "react";
import BlogCard from "../components/BlogCard";
import Head from "next/head";

const pageData = {
    projects: [{
        title: "Sheetroom",
        description: "An online assessment platform with a drag-and-drop quiz builder, embeddable graphs and formulas, and a customizable scoring algorithm.",
        image: "/sheetroom_ss.png",
        href: "https://www.sheetroom.com"
    }, {
        title: "Venture at Brown",
        description: "A guide that helps Brown and RISD students navigate the entrepreneurial resources on College Hill by providing personalized resource recommendations.",
        image: "unexperienced_brown.svg",
        href: "https://ventureatbrown.com/"
    }, {
        title: "Is it GG?",
        description: "A binary logistic algorithm that predicts whether you won or lost a League game based on your current in-game stats.",
        image: "/league.jpg",
        href: "https://github.com/nthnluu/is-it-gg",
    }, {
        title: "Mixtape",
        description: "Powered by the Spotify API and your preferences, Mixtape lets you quickly preview songs and add them to your playlists.",
        image: "/mixtape.png",
        href: "https://mixtape.nthnluu.vercel.app"
    }],
    skills: [
        {
            title: "Languages",
            items: ["Javascript", "Typescript", "Python", "Swift", "HTML", "CSS", "SCSS", "Pyret", "Racket"]
        },
        {
            title: "Frameworks",
            items: ["React", "Next.js", "Vue", "Django", "Node.js", "Express", "SwiftUI", "UI Kit", "Hasura", "Apollo", "Storyboards", "React Native"]
        },
        {
            title: "APIs/Databases",
            items: ["Postgres", "MongoDB", "Cloud Firestore", "CoreData", "Realm", "GraphQL", "REST"]

        },
        {
            title: "Web Libraries and Services",
            items: ["Heroku", "AWS Lambda", "Firebase Authentication", "Google Cloud Functions", "Pandas", "Docker", "Git", "Wordpress", "Jupyter Notebook"]
        },
        {
            title: "Other Tools",
            items: ["Google Analytics", "Google Workspace", "Microsoft 365", "Photoshop", "Illustrator", "Adobe XD", "After Effects", "Final Cut Pro"]
        }
    ]

}

const SkillSection = ({title, skills}) => (<div className="mb-8">
    <h2 className="text-sm uppercase text-gray-700 font-medium mb-2">{title}</h2>
    <ul className="flex justify-start items-center flex-wrap">
        {skills.map((skill, index) => <li key={index}
                                          className="border shadow-sm md:text-lg text-gray-800 py-1 px-3 rounded-full flex-shrink-0 mr-2 mb-2">
            {skill}
        </li>)}
    </ul>
</div>)

export default () => (
    <>
        <Head>
            <title>Nathan Benavides-Luu</title>
        </Head>
        <div className="max-w-5xl mx-auto px-4 mb-24">
            <div className="flex justify-end items-center py-6 space-x-2">
                <a className="top-link" href="https://github.com/nthnluu">
                    <i className="fab fa-github"/>
                    <span className="sr-only">GitHub</span>
                </a>
                <a className="top-link" href="https://www.linkedin.com/in/nthnluu/">
                    <i className="fab fa-linkedin"/>
                    <span className="sr-only">Linkedin</span>
                </a>
                <a className="top-link w-auto text-base px-4"
                   href="https://firebasestorage.googleapis.com/v0/b/momentum-32de9.appspot.com/o/Resume%20(2).pdf?alt=media&token=d643b2d5-9442-4db3-85a3-efbaf9f294e7">
                    <i className="fas fa-file-alt mr-2 text-xl"/>
                    Resume
                </a>
            </div>
            <div className="leading-relaxed pb-12 text-gray-800">
                <h1 className="text-xl">Hello! 👋 My name is</h1>
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    <h2 className="">Nathan Benavides-Luu.</h2>
                    <h3>I build things for the web.</h3>
                </div>
                <p className="max-w-3xl mt-5 text-lg md:text-xl text-gray-700">
                    I’m a <strong>first-year computer science</strong> student at
                    <strong> Brown University</strong> and an <strong>incoming STEP intern</strong> at <strong>Google</strong>. I'm an entrepreneurial full-stack
                    developer with a passion for education technology. I explore ways to make technology more accessible
                    and
                    useful in public education. I have experience building accessible and user-friendly websites and iOS
                    apps.
                </p>
            </div>
            <div className="relative bg-gray-50 pt-16 pb-24">
                <div className="absolute inset-0">
                    <div className="bg-white h-1/3 sm:h-2/3"/>
                </div>
                <div className="relative mx-auto">
                    <div className="text-left">
                        <h2 className="text-3xl leading-9 tracking-tight font-bold text-gray-800 sm:text-4xl sm:leading-10">
                            Projects
                        </h2>
                    </div>
                    <div className="mt-12 grid gap-5 mx-auto md:grid-cols-2 lg:max-w-none">
                        {pageData.projects.map((project, index) => <BlogCard key={index} title={project.title}
                                                                             desc={project.description}
                                                                             img={project.image}
                                                                             link={project.href}/>)}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-3xl font-bold mb-4">Skills</h1>
                {pageData.skills.map((section, index) => <SkillSection key={index} title={section.title}
                                                                       skills={section.items}/>)}
            </div>
        </div>
    </>
)
