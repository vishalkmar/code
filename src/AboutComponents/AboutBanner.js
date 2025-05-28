import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiSpinningBlades, GiCommercialAirplane, GiAbstract024 } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
const AboutBanner = () => {

     const navigate = useNavigate();
  // Flying objects data
  const flyingObjects = [
    { id: 1, icon: <GiCommercialAirplane />, size: '3rem', top: '20%', left: '5%', animation: 'flyRight 15s linear infinite' },
    { id: 2, icon: <GiSpinningBlades />, size: '2.5rem', top: '70%', left: '85%', animation: 'flyLeft 20s linear infinite' },
    { id: 3, icon: <GiAbstract024 />, size: '4rem', top: '40%', left: '70%', animation: 'float 18s linear infinite' },
    { id: 4, icon: <GiAbstract024 />, size: '3rem', top: '80%', left: '15%', animation: 'floatReverse 22s linear infinite' }
  ];

  return (
    <section className="position-relative overflow-hidden" style={{
      height: '80vh',
      minHeight: '600px',
      background: 'linear-gradient(135deg, rgba(10, 26, 46, 0.9) 0%, rgba(26, 58, 106, 0.9) 100%)',
      display: 'flex',
      alignItems: 'center'
    }}>
      {/* Flying Objects Background */}
      {flyingObjects.map(obj => (
        <div key={obj.id} className="position-absolute" style={{
          color: `rgba(79, 172, 254, ${obj.id % 2 === 0 ? 0.4 : 0.3})`,
          fontSize: obj.size,
          top: obj.top,
          left: obj.left,
          animation: obj.animation,
          zIndex: 0
        }}>
          {obj.icon}
        </div>
      ))}

      {/* Animated background dots */}
      <div className="position-absolute w-100 h-100" style={{
        background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1' fill='%234facfe' fill-opacity='0.2'/%3E%3C/svg%3E")`,
        opacity: 0.5
      }}></div>

      <div className="container position-relative z-index-1 py-5">
        <div className="row">
          <div className="col-12 col-lg-8 mx-auto text-center">
            {/* Main Heading with Animation */}
            <h1 className="display-3 fw-bold mb-4" style={{
              background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              animation: 'textGlow 3s ease-in-out infinite alternate',
              lineHeight: '1.2'
            }}>
              <span className="d-block" style={{ animation: 'fadeInUp 1s ease' }}>Innovating Since 2023</span>
              <span className="d-block mt-3" style={{ 
                fontSize: '4.8rem',
                 background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
                // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                animation: 'fadeInUp 1s ease 0.3s forwards',
                fontFamily:'orbitron'
              }}>
                About Our Company
              </span>
            </h1>

            {/* Animated Subheading */}
            <p className="lead mb-5 mx-auto" style={{
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              animation: 'fadeInUp 1s ease 0.6s forwards',
              opacity: 0,
              fontSize: '1.5rem'
            }}>
              Pioneering digital transformation through cutting-edge technology solutions and unparalleled expertise.
            </p>

            {/* Animated Button */}
            <div style={{ animation: 'fadeInUp 1s ease 0.9s forwards', opacity: 0 }}>
              <button  className="btn btn-lg px-5 py-3" style={{
                background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '600',
                boxShadow: '0 5px 25px rgba(79, 172, 254, 0.4)',
                position: 'relative',
                overflow: 'hidden'
              }} onClick={()=>{
                 navigate('/');
              }}>
                <span className="position-relative z-index-1">Explore Our Journey</span>
                <span className="position-absolute top-0 left-0 w-100 h-100" style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  transform: 'translateX(-100%)',
                  transition: 'transform 0.3s ease',
                  fontFamily:'orbitron'
                }}></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Arrow Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-x-50 mb-5" style={{
        animation: 'bounce 2s infinite',
        zIndex: 1
      }}>
        <div style={{
          width: '30px',
          height: '50px',
          border: '2px solid #4facfe',
          borderRadius: '50px',
          position: 'relative'
        }}>
          <div style={{
            width: '4px',
            height: '10px',
            background: '#4facfe',
            position: 'absolute',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'scrollDown 2s infinite'
          }}></div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes flyRight {
          0% { transform: translateX(-100px) translateY(0) rotate(0deg); }
          100% { transform: translateX(100vw) translateY(-100px) rotate(360deg); }
        }
        
        @keyframes flyLeft {
          0% { transform: translateX(100vw) translateY(0) rotate(0deg); }
          100% { transform: translateX(-100px) translateY(100px) rotate(-360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(-50px) translateX(20px) rotate(10deg); }
        }
        
        @keyframes floatReverse {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          50% { transform: translateY(50px) translateX(-20px) rotate(-10deg); }
        }
        
        @keyframes textGlow {
          0% { text-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); }
          100% { text-shadow: 0 4px 25px rgba(79, 172, 254, 0.4); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-20px) translateX(-50%); }
          60% { transform: translateY(-10px) translateX(-50%); }
        }
        
        @keyframes scrollDown {
          0% { opacity: 1; transform: translateY(0) translateX(-50%); }
          100% { opacity: 0; transform: translateY(20px) translateX(-50%); }
        }
        
        .z-index-1 {
          z-index: 1;
        }
        
        @media (max-width: 992px) {
          .display-3 {
            font-size: 3.5rem;
          }
          
          .display-3 span.d-block {
            font-size: 4rem !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            height: 70vh !important;
            min-height: 500px !important;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }
          
          .display-3 span.d-block {
            font-size: 3rem !important;
          }
          
          .lead {
            font-size: 1.2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          section {
            height: 60vh !important;
            min-height: 400px !important;
          }
          
          .display-3 {
            font-size: 2rem;
          }
          
          .display-3 span.d-block {
            font-size: 2.2rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutBanner;