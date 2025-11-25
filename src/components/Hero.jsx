import myphoto from "/src/assets/myphoto.jpg"

export default function Hero(){

    function goToLinkedIn() {
        window.location.href = 'https://www.linkedin.com/in/julian-arias-4b0749105/';
    }
    
    return(
        <>
            <div className="section-header">
                <p className="greyText">BIOGRAPGHY</p>
                <h1>A Brief Intro</h1>
            </div>
            <div className="hero-section">
                <img className="hero-img" src={myphoto} alt="a photo of me" />
                <div className="hero-text">
                    <p className="bold greenText"> About Me </p>
                    <h2> Julián Arias - Software Engineer</h2>
                    <p> I'm a full-stack software engineer with experience building real-use applications. My latest
                        project serves 1,300+ monthly users and growing. I love combining technical problem-solving 
                        with business thinking - probably thanks to my finance background where I spent years 
                        analyzing data and optimizing processes. Now I channel that analytical mindset into building 
                        software solutions that deliver real value. Whether it's architecting a database, shipping a new
                        feature, optimizing performance, or leading a development team, I approach each challenge with
                        both technical know-how and strategic thinking.
                    </p>
                    <div className="hero-boxes">
                        <div className="hero-minibox">
                            <p className="bold">Name</p>
                            <p>Julián Arias Rodríguez</p>
                        </div>
                        <div className="hero-minibox">
                            <p className="bold">Country</p>
                            <p>Costa Rica</p>
                        </div>
                        <div className="hero-minibox">
                            <p className="bold">Email</p>
                            <p>julianarias.rod@gmail.com</p>
                        </div>

                        <div className="hero-minibox">
                            <p className="bold">Focus</p>
                            <p>Full-Stack Development</p>
                        </div>
                    </div>
                    <div className="linkedIn-Btn" onClick={()=>goToLinkedIn()}>
                        View LinkedIn Profile
                    </div>
                </div>
            </div>
        </>

    )
}