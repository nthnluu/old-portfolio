import HeroBanner, {Skill} from "../components/components";
export default () => (
    <div className="max-w-5xl mx-auto">
        <HeroBanner h2="UC GPA Calculator" paragraph="Here I present, tools! Useful little tools I have developed over the years for you and I to enjoy."/>

        <div className="skills-backdrop p-8 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                <Skill img="/uc_gpa.png" title="UC GPA Calculator"/>
                <Skill img="/backend.png" title="Final Grade Calculator"/>
                <Skill img="/ui_design.png" title="GPA Calculator"/>

                <Skill img="/backend.png" title="Kinematics Calculator"/>
                <Skill img="/ui_design.png" title="College List"/>
                <Skill img="/frontend.png" title="Customer Service"/>
            </div>
        </div>
    </div>
)
