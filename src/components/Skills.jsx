import webDev from "/src/assets/webDev.png"
import uxDesign from "/src/assets/ux-design.png"
import socialMedia from "/src/assets/social-media.png"
import test from "/src/assets/test.png"
import videoEdit from "/src/assets/video-edit.png"
import idea from "/src/assets/idea.png"

export default function Skills(){

    const skillsArr = [
        {
            title: "Full-Stack Development",
            icon: webDev,
            description: "React, Node.js, Express, and modern JavaScript. I love building complete applications from database to user interface."
        },
        {
            title: "Database Architecture",
            icon: uxDesign,
            description: "PostgreSQL, MySQL, MongoDB. Complex data modeling, query optimization, and scalable database design."
        },
        {
            title: "Performance & SEO",
            icon: test,
            description: "Code optimization, SEO implementation, and user experience tuning. My InfoAutoCR project is proof this stuff works!"
        },
        {
            title: "Data Processing",
            icon: videoEdit,
            description: "Web scraping with Puppeteer, API integrations, and real-time data processing. Love making messy data useful."
        },
        {
            title: "Technical Leadership",
            icon: idea,
            description: "Agile development, team coordination, and project delivery. Led developers through complex implementations at Dunu506."
        },
        {
            title: "Business Intelligence",
            icon: socialMedia,
            description: "Data analysis, process optimization, and stakeholder communication. My finance background helps me build software that actually solves business problems."
        }
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
                <h1>What I Bring to the Table</h1>
            </div>
            <div className="skills-container">
                {skillsElements}
            </div>
        </>
    )
}