import webDev from "/src/assets/webDev.png"
import uxDesign from "/src/assets/ux-design.png"
import socialMedia from "/src/assets/social-media.png"
import test from "/src/assets/test.png"
import videoEdit from "/src/assets/video-edit.png"
import idea from "/src/assets/idea.png"

export default function Skills(){

    const skillsArr = [
        {title: "Web Development",
        icon: webDev,
        description: "HTML/CSS/Javascript/REACT."},
        {title: "UI/UX Design",
        icon: uxDesign,
        description: "Design of UI, protoype and testing of UX."},
        {title: "Brand Marketing",
        icon: socialMedia,
        description: "Google Ads, Meta Marketing, Ad creation and placement."},
        {title: "QA & Testing",
        icon: test,
        description: "Testing for Quality Assurance, and desired UI/UX."},
        {title: "Content Creation & Photo/Video Editing",
        icon: videoEdit,
        description: "I can assist editing photos or video for website use, content creation or social media pressence."},
        {title: "Problem Solving",
        icon: idea,
        description: "Part of why I love programming. Understand, Strategize and Implement."},
        ]

        const skillsElements = skillsArr.map( (skill) =>
            <div key={skill.title} className="skill-box" >
                <div className="skill-img">
                    <img  src={skill.icon} alt={`icon of ${skill.title}`} />
                </div>

                <div className="skill-title-underline">
                <p className="skill-title">{skill.title}</p>
                </div>
                <p className="skill-desc greyTextLight">{skill.description}</p>
            </div>
        )


    return(
        <>
            <div className="section-header">
                <p className="greyText">ABILITIES</p>
                <h1>Some Of My Skills... </h1>
            </div>
            <div className="skills-container">
                {skillsElements}
            </div>
        </>
    )
}