import React from "react";
import BlogCard from "../components/BlogCard";
import Head from "next/head";
import ZoomModal from "../components/ZoomModal";
import ExperienceSection from "../components/ExperienceSection";

const pageData = {
    socials: {
        linkedIn: "https://www.linkedin.com/in/nthnluu",
        instagram: "https://www.instagram.com/nthnluu/",
        github: "https://github.com/nthnluu"
    },
    projects: [{
        title: "Sheetroom",
        description: "An online assessment platform with a drag-and-drop quiz builder, embeddable graphs and formulas, and a customizable scoring algorithm.",
        image: "/sheetroom_ss.png",
        href: "https://www.sheetroom.com"
    }, {
        title: "Nelson Bot",
        description: "A serverless Python bot that automatically reserves your preferred time slots at the Brown University Nelson Fitness Center.",
        image: "/nelsonbit.png",
        href: "https://mixtape.nthnluu.vercel.app"
    }, {
        title: "Venture at Brown",
        description: "A guide that helps Brown and RISD students navigate the entrepreneurial resources on College Hill by providing personalized resource recommendations.",
        image: "unexperienced_brown.svg",
        href: "https://ventureatbrown.com/"
    }, {
        title: "Build at Brown",
        description: "A website with online courses, tutorials, open-source projects, and other resources for the Brown entrepreneurial community.",
        image: "frontend.png",
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
            items: ["Javascript", "Typescript", "Python", "Swift", "HTML", "CSS", "SCSS", "Pyret", "Racket", "Java", "Scala", "C#"]
        },
        {
            title: "Front-End",
            items: ["React", "Next.js", "Vue", "SwiftUI", "UI Kit", "Storyboards", "React Native", "jQuery", "Tailwind CSS"]
        },
        {
            title: "Back-End",
            items: ["Database Architecture", "Django", "FastAPI", "Flask", "Node.js", "Express", "MongoDB", "Cloud Firestore", "CoreData", "Realm", "GraphQL", "REST", "OAuth 2.0", "JWT Authentication"]

        },
        {
            title: "Dev-Ops/Cloud Services",
            items: ["AWS S3", "Heroku", "AWS Lambda", "AWS EC2", "AWS CloudFormation", "Docker", "Google Identity Platform", "Google Cloud Functions", "Google Cloud Storage", "Firebase"]
        },
        {
            title: "Other Tools and Services",
            items: ["Pandas", "Git", "Wordpress", "Jupyter Notebook", "Linux/UNIX", "Figma", "Adobe XD", "Photoshop", "Illustrator", "Adobe XD", "After Effects", "Premier Pro", "Lottie Web", "Selenium", "Sequelize", "Unity 3D"]
        }
    ],
    experience: [
        {
            title: "Incoming STEP Intern",
            company: "Google",
            location: "Mountain View, CA",
            start: "Jan 2021",
            end: "Present",
            description: "",
            image: "/google.png"
        },
        {
            title: "Product Manager",
            company: "Full Stack at Brown",
            location: "Providence, RI",
            start: "Oct 2020",
            end: "Present",
            description: "I serve as a point of contact for client communication, manage engineering teams, and oversee project direction for various full-stack web and mobile projects, including TA Hours Anywhere and Loneliness App.",
            image: "/fsab.jpeg"
        },
        {
            title: "Full Stack Web Developer",
            company: "Brown Entrepreneurship Program",
            location: "Providence, RI",
            start: "Oct 2020",
            end: "Present",
            description: "I develop various web and mobile tools and resources for the Brown Entrepreneurship Program and the Brown entrepreneurial community at large. My most recent projects are Venture@Brown, an interactive guide that gives Brown and RISD a personalized list of entrepreneurial resources on College Hill.",
            image: "/ep.png"
        },
        {
            title: "Student Worker",
            company: "County of San Diego",
            location: "San Diego, CA",
            start: "May 2019",
            end: "Nov 2020",
            description: "I helped optimize the paper and electronic document intake process to reduce postage costs, processing turn-around time, and errors in data entry. I also worked with child support participants in both English and Spanish, processed and updated confidential information in California child support database, maintained intranet resources, conducted routine computer troubleshooting tasks, and helped manage users in Microsoft 365 Enterprise.",
            image: "/sdc.png"
        }]

}

const SkillSection = ({title, skills}) => (<div className="mb-8">
    <h2 className="text-sm uppercase text-gray-700 font-medium mb-2">{title}</h2>
    <ul className="flex justify-start items-center flex-wrap">
        {skills.sort().map((skill, index) => <li key={index}
                                                 className="border shadow-sm md:text-lg text-gray-800 py-1 px-3 rounded-full flex-shrink-0 mr-2 mb-2">
            {skill}
        </li>)}
    </ul>
</div>)

export default function Home() {
    const openZoom = () => {
        if (window.confirm('You are about to join my personal meeting room. Are you sure you want to continue?')) {
            window.location.href = "https://zoom.nthnluu.com/"
        }
    }

    const timeGreeting = () => {
        const currDate = new Date();
        const hours = currDate.getHours();
        let greeting;

        if (hours < 12) {
            greeting = "Good morning"
        } else if (hours >= 12 && hours <= 17) {
            greeting = "Good afternoon"
        } else {
            greeting = "Good evening"
        }

        return greeting;
    }
    return <>
        <Head>
            <title>Nathan Benavides-Luu</title>
        </Head>
        <div className="max-w-5xl mx-auto px-4 mb-24">
            <div className="flex justify-end items-center py-6 space-x-2">
                <a className="top-link" href={pageData.socials.github}>
                    <i className="fab fa-github"/>
                    <span className="sr-only">GitHub</span>
                </a>
                <a className="top-link" href={pageData.socials.linkedIn}>
                    <i className="fab fa-linkedin"/>
                    <span className="sr-only">Linkedin</span>
                </a>
                <a className="top-link" href={pageData.socials.instagram}>
                    <i className="fab fa-instagram"/>
                    <span className="sr-only">Instagram</span>
                </a>
                <button onClick={openZoom} className="top-link">
                    <i className="fas fa-video"/>
                    <span className="sr-only">Zoom</span>
                </button>
            </div>
            <div className="pb-12 text-gray-800">
                <h1>
                    <span className="text-2xl">{timeGreeting()}! 👋 My name is</span>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
                        <div>Nathan Benavides-Luu.</div>
                        <div>I build things for the web.</div>
                    </div>
                </h1>

                <p className="max-w-4xl mt-5 text-lg md:text-xl text-gray-500">
                    I’m a first-year computer science student at Brown University, an incoming software engineering
                    (STEP) intern at Google, and an entrepreneurial full-stack developer with a passion for education
                    technology. With my experience building user-friendly websites and iOS apps, I
                    explore ways to make technology more accessible and useful in public education.
                </p>
            </div>
            <div className="relative pt-16 pb-24">
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
                <h2 className="text-3xl font-bold mb-6">Experience</h2>
                <ExperienceSection experiences={pageData.experience}/>
            </div>


            <div className="pt-24">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                {pageData.skills.map((section, index) => <SkillSection key={index} title={section.title}
                                                                       skills={section.items}/>)}
            </div>


        </div>

        <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-center lg:px-8">
                <div className="flex justify-center items-center space-x-6 md:order-2">
                    <a href={pageData.socials.instagram} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>

                    <a href={pageData.socials.github} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd"
                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                  clipRule="evenodd"/>
                        </svg>
                    </a>

                    <a href={pageData.socials.linkedIn} className="text-gray-400 text-3xl hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <i className="fab fa-linkedin"/>
                    </a>
                </div>
            </div>
        </footer>
    </>
}
