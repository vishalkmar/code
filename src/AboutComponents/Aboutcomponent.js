import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRocket, FaUsers, FaChartLine, FaCode} from 'react-icons/fa';
import { GiSpinningBlades, GiCommercialAirplane } from 'react-icons/gi';
import softwareimage from '../../src/serviceImages/aboutfolder/softwaresolution.jpg'

import galone from '.././serviceImages/app/galone.jpg'
import galtwo from '.././serviceImages/app/galtwo.jpg'
import galthree from '.././serviceImages/app/galthree.jpg'
import galfour from '.././serviceImages/app/galfour.jpg'
import galfive from '.././serviceImages/app/galfive.jpg'
import galsix from '.././serviceImages/app/galsix.jpg'

const AboutSecondSection = () => {
  const [activeTab, setActiveTab] = useState('mission');
  // const [hoveredImage, setHoveredImage] = useState(null);

  // Sample gallery images (replace with your actual images)
  const galleryImages = [
    { id: 1, src:galone, alt: 'Our Team Working' },
    { id: 2, src:galtwo, alt: 'Office Environment' },
    { id: 3, src:galthree, alt: 'Team Meeting' },
    { id: 4, src:galfour, alt: 'Coding Session' },
    { id: 5, src:galfive, alt: 'Project Discussion' },
    { id: 6, src:galsix, alt: 'Celebration' }
  ];

  const stats = [
    { id: 1, value: 60, label: 'Projects Completed', icon: <FaRocket /> },
    { id: 2, value: 40, label: 'Happy Clients', icon: <FaUsers /> },
    { id: 3, value: 4, label: 'Years Experience', icon: <FaChartLine /> },
    { id: 4, value: 20, label: 'Team Members', icon: <FaCode /> }
  ];

  const flyingObjects = [
    { id: 1, icon: <GiCommercialAirplane />, size: '2rem', top: '15%', left: '5%', animation: 'fly1 15s linear infinite' },
    { id: 2, icon: <GiSpinningBlades />, size: '1.8rem', top: '80%', left: '85%', animation: 'fly2 20s linear infinite' }
  ];

  return (
    <section className="py-5 position-relative h-auto" style={{
      background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      {/* Flying Objects */}
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
        {/* Header */}
        <div className="row mb-5 text-center ">
          <div className="col-12">
            <h2 className="display-3 fw-bold mb-3" style={{
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Rubik Mono One'

            }}>
             The Brains Behind the Brand
            </h2>
            <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
              Pioneering software solutions since 2015 with a passion for innovation and excellence
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-5">
          {stats.map(stat => (
            <div key={stat.id} className="col-6 col-md-3">
              <div className="text-center p-3" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div className="display-4 fw-bold mb-2" style={{
                  background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {stat.value}+
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{ color: '#4facfe' }}>
                  <span className="me-2">{stat.icon}</span>
                  <span className="text-white-50">{stat.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="d-flex justify-content-center mb-4">
              <button
                className={`btn btn-sm mx-2 ${activeTab === 'mission' ? 'active' : ''}`}
                style={{
                  background: activeTab === 'mission' ? 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeTab === 'mission' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '8px 24px',
                  fontFamily:'orbitron'
                }}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
              <button
                className={`btn btn-sm mx-2 ${activeTab === 'values' ? 'active' : ''}`}
                style={{
                  background: activeTab === 'values' ? 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeTab === 'values' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '8px 24px',
                  fontFamily:'orbitron'
                }}
                onClick={() => setActiveTab('values')}
              >
                Core Values
              </button>
              {/* <button
                className={`btn btn-sm mx-2 ${activeTab === 'team' ? 'active' : ''}`}
                style={{
                  background: activeTab === 'team' ? 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: activeTab === 'team' ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '8px 24px'
                }}
                onClick={() => setActiveTab('team')}
              >
                Meet The Team
              </button> */}
            </div>

            <div className="card border-0 p-4" style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              minHeight: '300px'
            }}>
              {activeTab === 'mission' && (
                <div className="row align-items-center">
                  <div className="col-md-6 px-4">
                    <h3 className="h2 mb-4 text-white" style={{fontFamily:'orbitron'}} >Driving Digital Transformation</h3>
                    <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem' }}>
                      We empower businesses through cutting-edge software solutions that solve real-world problems. 
                      Our mission is to bridge the gap between technology and business needs, delivering products 
                      that not only meet but exceed expectations.
                    </p>
                    <p className="text-white-50" style={{ fontSize: '1.1rem' }}>
                      With 50+ successful projects across various industries, we've established ourselves as 
                      trusted partners in digital innovation.
                    </p>
                  </div>
                  <div className="col-md-6 text-center text-white">
                      <img src={softwareimage} alt="img not found" className='img-fluid w-100 h-100 object-fit-cover' style={{objectFit:'cover'}}/>
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="row">
                  <div className="col-12">
                    <h3 className="h2 mb-4 text-white" style={{fontFamily:'orbitron'}} >What We Stand For</h3>
                    <div className="row g-4">
                      {[
                        { title: 'Innovation', desc: 'Constantly pushing boundaries to deliver groundbreaking solutions' },
                        { title: 'Integrity', desc: 'Honest, transparent communication in all our dealings' },
                        { title: 'Excellence', desc: 'Relentless pursuit of quality in every line of code' },
                        { title: 'Collaboration', desc: 'Strong partnerships with clients and team members' }
                      ].map((value, i) => (
                        <div key={i} className="col-md-6">
                          <div className="p-3" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            borderRadius: '10px',
                            borderLeft: `3px solid ${i % 2 === 0 ? '#4facfe' : '#00f2fe'}`
                          }}>
                            <h4 className="h5 mb-2 text-white" style={{fontFamily:'orbitron'}} >{value.title}</h4>
                            <p className="text-white-50 mb-0">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="row">
                  <div className="col-12">
                    <h3 className="h2 mb-4 text-white">Our Talented Team</h3>
                    <p className="text-white-50 mb-4" style={{ fontSize: '1.1rem' }}>
                      300+ skilled professionals including developers, designers, and strategists working 
                      collaboratively to deliver exceptional results. Our team combines technical expertise 
                      with creative problem-solving to build solutions that matter.
                    </p>
                    <div className="d-flex justify-content-center">
                      <div className="position-relative" style={{ width: '100%', maxWidth: '500px' }}>
                        <div className="ratio ratio-16x9">
                          <iframe 
                            src="https://www.youtube.com/embed/your-video-id" 
                            title="Our Team Video" 
                            allowFullScreen
                            style={{
                              borderRadius: '10px',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Gallery - Now with NO ZOOM EFFECTS */}
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="h2 text-center text-white mb-4" style={{fontFamily:'orbitron'}} >Our Work Gallery</h3>
            <div className="row g-3">
              {galleryImages.map(image => (
                <div key={image.id} className="col-6 col-md-4 col-lg-2">
                  <div 
                    className="position-relative overflow-hidden rounded" 
                    style={{
                      aspectRatio: '1/1'
                    }}
                    // onMouseEnter={() => setHoveredImage(image.id)}
                    // onMouseLeave={() => setHoveredImage(null)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="img-fluid w-100 h-100 object-fit-cover"
                      style={{
                        transition: 'filter 0.3s ease',
                        // filter: hoveredImage === image.id ? 'brightness(0.8)' : 'brightness(1)'
                      }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      // opacity: hoveredImage === image.id ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA - Stable Button Without Transform Effects */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="card border-0 p-5" style={{
              background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)',
              borderRadius: '15px'
            }}>
              <h3 className="h2 mb-3 text-white" style={{fontFamily:'orbitron'}} >Ready to Start Your Project?</h3>
              <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                Let's discuss how we can help you achieve your business goals with our custom software solutions.
              </p>
              <button className="btn btn-lg px-4 py-2" style={{
                background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                border: 'none',
                borderRadius: '50px',
                color: 'white',
                fontWeight: '600',
                transition: 'box-shadow 0.3s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                fontFamily:'orbitron'
              }}>
                Get in Touch
              </button>
            </div>
          </div>
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
        
        @media (max-width: 768px) {
          .display-3 {
            font-size: 2.5rem;
          }
          
          .btn-sm {
            padding: 6px 12px !important;
            margin: 0 4px !important;
            font-size: 0.8rem;
          }
        }
        
        @media (max-width: 576px) {
          .display-3 {
            font-size: 2rem;
          }
          
          .col-lg-2 {
            flex: 0 0 33.333%;
            max-width: 33.333%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSecondSection;