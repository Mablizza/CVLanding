export default function Skills(){

    const skillsArr = [
        {title: "Web Development",
        icon: "/src/assets/webDev.png",
        description: "HTML/CSS/Javascript/REACT"},
        {title: "UI/UX Design",
        icon: "/src/assets/ux-design.png",
        description: "Design of UI, protoype and testing of UX"},
        {title: "Brand Marketing",
        icon: "/src/assets/social-media.png",
        description: "Google Ads, Meta Marketing, Ad creation and placement"},
        {title: "QA & Testing",
        icon: "/src/assets/test.png",
        description: "Testing for Quality Assurance, and desired UI/UX."},
        {title: "Content Creation & Photo/Video Editing",
        icon: "/src/assets/video-edit.png",
        description: "I can assist editing photos or video for website use, content creation or social media pressence."},
        {title: "Problem Solving",
        icon: "/src/assets/idea.png",
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