import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { GiCommercialAirplane, GiRocket, GiSpinningBlades } from 'react-icons/gi';

const ClientReviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // default for desktop

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "TechSolutions Pvt Ltd",
      review: "Their software development team delivered exceptional results. The app they built increased our customer engagement by 40% within just 3 months.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      company: "Digital Marketing Pro",
      review: "The SEO strategies implemented by this team tripled our organic traffic. Their attention to detail and regular reporting is impressive.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Amit Singh",
      company: "E-Commerce Ventures",
      review: "Our website redesign has significantly reduced bounce rates. The team understood our vision perfectly and executed it flawlessly.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      name: "Neha Gupta",
      company: "StartUp Innovations",
      review: "The mobile app they developed exceeded our expectations. User feedback has been overwhelmingly positive with 4.9/5 rating on Play Store.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 5,
      name: "Vikram Joshi",
      company: "Global Enterprises",
      review: "Their team's technical expertise and professionalism made our digital transformation seamless. Highly recommended for complex projects.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      id: 6,
      name: "Sonia Verma",
      company: "AI Dynamics",
      review: "Thanks to their branding and UI services, our platform looks stunning and modern. We’ve received great feedback from our users.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/61.jpg"
    }
  ];

  // Adjust visible count based on screen width
  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setVisibleCount(1); // small mobile
      } else if (width < 992) {
        setVisibleCount(2); // tablet
      } else {
        setVisibleCount(3); // desktop
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        (prevIndex + 1) % reviews.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const getVisibleReviews = () => {
    const endIndex = startIndex + visibleCount;
    if (endIndex <= reviews.length) {
      return reviews.slice(startIndex, endIndex);
    } else {
      return [...reviews.slice(startIndex), ...reviews.slice(0, endIndex - reviews.length)];
    }
  };

  const flyingObjects = [
    { id: 1, icon: <GiCommercialAirplane />, size: '2rem', top: '15%', left: '5%', animation: 'fly1 15s linear infinite' },
    { id: 2, icon: <GiRocket />, size: '1.5rem', top: '25%', left: '80%', animation: 'fly2 20s linear infinite' },
    { id: 3, icon: <GiSpinningBlades />, size: '1.8rem', top: '70%', left: '10%', animation: 'fly3 18s linear infinite' }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      {flyingObjects.map(obj => (
        <div key={obj.id} className="position-absolute" style={{
          color: 'rgba(79, 172, 254, 0.6)',
          fontSize: obj.size,
          top: obj.top,
          left: obj.left,
          animation: obj.animation,
          zIndex: 0
        }}>
          {obj.icon}
        </div>
      ))}

      <div className="container position-relative py-5" style={{ zIndex: 1 }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-3" style={{
              // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: "orbitron",
            }}>
              <span style={{ fontSize: '5rem' }}>C</span>lient <span style={{ fontSize: '5rem' }}>R</span>eviews
            </h2>
            <p className="lead text-white-50">
              What our valued clients say about our services
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          {getVisibleReviews().map((review) => (
            <div key={review.id} className="col-12 col-md-6 col-lg-4 p-2">
              <div className="card h-100 border-0" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4 mx-auto" style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #4facfe'
                  }}>
                    <img
                      src={review.image}
                      alt={review.name}
                      className="img-fluid h-100 w-100 object-fit-cover"
                    />
                  </div>

                  <FaQuoteLeft className="mb-3" style={{ color: '#4facfe', fontSize: '1.5rem' }} />

                  <p className="mb-4 text-white-50" style={{ minHeight: '100px' }}>
                    {review.review}
                  </p>

                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        style={{
                          color: i < review.rating ? '#FFD700' : '#6c757d',
                          fontSize: '1.2rem'
                        }}
                      />
                    ))}
                  </div>

                  <h5 className="text-white mb-1" style={{ fontFamily: 'orbitron', fontSize: '1.2rem' }}>{review.name}</h5>
                  <p className="text-white-50 small">{review.company}</p>
                </div>
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
          25% { transform: translateY(-50px) translateX(50px) rotate(90deg); }
          50% { transform: translateY(0) translateX(100px) rotate(180deg); }
          75% { transform: translateY(50px) translateX(50px) rotate(270deg); }
          100% { transform: translateY(0) translateX(0) rotate(360deg); }
        }

        @media (max-width: 992px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientReviews;
