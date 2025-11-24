import { useState, useEffect } from 'react';
import '../introAnimation.css';

export default function IntroAnimation() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // Resize listener for mobile detection
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 768);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Prevent body scroll during animation
        document.body.style.overflow = 'hidden';
        
        let wheelProgress = 0;
        
        function handleWheel(e) {
            e.preventDefault();
            
            // Accumulate wheel delta
            wheelProgress += e.deltaY;
            
            // Calculate progress (0 to 100)
            const maxWheel = 3000;
            const progress = Math.min(Math.max((wheelProgress / maxWheel) * 100, 0), 100);
            setScrollProgress(progress);

            if (progress >= 100) {
                //re-enable scrolling immediately after animation ends
                document.body.style.overflow = 'auto';
                document.body.style.position = 'static';
                document.documentElement.style.overflow = 'auto';
                
                window.removeEventListener('wheel', handleWheel);
                
                setTimeout(() => {
                    setAnimationComplete(true);
                }, 500);
            }
}

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleWheel);
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Don't render if animation is complete
    if (animationComplete) return null;

    // Determine animation stage based on scroll progress
    function getAnimationStage() {
        if (scrollProgress < 60) return 'running';
        if (scrollProgress < 75) return 'jumping';
        if (scrollProgress < 85) return 'standing';
        return 'sinking';
    }

    function getMarioSprite() {
        const stage = getAnimationStage();
        
        if (stage === 'running') {
            const frame = Math.floor((scrollProgress * 0.5) % 3) + 1;
            return `/GreenMario/Run/GreenMario_Run${frame}.png`;
        }
        if (stage === 'jumping') {
            return '/GreenMario/Jump/GreenMario_Jump.png';
        }
        return '/GreenMario/Stand/GreenMarioStand.png';
    }

    function getMarioPosition() {
        const stage = getAnimationStage();
        
        if (stage === 'running') {
            if (isMobile) {
                // Mobile: shorter running distance, ends further from pipe
                const leftPosition = -10 + (scrollProgress / 60) * 45; 
                return { left: `${leftPosition}%`, bottom: '30%' };
            }
            // Desktop: original calculation
            const leftPosition = -10 + (scrollProgress / 60) * 55;
            return { left: `${leftPosition}%`, bottom: '30%' };
        }
        
        if (stage === 'jumping') {
            if (isMobile) {
                const leftPosition = 35 + ((scrollProgress - 60) / 15) * 15;
                const jumpProgress = (scrollProgress - 60) / 15;
                
                // Jump from 30% to 37.2% with an arc
                const startHeight = 30;  // End of running phase
                const endHeight = 37.2;  // Standing position on pipe
                const arcHeight = 12;    // How high above the path Mario jumps
                
                // Base path: linear interpolation from start to end
                const basePath = startHeight + (endHeight - startHeight) * jumpProgress;
                
                // Arc peaks at middle of jump
                const arc = Math.sin(jumpProgress * Math.PI) * arcHeight;
                const jumpHeight = basePath + arc;
                
                return { left: `${leftPosition}%`, bottom: `${jumpHeight}%` };
            }
            // Desktop: original calculation
            const leftPosition = 43 + ((scrollProgress - 60) / 15) * 5;
            const jumpProgress = (scrollProgress - 60) / 15;
            const jumpHeight = 43 + (Math.sin(jumpProgress * Math.PI) * 20);
            return { left: `${leftPosition}%`, bottom: `${jumpHeight}%` };
        }
        
        if (stage === 'standing') {
            if (isMobile) {
                return { left: '50%', bottom: '37.2%' }; 
            }
            // Desktop
            return { left: '50%', bottom: '47.5%' };
        }
        
        // Sinking stage - LOCK horizontal position
        if (isMobile) {
            const sinkProgress = (scrollProgress - 85) / 15;
            const bottomPosition = 37.2 - (sinkProgress * 20); // Slower descent: from 37.2% to ~17%
            return { left: '50%', bottom: `${bottomPosition}%` }; // Keep left locked at 50%
        }
        // Desktop
        const sinkProgress = (scrollProgress - 85) / 15;
        const bottomPosition = 50 - (sinkProgress * 27); // Slower descent: from 52% to ~25%
        return { left: '50%', bottom: `${bottomPosition}%` };
    }

    const stage = getAnimationStage();
    const marioSprite = getMarioSprite();
    const marioPosition = getMarioPosition();
    
    // hide Mario when he goes below ground (100%)
    const marioOpacity = stage === 'sinking' && parseFloat(marioPosition.bottom) < 20 ? 0 : 1;

    return (
        <>
            <div className={`intro-overlay ${scrollProgress >= 100 ? 'fade-out' : ''}`}>
                <div className="intro-content">
                    <div className="scroll-indicator">
                        <p>Scroll Down</p>
                        <div className="arrow-down">↓</div>
                    </div>

                    {/* Green Pipe */}
                    <img 
                        src="/GreenMario/MarioGreenTube.png" 
                        alt="pipe" 
                        className="green-pipe"
                    />

                    {/* Mario */}
                    <img 
                        src={marioSprite}
                        alt="Mario"
                        className={`mario ${stage}`}
                        style={{
                            left: marioPosition.left,
                            bottom: marioPosition.bottom,
                            opacity: marioOpacity,
                            transition: 'opacity 0.2s ease-out'
                        }}
                    />

                    <div className="ground-overlay"></div>

                </div>
            </div>
        </>
    );
}
