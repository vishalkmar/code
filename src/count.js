import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUserTie, FaRocket, FaCalendarAlt, FaHeadset } from 'react-icons/fa';
import { GiCommercialAirplane } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdWorkHistory } from 'react-icons/md';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      title: "Satisfied Customers",
      icon: <RiCustomerService2Fill />,
      endValue: 40,
      suffix: "+",
      bgIcon: <GiCommercialAirplane className="position-absolute" style={{ opacity: 0.1, fontSize: '5rem' }} />
    },
    {
      id: 2,
      title: "Projects Completed",
      icon: <FaRocket />,
      endValue: 60,
      suffix: "+",
      bgIcon: <GiCommercialAirplane className="position-absolute" style={{ opacity: 0.1, fontSize: '5rem' }} />
    },
    {
      id: 3,
      title: "Years Experience",
      icon: <MdWorkHistory />,
      endValue: 4,
      suffix: "+",
      bgIcon: <GiCommercialAirplane className="position-absolute" style={{ opacity: 0.1, fontSize: '5rem' }} />
    },
    {
      id: 4,
      title: "Support Hours",
      icon: <FaHeadset />,
      endValue: 300,
      suffix: "+",
      bgIcon: <GiCommercialAirplane className="position-absolute" style={{ opacity: 0.1, fontSize: '5rem' }} />
    }
  ];

  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible && !animationStarted) {
          setAnimationStarted(true);
          animateNumbers();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationStarted]);

  const animateNumbers = () => {
    const duration = 2000; // Animation duration in ms
    const startTime = performance.now();

    const updateNumbers = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      const newValues = stats.map((stat, index) => {
        const value = Math.floor(progress * stat.endValue);
        return value;
      });

      setAnimatedValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(updateNumbers);
      }
    };

    requestAnimationFrame(updateNumbers);
  };

  // 3D flying objects data
  const flyingObjects = [
    { id: 1, icon: <GiCommercialAirplane />, size: '2rem', top: '15%', left: '5%', animation: 'fly1 15s linear infinite' },
    { id: 2, icon: <FaRocket />, size: '1.5rem', top: '25%', left: '80%', animation: 'fly2 20s linear infinite' },
    { id: 3, icon: <FaCalendarAlt />, size: '1.8rem', top: '70%', left: '10%', animation: 'fly3 18s linear infinite' },
    { id: 4, icon: <FaUserTie />, size: '1.3rem', top: '60%', left: '85%', animation: 'fly4 25s linear infinite' }
  ];

  return (
    <section id="stats-section" className="py-5 position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      {/* 3D Flying Objects Background */}
      {flyingObjects.map(obj => (
        <div key={obj.id} className="position-absolute" style={{
          color: 'rgba(79, 172, 254, 0.6)',
          fontSize: obj.size,
          top: obj.top,
          left: obj.left,
          animation: obj.animation,
          zIndex: 0,
          transform: 'translateY(0)'
        }}>
          {obj.icon}
        </div>
      ))}

      {/* Animated Shapes Background */}
      <div className="position-absolute w-100 h-100" style={{
        background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234facfe' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        opacity: 0.5,
        zIndex: 0
      }}></div>

      <div className="container position-relative py-5" style={{ zIndex: 1 }}>
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className="col-12 col-sm-6 col-md-3">
              <div className="card h-100 border-0 position-relative overflow-hidden" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                transition: 'all 0.4s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                minHeight: '250px'
              }}>
                <div className="card-body text-center d-flex flex-column justify-content-center p-4 position-relative" style={{ zIndex: 2 }}>
                  <div className="mb-3" style={{
                    color: '#4facfe',
                    fontSize: '2.5rem',
                    transition: 'all 0.3s ease'
                  }}>
                    {stat.icon}
                  </div>
                  <h3 className="display-4 fw-bold mb-2" style={{
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {animatedValues[index]}{stat.suffix}
                  </h3>
                  <p className="mb-0" style={{ 
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    fontFamily:'orbitron'
                  }}>
                    {stat.title}
                  </p>
                </div>
                <div className="position-absolute w-100 h-100 top-0 start-0 d-flex align-items-center justify-content-center" style={{
                  opacity: 0.1,
                  zIndex: 1
                }}>
                  {stat.bgIcon}
                </div>
                <div className="position-absolute w-100 h-100 top-0 start-0" style={{
                  background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 1
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fly1 {
          0% { transform: translateX(-100px) translateY(0) rotate(0deg); }
          50% { transform: translateX(100vw) translateY(-100px) rotate(360deg); }
          100% { transform: translateX(-100px) translateY(0) rotate(0deg); }
        }
        
        @keyframes fly2 {
          0% { transform: translateX(100vw) translateY(0) rotate(0deg); }
          50% { transform: translateX(-100px) translateY(100px) rotate(-360deg); }
          100% { transform: translateX(100vw) translateY(0) rotate(0deg); }
        }
        
        @keyframes fly3 {
          0% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-100px) translateX(50px) rotate(90deg); }
          50% { transform: translateY(0) translateX(100px) rotate(180deg); }
          75% { transform: translateY(100px) translateX(50px) rotate(270deg); }
          100% { transform: translateY(0) translateX(0) rotate(360deg); }
        }
        
        @keyframes fly4 {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-150px) translateX(-50px) scale(1.5); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        
        .card:hover {
          transform: translateY(-10px) !important;
          box-shadow: 0 15px 30px rgba(0, 119, 255, 0.3) !important;
          border-color: rgba(79, 172, 254, 0.5) !important;
        }
        
        .card:hover .position-absolute:last-child {
          opacity: 0.3 !important;
        }
        
        .card:hover div:first-child {
          transform: scale(1.2);
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          
          .card {
            min-height: 200px !important;
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

export default StatsSection;