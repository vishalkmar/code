import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import one from '../src/serviceImages/office/one.jpg'
import two from '../src/serviceImages/office/two.jpg'
import three from '../src/serviceImages/office/three.jpg'
import four from '../src/serviceImages/office/four.jpg'

const CompanyIntro = () => {
  const images = [
       one,two,three,four
  ];

  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)' }}>
      <div className="container">
        
        <h1 style={{fontWeight:'bold',fontFamily:'orbitron',fontSize:'3.5rem',color:'white',
            //  background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
            background: 'linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
        }} className='py-5 text-center'>Empowering Brands with Digital Excellence</h1>
        <div className="row align-items-center">
          {/* Image Grid */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row g-3">
              {images.map((src, index) => (
                <div key={index} className="col-6">
                  <img
                    src={src}
                    alt={`Office ${index + 1}`}
                    className="img-fluid rounded shadow-sm"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6 text-white">
            <h2 className="fw-bold text-uppercase mb-3" style={{ fontSize: '2rem',fontFamily:'orbitron'}}>
              BUILDING DIGITAL FUTURES WITH CREATIVE INNOVATION
            </h2>
            <div
              style={{
                height: '5px',
                width: '120px',
                background: 'linear-gradient(to right, #facc15, #8b5cf6)',
                marginBottom: '1.5rem'
              }}
            />
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              We specialize in <strong style={{fontFamily:'orbitron',color:""}}>Digital Marketing</strong>, <strong style={{fontFamily:'orbitron',color:"Orange"}}>Content Designing</strong>,
              <strong style={{fontFamily:'orbitron',color:"Orange"}}> Logo Designing</strong>, <strong style={{fontFamily:'orbitron',color:"Orange"}}>Web Development</strong>, and <strong style={{fontFamily:'orbitron',color:"Orange"}}>Mobile App Development</strong>.
              Our team delivers tailored solutions that combine creativity with cutting-edge technology to empower your brand in the digital world.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
              Whether you're launching a startup or scaling an enterprise, we bring ideas to life with impactful digital experiences that drive growth and success.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
