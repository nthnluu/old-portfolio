import React from "react";
import BlogCard from "../components/BlogCard";

const pageData = {
    projects: [{
        title: "Sheetroom",
        description: "An online platform for building beautiful online quizzes.",
        image: "/sheetroom_ss.png",
        href: "https://www.sheetroom.com"
    }, {
        title: "Venture at Brown",
        description: "A guide to help Brown and RISD students navigate the entrepreneurial resources on College Hill.",
        image: "https://ventureatbrown.com/placeholder_bear.svg",
        href: "https://ventureatbrown.com/"
    }, {
        title: "Swipetune",
        description: "A simple way to create playlists discover new music. Powered by the Spotify API.",
        image: "/swipetune.png",
        href: "https://www.sheetroom.com",
        inProgress: true
    }],
    skills: [
        {
            title: "Languages",
            items: ["Javascript", "Typescript", "Python", "Swift"]
        },
        {
            title: "Frameworks",
            items: ["React", "Next.js", "Vue", "Django", "SwiftUI", "UI Kit"]
        },
        {
            title: "Other Technologies",
            items: ["Heroku", "AWS Lambda", "Cloud Firestore", "Firebase Authentication", "Google Cloud Functions", "GraphQL", "REST"]
        }
    ]

}

const SkillSection = ({title, skills}) => (<div className="mb-4">
    <h2 className="text-lg mb-2">{title}</h2>
    <ul className="flex justify-start items-center flex-wrap">
        {skills.map((skill, index) => <li key={index} className="skill-capsule">
            {skill}
        </li>)}
    </ul>
</div>)

export default () => (
    <div className="max-w-5xl mx-auto px-4 mb-24">
        <div className="hero-backdrop leading-relaxed py-24 text-gray-800">
            <h1 className="text-xl">Hello! 👋 My name is</h1>
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <h2 className="">Nathan Benavides-Luu.</h2>
                <h3>I build things for the web.</h3>
            </div>
            <p className="max-w-3xl mt-5 text-lg md:text-xl text-gray-700">
                I’m a first-year <strong>computer science/applied mathematics</strong> student at
                <strong> Brown University</strong> and an entrepreneurial full-stack
                developer with a passion for education technology. I explore ways to make technology more accessible and
                useful in public education. I have experience building accessible and user-friendly websites and iOS
                apps.
            </p>
        </div>
        <div className="relative bg-gray-50 pt-16 pb-24">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto">
                <div className="text-left">
                    <h2 className="text-3xl leading-9 tracking-tight font-bold text-gray-800 sm:text-4xl sm:leading-10">
                        Latest
                    </h2>
                </div>
                <div className="mt-12 grid gap-5 mx-auto md:grid-cols-2 lg:max-w-none">
                    {pageData.projects.map((project, index) => <BlogCard key={index} title={project.title}
                                                                         desc={project.description}
                                                                         category={project.inProgress && "IN PROGRESS"}
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
)
