import { useState, useEffect } from 'react';
import '../introAnimation.css';

export default function IntroAnimation() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [animationComplete, setAnimationComplete] = useState(false);
    const [viewportDimensions, setViewportDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        aspectRatio: window.innerWidth / window.innerHeight
    });

    // Resize listener for viewport tracking
    useEffect(() => {
        function handleResize() {
            setViewportDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                aspectRatio: window.innerWidth / window.innerHeight
            });
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
        const { width, height } = viewportDimensions;
        
        // Fixed anchor: Pipe is always centered at 50%
        const pipeCenter = 50;
        
        // Calculate scale factors based on viewport (continuous scaling)
        const widthScale = Math.max(0.7, Math.min(1.2, width / 1440));
        const heightScale = Math.max(0.8, Math.min(1.1, height / 800));
        
        // Dynamic distances that scale with viewport
        const safeDistanceFromPipe = 20 * widthScale;
        const runningStartPos = -10;
        const runningEndPos = pipeCenter - safeDistanceFromPipe;
        const runningDistance = runningEndPos - runningStartPos;
        
        const groundLevel = 30;
        
        // Calculate pipe height as percentage of viewport to position Mario on top
        let pipeHeightPx;
        if (width <= 480) {
            pipeHeightPx = 66;  // CSS: 59px
        } else if (width <= 768) {
            pipeHeightPx = 88;  // CSS: 88px
        } else {
            pipeHeightPx = 132; // CSS: 132px
        }
        
        // Convert pipe height from pixels to percentage of viewport height
        const pipeHeightPercent = (pipeHeightPx / height) * 100;
        
        // Mario stands on top of pipe: pipe bottom (30%) + pipe height
        const pipeTopHeight = groundLevel + pipeHeightPercent;
        
        // Jump arc height scales with both dimensions
        const arcHeight = 17 * widthScale * heightScale;
        
        if (stage === 'running') {
            const leftPosition = runningStartPos + (scrollProgress / 60) * runningDistance;
            return { left: `${leftPosition}%`, bottom: `${groundLevel}%` };
        }
        
        if (stage === 'jumping') {
            const jumpProgress = (scrollProgress - 60) / 15;
            const leftPosition = runningEndPos + (jumpProgress * safeDistanceFromPipe);
            
            const startHeight = groundLevel;
            const endHeight = pipeTopHeight;
            
            const basePath = startHeight + (endHeight - startHeight) * jumpProgress;
            const arc = Math.sin(jumpProgress * Math.PI) * arcHeight;
            const jumpHeight = basePath + arc;
            
            return { left: `${leftPosition}%`, bottom: `${jumpHeight}%` };
        }
        
        if (stage === 'standing') {
            return { left: `${pipeCenter}%`, bottom: `${pipeTopHeight}%` };
        }
        
        // Sinking stage
        const sinkProgress = (scrollProgress - 85) / 15;
        const descentDistance = 27 * heightScale;
        const bottomPosition = pipeTopHeight - (sinkProgress * descentDistance);
        
        return { left: `${pipeCenter}%`, bottom: `${bottomPosition}%` };
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
