import HeroBanner, {Skill} from "../components/components";
import React from "react";
import BlogCard from "../components/BlogCard";

export default () => (
    <div className="max-w-5xl mx-auto">
        <HeroBanner h1="Hi, my name is" h2="Nathan Benavides-Luu." h3="I build stuff for the web."
                    paragraph="I'm an 18 year old student from San Diego, CA who loves building cool things with code."/>
        <div className="skills-backdrop p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                <Skill img="/frontend.png" title="Frontend"/>
                <Skill img="/backend.png" title="Backend"/>
                <Skill img="/ui_design.png" title="UI Design"/>


                <Skill img="/cal.png" title="Dependable, Persistent and Productive"/>
                <Skill img="/learner.png" title="Fast and Adaptable Learner"/>
                <Skill img="/teamwork.png" title="Leadership and Collaboration"/>
            </div>
        </div>

        <div className="relative bg-gray-50 pt-16 pb-24">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="relative mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-800 sm:text-4xl sm:leading-10">
                        Projects
                    </h2>
                </div>
                <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-2 lg:max-w-none">
                    <BlogCard title="Sheetroom" desc="An online platform for designing beautiful online assignments." category="Web Dev" img="/sheetroom_ss.png" link="https://www.sheetroom.com"/>
                    <BlogCard title="Say Their Names" desc="A place to commemorate members of the Black community who have died to racial injustice." category="Web Dev" img="/saytheinames_ss.png" link="https://saytheirnames.io/"/>
                </div>
            </div>
        </div>

    </div>
)
