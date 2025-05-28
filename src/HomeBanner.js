import React, { useState, useEffect } from 'react';
import { useMemo } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeBanner = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  // const texts = [
  //   "Software Solutions",
  //   "Web Development",
  //   "Mobile Apps",
  //   "Digital Marketing"
  // ];

  const texts = useMemo(() => [
  "Software Solutions",
    "Web Development",
    "Mobile Apps",
    "Digital Marketing"
], []);


  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % texts.length;
      const fullText = texts[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  return (
    <div className="position-relative overflow-hidden" 
         style={{
           height: '90vh',
           minHeight: '500px',
           backgroundImage: 'linear-gradient(rgba(10, 26, 46,0.6), rgba(26, 58, 106,0.1)), url(https://img.freepik.com/free-vector/blue-futuristic-networking-technology_53876-97395.jpg?semt=ais_hybrid&w=740)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           display: 'flex',
           alignItems: 'center'
         }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4" style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            }}>
              We Provide <br />
              <span className="gradient-text" style={{
                // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderRight: '0.15em solid #4facfe',
                animation: 'blink-caret 0.75s step-end infinite',
                paddingRight: '5px',
                fontFamily:"orbitron",
                fontSize:'5rem'
              }}>
                {text}
              </span>
            </h1>
            
            <p className="lead mb-5" style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1.25rem'
            }}>
              Innovative solutions tailored to your business needs. Let's build something amazing together.
            </p>
            
            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-primary btn-lg px-4 py-2" style={{
                background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                border: 'none',
                borderRadius: '50px',
                fontWeight: '600'
              }}>
                Get Started
              </button>
              
              <button className="btn btn-outline-light btn-lg px-4 py-2" style={{
                border: '2px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animation for text cursor */}
      <style>{`
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #4facfe; }
        }
        
        .gradient-text {
          display: inline-block;
        }
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem;
          }
          
          .lead {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeBanner;