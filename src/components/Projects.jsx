export default function Projects(){
    const skillsArr = [
        {title: "Dunu506",
        tag: "Capstone",
        icon: "/src/assets/Dunu506LT.png",
        description: "The project that started it all... Co-founded this project a couple years ago before I knew how to program. It inspired a pivotal career change which still pushes me today to keep learning about technologies such as AWS, Ruby on Rails, PostgreSQL or PHP. It gave me the motivation to switch to a programming career 🎉. "},
        {title: "BoardGame Quick Setup",
        tag: "MVP",
        icon: "/src/assets/QuickGameSetupLT.png",
        description: "A MVP of a useful niche app for boardgamers. A small group of my friends enjoy playing boardgames. Overtime we have built a rather large inventory of boardgames for which we thought having an app with quick setup guides would be useful. This is a prototype of that idea."},
        {title: "Random Number Generator",
        tag: "Hobby",
        icon: "/src/assets/RNGLT.png",
        description: "I have a 5year old daughter. Using her ideas I created a 'Random Number Generator' game to help her practice numbers from 0-100. She helped me choose the gif animations as well suggest we add a visual mini-game such as the tower jumble game."},
        ]

        const skillsElements = skillsArr.map( (skill) =>
            <div key={skill.title} className="project-box" >

                <div className="bar-y"></div>
                <div className="bar-x"></div>
                <div className="bar-dot"></div>

                <div className="project-img">
                    <img  src={skill.icon} alt={`icon of ${skill.title}`} />
                </div>
                <div className="project-text">
                    <p className="project-title">{skill.title}</p>
                    <div className="project-tag">{skill.tag}</div>
                    <p className="project-desc greyTextLight">{skill.description}</p>
                </div>
                
            </div>
        )


    return(
        <>
            <div className="section-header">
                <p className="greyText">WORK</p>
                <h1>Recent Projects </h1>
            </div>
            {skillsElements}
        </>
    )
}