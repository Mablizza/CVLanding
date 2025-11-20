import webDev from "/src/assets/webDev.png"
import uxDesign from "/src/assets/ux-design.png"
import socialMedia from "/src/assets/social-media.png"
import test from "/src/assets/test.png"
import videoEdit from "/src/assets/video-edit.png"
import idea from "/src/assets/idea.png"

export default function Skills(){

    const skillsArr = [
        {
            title: "Languages",
            icon: webDev,
            description: "JavaScript, HTML5, CSS, SQL and Visual Basic. But always looking to learn more."
        },
        {
            title: "Frontend",
            icon: test,
            description: "React, Vite, Tailwind CSS, Responsive Design. Modern frameworks for building user interfaces."
        },
        {
            title: "Backend",
            icon: idea,
            description: "Node.js, Express, RESTful APIs, Web Scraping. Server-side technologies for scalable applications."
        },
        {
            title: "Databases",
            icon: uxDesign,
            description: "PostgreSQL, MongoDB, MySQL, Database Migrations. Data modeling and optimization."
        },
        {
            title: "Infrastructure",
            icon: videoEdit,
            description: "AWS, Railway, Heroku, Cloudflare, Git/GitHub. Cloud deployment and version control."
        },
        {
            title: "Practices",
            icon: socialMedia,
            description: "Agile, SEO Optimization, Performance Monitoring, and continuous improvement."
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