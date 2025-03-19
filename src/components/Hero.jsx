import myphoto from "/src/assets/myphoto.jpg"

export default function Hero(){

    function goToLinkedIn() {
        window.location.href = 'https://www.linkedin.com/in/julian-arias-4b0749105/';
    }
    
    return(
        <>
            <div className="section-header">
                <p className="greyText">BIOGRAPGHY</p>
                <h1>A Small Intro</h1>
            </div>
            <div className="hero-section">
                <img className="hero-img" src={myphoto} alt="a photo of miu" />
                <div className="hero-text">
                    <p className="bold greenText"> About Me </p>
                    <h2> Julián Arias - Software Engineer</h2>
                    <p> I come from a background in finance and entrepreneurship, and I’m currently transitioning into
                        software development. Over the years, I’ve founded and run businesses where I built and maintained
                        websites, managed teams, and handled both technical and strategic decisions. My previous roles as
                        a Financial Analyst gave me a strong foundation in problem-solving and data structuring for analysis,
                        as well as experience working closely with various stakeholders—skills that continue to guide my work
                        as a developer today.
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
                            <p className="bold">Phone No.</p>
                            <p>+506-8723-3928</p>
                        </div>
                    </div>
                    <div className="linkedIn-Btn" onClick={()=>goToLinkedIn()}>
                        View CV
                    </div>
                </div>
            </div>
        </>

    )
}