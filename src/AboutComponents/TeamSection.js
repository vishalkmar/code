import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { GiSpinningBlades, GiCommercialAirplane } from 'react-icons/gi';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rahul Sharma",
    //   role: "CEO & Founder",
      bio: "Technology visionary with 15+ years of experience in software development and business strategy.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
    //   role: "CTO",
      bio: "Expert in scalable architecture and leading engineering teams to build robust solutions.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Amit Singh",
    //   role: "Lead Developer",
      bio: "Full-stack developer specializing in React, Node.js, and cloud infrastructure.",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
      id: 4,
      name: "Neha Gupta",
    //   role: "UX Designer",
      bio: "Creative designer focused on creating intuitive user experiences and beautiful interfaces.",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 5,
      name: "Vikram Joshi",
    //   role: "DevOps Engineer",
      bio: "Infrastructure specialist automating deployments and optimizing cloud environments.",
      image: "https://randomuser.me/api/portraits/men/81.jpg"
    },
    {
      id: 6,
      name: "Ananya Reddy",
    //   role: "Product Manager",
      bio: "Bridges business needs with technical solutions to deliver exceptional products.",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="py-5 position-relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      {/* Flying Objects */}
      <GiCommercialAirplane className="position-absolute" style={{
        color: 'rgba(79, 172, 254, 0.3)',
        fontSize: '3rem',
        top: '15%',
        left: '5%',
        animation: 'flyRight 15s linear infinite',
        zIndex: 0
      }} />
      <GiSpinningBlades className="position-absolute" style={{
        color: 'rgba(79, 172, 254, 0.3)',
        fontSize: '2.5rem',
        top: '80%',
        left: '85%',
        animation: 'flyLeft 20s linear infinite',
        zIndex: 0
      }} />

      <div className="container position-relative py-5" style={{ zIndex: 1 }}>
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-3" style={{
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily:'orbitron',
              fontSize:'4.5rem'
            }}>
              Meet Our Team
            </h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              The talented professionals behind our success
            </p>
          </div>
        </div>

        <div className="row g-4">
          {teamMembers.map(member => (
            <div key={member.id} className="col-12 col-md-6 col-lg-4">
              <div className="team-card position-relative overflow-hidden rounded" style={{
                height: '450px',
                cursor: 'pointer'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="img-fluid w-100 h-100 object-fit-cover"
                />
                
                {/* Name Badge */}
                <div className="position-absolute bottom-0 start-0 w-100 p-3 text-center" style={{
                  background: 'rgba(10, 26, 46, 0.8)',
                  transition: 'all 0.3s ease'
                }}>
                  <h5 className="text-white mb-1" style={{fontFamily:'orbitron',fontSize:'1.5rem'}}>{member.name}</h5>
                  {/* <p className="text-white-50 small mb-0">{member.role}</p> */}
                </div>
                
                {/* Hover Overlay */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center p-4" style={{
                  background: 'rgba(79, 172, 254, 0.9)',
                  opacity: 0,
                  transition: 'all 0.3s ease',
                  transform: 'translateY(100%)'
                }}>
                  <h5 className="text-white mb-2">{member.name}</h5>
                  <p className="text-white-50 small mb-3">{member.role}</p>
                  <p className="text-white mb-4">{member.bio}</p>
                  {/* <div className="d-flex justify-content-center">
                    <a href="#" className="text-white mx-2"><FaLinkedin /></a>
                    <a href="#" className="text-white mx-2"><FaTwitter /></a>
                    <a href="#" className="text-white mx-2"><FaGithub /></a>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes flyRight {
          0% { transform: translateX(-100px) translateY(0) rotate(0deg); }
          100% { transform: translateX(100vw) translateY(-100px) rotate(360deg); }
        }
        
        @keyframes flyLeft {
          0% { transform: translateX(100vw) translateY(0) rotate(0deg); }
          100% { transform: translateX(-100px) translateY(100px) rotate(-360deg); }
        }
        
        .team-card:hover img {
          transform: scale(1.05);
        }
        
        .team-card:hover .position-absolute:last-child {
          opacity: 1;
          transform: translateY(0);
        }
        
        .team-card:hover .position-absolute:nth-last-child(2) {
          opacity: 0;
        }
        
        .team-card img {
          transition: transform 0.5s ease;
        }
        
        @media (max-width: 992px) {
          .team-card {
            height: 300px !important;
          }
        }
        
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
          
          .team-card {
            height: 280px !important;
          }
        }
        
        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem;
          }
          
          .team-card {
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamSection;