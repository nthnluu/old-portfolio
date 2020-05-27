import dynamic from 'next/dynamic'
import HeroBanner, {Skill} from "../components/components";

export default () => (
    <div className="max-w-5xl mx-auto">
        <HeroBanner h1="Hi, my name is" h2="Nathan Luu." h3="I build stuff for the web." paragraph="I'm a high school senior from San Diego, CA who will be studying computer science at Brown University in the fall. I love designing and developing performant, user-centric websites and apps."/>

        <h3 className="section-heading ml-8 lg:ml-0">Skills</h3>
        <div className="skills-backdrop p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                <Skill img="/frontend.png" title="Frontend"/>
                <Skill img="/backend.png" title="Backend"/>
                <Skill img="/ui_design.png" title="UI Design"/>


                <Skill img="/ios_development.png" title="iOS Development"/>
                <Skill img="/ui_design.png" title="Backend"/>
                <Skill img="/frontend.png" title="Customer Service"/>
            </div>
        </div>
    </div>
)
