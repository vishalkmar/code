import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBullseye, FaUsers, FaHandshake, FaTrophy } from 'react-icons/fa';


const WhoWeAre = () => {
  const cards = [
    {
      id: 1,
      title: "Our Mission",
      icon: <FaBullseye />,
      content: "To deliver innovative software solutions that transform businesses and create lasting value for our clients.",
      color: "linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(0, 242, 254, 0.15) 100%)",
      iconColor: "#4facfe"
    },
    {
      id: 2,
      title: "Our Team",
      icon: <FaUsers />,
      content: "A talented group of developers, designers, and strategists passionate about creating exceptional digital experiences.",
      color: "linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(79, 172, 254, 0.15) 100%)",
      iconColor: "#00f2fe"
    },
    {
      id: 3,
      title: "Our Values",
      icon: <FaHandshake />,
      content: "Integrity, innovation, and excellence guide everything we do. We believe in building trust through transparency.",
      color: "linear-gradient(135deg, rgba(26, 58, 106, 0.15) 0%, rgba(79, 172, 254, 0.15) 100%)",
      iconColor: "#4facfe"
    },
    {
      id: 4,
      title: "Achievements",
      icon: <FaTrophy />,
      content: "Recognized as top developers with 50+ successful projects and 98% client satisfaction rate.",
      color: "linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(26, 58, 106, 0.15) 100%)",
      iconColor: "#4facfe"
    }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      {/* Animated background elements */}
      <div className="position-absolute w-100 h-100" style={{
        background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234facfe' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        opacity: 0.3,
        zIndex: 0
      }}></div>

      {/* Floating bubbles */}
      {[...Array(15)].map((_, i) => (
        <div key={`bubble-${i}`} className="position-absolute rounded-circle" style={{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          background: `radial-gradient(circle, rgba(79, 172, 254, ${Math.random() * 0.1 + 0.05}) 0%, rgba(79, 172, 254, 0) 70%)`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 20 + 10}s linear infinite`,
          animationDelay: `${Math.random() * 5}s`,
          zIndex: 0
        }}></div>
      ))}

      <div className="container position-relative py-5" style={{ zIndex: 1 }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-3" style={{
              // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              fontSize:'4rem',
              fontFamily:'orbitron'
            }}>
              Who We Are
            </h2>
            <p className="lead" style={{ 
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Discover what makes us different and how we can help you achieve your goals
            </p>
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          {cards.map((card) => (
            <div key={card.id} className="col-12 col-md-6 col-lg-3 d-flex">
              <div className="card flex-grow-1 border-0" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                zIndex: 1
              }}>
                <div className="card-body text-center p-4 position-relative" style={{ zIndex: 2 }}>
                  <div className="d-flex justify-content-center mb-3">
                    <div style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: card.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}>
                      {React.cloneElement(card.icon, {
                        style: {
                          color: card.iconColor,
                          fontSize: '1.75rem',
                          transition: 'all 0.3s ease'
                        }
                      })}
                    </div>
                  </div>
                  <h3 className="h4 mb-3" style={{ 
                    color: 'white',
                    fontWeight: '600',
                    fontFamily:'orbitron'
                  }}>{card.title}</h3>
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    minHeight: '80px'
                  }}>{card.content}</p>
                </div>
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                  background: card.color,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 15px 30px rgba(0, 119, 255, 0.3);
          border-color: rgba(79, 172, 254, 0.5) !important;
        }
        
        .card:hover .position-absolute {
          opacity: 0.2;
        }
        
        .card:hover .d-flex div {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(79, 172, 254, 0.3);
        }
        
        .card:hover svg {
          transform: scale(1.2);
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-30px) translateX(20px) rotate(5deg); }
          66% { transform: translateY(20px) translateX(-20px) rotate(-5deg); }
          100% { transform: translateY(0) translateX(0) rotate(0deg); }
        }
        
        @media (max-width: 992px) {
          .card {
            max-width: 350px;
            margin: 0 auto;
          }
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;