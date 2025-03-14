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
                <img className="hero-img" src="/CVLanding/src/assets/myphoto.jpg" alt="a photo of m" />
                <div className="hero-text">
                    <p className="bold greenText"> About Me </p>
                    <h2> Julián Arias - Software Engineer</h2>
                    <p> I started my career in finance and with an interest in entrepreneurship. 
                        Focused on the continuous improvement of my workflows via automation I stumbled upon 
                        Visual Basic programming in Excel/Windows. I found programming to be a true passion of
                        mine which better suits my personality and strengths. Fully committed to programming as
                        a part of my life going forward, this website is proof of a new humble beginning for me 
                        as a software engineer.
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