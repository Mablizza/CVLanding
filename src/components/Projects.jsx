import Dunu506 from "/src/assets/Dunu506LT.png"
import InfoAutoCRLT from "/src/assets/InfoAutoCRLT.png"
import MablabzLT from "/src/assets/MablabzLT.png"

export default function Projects(){
    const projectsArr = [
        {
            title: "InfoAutoCR",
            tag: "#Production App",
            icon: InfoAutoCRLT,
            description: "Full-stack production application serving 1,300+ monthly users with 3,337 organic search clicks. Handles 150+ daily API requests with 99% uptime. Built with React, Node.js/Express, and PostgreSQL. Features concurrent request queue system with real-time status updates, zero-downtime database migrations, and financial calculation engine for vehicle transfer fees. Monetized through custom AdBanner system generating revenue from legal service providers. Deployed via Railway with Cloudflare network services.",
            url: "https://autoinfocr.com/",
            tech: "React • Node.js • PostgreSQL • Railway"
        },
        {
            title: "Dunu506",
            tag: "#Marketplace",
            icon: Dunu506,
            description: "The project that started my programming journey! E-commerce marketplace built with React and Ruby on Rails, deployed on AWS. I led a team of 3 developers through Agile sprints, handling everything from database design to payment processing. It's currently in maintenance mode while I focus on my other projects, but it taught me so much about full-stack architecture and team leadership.",
            url: "https://www.dunu506.com",
            tech: "React • Ruby on Rails • PostgreSQL • AWS"
        },
        {
            title: "MabLabz",
            tag: "#Portfolio",
            icon: MablabzLT,
            description: "My freelance portfolio platform showcasing modern React development. Built with Vite for lightning-fast builds and Tailwind CSS for responsive design. Features internationalization (English/Spanish switching) and demonstrates component-based architecture. It's also where potential clients can learn about my services - though honestly, I'd prefer a steady contract over freelancing!",
            url: "https://www.mablabz.com/",
            tech: "React • Vite • Tailwind CSS"
        }
        ]

        function goToSite(url) {
            window.open(url, '_blank')
        }

        const projectsElements = projectsArr.map( (project) =>
            <div key={project.title} className="project-box" >

                <div className="bar-y hide"></div>
                <div className="bar-x hide"></div>
                <div className="bar-dot hide"></div>

                <div className="project-img">
                    <img  src={project.icon} alt={`icon of ${project.title}`} />
                </div>
                <div className="project-text">
                    <p className="project-title">{project.title}</p>
                    <div className="tag-container">
                        <div className="project-tag">{project.tag}</div>
                            <button className="project-btn" onClick={()=>goToSite(project.url)}>Visit Project</button>
                    </div>
                <p className="project-tech" style={{color: '#00D4AA', fontSize: '0.9em', marginBottom: '8px'}}>{project.tech}</p>
                <p className="project-desc greyTextLight">{project.description}</p>
                </div>
                
            </div>
        )


    return(
        <>
            <div className="section-header">
                <p className="greyText">WORK</p>
                <h1>Recent Projects </h1>
            </div>
            <div className="projects-container">
                {projectsElements}
            </div>
        </>
    )
}