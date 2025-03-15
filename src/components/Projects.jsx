import Dunu506 from "/src/assets/Dunu506LT.png"
import RNGLT from "/src/assets/RNGLT.png"
import QuickGameSetupLT from "/src/assets/QuickGameSetupLT.png"

export default function Projects(){
    const projectsArr = [
        {title: "Dunu506",
        tag: "#Capstone",
        icon: Dunu506,
        description: "The project that started it all... Co-founded this project a couple years ago before I knew how to program. It inspired a pivotal career change which still pushes me today to keep learning about technologies such as AWS, Ruby on Rails, PostgreSQL or PHP. It gave me the motivation to switch to a programming career 🎉. ",
        url: "https://www.dunu506.com"},
        {title: "BoardGame Quick Setup",
        tag: "#MVP",
        icon: QuickGameSetupLT,
        description: "A MVP of a useful niche app for boardgamers. A small group of my friends enjoy playing boardgames. Overtime we have built a rather large inventory of boardgames for which we thought having an app with quick setup guides would be useful. This is a prototype of that idea.",
        url: "https://boardgame-quicksetup-app.pages.dev/"},
        {title: "Random Number Generator",
        tag: "#Hobby",
        icon: RNGLT,
        description: "I have a 5year old daughter. Using her ideas I created a 'Random Number Generator' game to help her practice numbers from 0-100. She helped me choose the gif animations as well suggest we add a visual mini-game such as the tower jumble game.",
        url: "https://random-number-generator-8ca.pages.dev/"},
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