import React from 'react';
import services from '../data/services';
import ServiceCard from '../components/ServiceCard';
import ampouleImage from '../assets/ampoule.svg';

const ServicesPage = () => {
  const radius = 390; // distance des cercles du centre
  const circleSize = 250; // taille des cercles services

  return (
    <section className="min-vh-100 d-flex justify-content-center align-items-center service-page py-5">
      <div className="container text-center">
        <h2 className=" display-5 fw-bold"
        style={{marginBottom:"10rem"}}
        
        >Domaines d'expertise</h2>

        {/* --- Version desktop : cercle + ampoule --- */}
        <div
          className="position-relative mx-auto d-none d-lg-block"
          style={{ width: '850px', height: '850px' }}
        >
          {/* Ampoule au centre */}
          <div
            className=" rounded d-flex align-items-center justify-content-center shadow-lg"
            style={{
              width: '400px',
              height: '400px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
            }}
          >
            <img
              src={ampouleImage}
              alt="Illustration expertise"
              style={{ maxWidth: '75%', height: 'auto' }}
            />
          </div>

          {/* Services en cercle */}
          {services.map((service, index) => {
            const angle = (index / services.length) * (2 * Math.PI);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={service.id}
                className=" rounded-circle shadow d-flex align-items-center justify-content-center position-absolute transition-all"
                style={{
                  width: `${circleSize}px`,
                  height: `${circleSize}px`,
                  top: `calc(50% + ${y}px)`,
                  left: `calc(50% + ${x}px)`,
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  padding:'10px'
                }}
              >
                <div className="d-flex align-items-center justify-content-center w-100 h-100 px-3">
                  <ServiceCard {...service} />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Version mobile & tablette : grille fluide --- */}
        <div className="d-lg-none">
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-12 col-sm-6">
                <div className="bg-white rounded shadow-sm d-flex align-items-center justify-content-center p-4 h-100 transition-all">
                  <ServiceCard {...service} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
