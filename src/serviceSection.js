import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marketing from'../src/serviceImages/marketing.png'
import development from  '../src/serviceImages/softwaredevelopment.png'
import mobileapp from '../src/serviceImages/mobileapp.png'
import digitalmarketing from'../src/serviceImages/digitalmarketing.png'
import logodesign from '../src/serviceImages/logodesign.png'
import Seo from '../src/serviceImages/seo.png'
import contentmarketing from '../src/serviceImages/contentmarketing.png'
import webdesign from '../src/serviceImages/webdesign.png'
import softwaredevelopment from '../src/serviceImages/softwaredevelopment.png'
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {

  const navigate = useNavigate();
 const services = [
    {
      id: 1,
      title: "Social Media Marketing",
      description: "Boost your brand's online presence with our strategic social media campaigns that engage audiences and drive conversions across all major platforms.",
      image: marketing,
      color: "#4facfe",
      url:'socialmediamarketing'
    },
    {
      id: 2,
      title: "Website Development",
      description: "We build responsive, high-performance websites tailored to your business needs using the latest technologies and best development practices.",
      image: development,
       color: "#4facfe",
       url:'webdevelopment'
    },
    {
      id: 3,
      title: "Mobile App Development",
      description: "Create powerful mobile experiences with our custom iOS and Android app development services that deliver seamless user experiences.",
      image:mobileapp,
       color: "#4facfe",
       url:'appdevelopment'
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that increase visibility, drive traffic, and convert leads into loyal customers for your business.",
      image: digitalmarketing,
       color: "#4facfe",
       url:'digitalmarketing'
    },
    {
      id: 5,
      title: "SEO Services",
      description: "Improve your search rankings with our data-driven SEO strategies that optimize your website for both users and search engines.",
      image: Seo,
      color: "#4facfe",
      url:'seo'
    },
    {
      id: 6,
      title: "Software Development",
      description: "Custom software solutions designed to streamline your business operations and provide competitive advantages in your industry.",
      image: softwaredevelopment,
       color: "#4facfe",
       url:'softwaredevelopment'
    },
    {
  id: 7,
  title: "Logo Design",
  description: "Craft memorable and versatile logos that capture your brand’s identity and leave a lasting impression across all media.",
  image: logodesign,  // import or URL for your logo design image
  color: "#4facfe",
  url:'logodesign'
},
{
  id: 8,
  title: "Content Marketing",
  description: "Engage and educate your audience with high-quality content strategies—from blog posts to whitepapers—that build trust and authority.",
  image: contentmarketing,  // import or URL for your content marketing image
  color: "#4facfe",
  url:'contentmarketing'
},
{
  id: 9,
  title: "Web Design",
  description: "Design stunning, user-friendly websites with intuitive layouts and modern aesthetics to maximize engagement and conversions.",
  image: webdesign,  // import or URL for your web design image
  color: "#4facfe",
  url:'webdesign'
}

  ];
  return (
    <>
    <section className="py-5" style={{
     background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)'
    }}>
      <div className="container py-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-4 fw-bold mb-3 responsive-text" style={{
              // background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
              background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize:'5rem',
              fontFamily:'orbitron'
            }}>
              Our Services
            </h2>
            <p className="lead text-white-50">
              Professional solutions for your business needs
            </p>
          </div>
        </div>
        
        <div className="row g-4">
          {services.map((service) => (
            <div key={service.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 border-0" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                transition: 'all 0.2s ease',
                // Very subtle hover effect
                ':hover': {
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                }
              }}>
                <div className="card-body text-center p-4 d-flex flex-column">
                  <div className="mb-4 mx-auto" style={{ 
                    width: '120px', 
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={service.image} 
                      alt={service.title}
                      style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        border: `2px solid ${service.color}`
                      }}
                    />
                  </div>
                  
                  <h3 className="h4 mb-3 text-white" style={{fontFamily:'orbitron'}}>{service.title}</h3>
                  
                  <p className="mb-4 text-white-50 flex-grow-1">
                    {service.description}
                  </p>
                  
                  <button 
                    className="btn btn-sm mt-auto mx-auto" 
                    style={{
                      backgroundColor: service.color,
                      color: 'white',
                      borderRadius: '50px',
                      padding: '8px 24px',
                      fontWeight: '500',
                      border: 'none'
                    }}
                    onClick={()=>{
                       navigate(`/${service.url}`)
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <style>{`
        @media (max-width: 575.98px) {
          .responsive-text {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
      </>
  );
};

export default ServicesSection;