import {React,useRef} from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../components/icons';
import services from '../data/services';
import projects from '../data/projects';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import '../styles/HomePage.css';
import heroBg from '../assets/images/hero-bgd.png'

export const HomePage = () => {
  const aboutRef = useRef(null);

  const featuredProjects = projects.slice(0, 3);


  return (


    <>
      {/* Section d'en-tête avec titre, description et appel à l'action */}

  <section
  className="position-relative d-flex align-items-center text-white bg-hero"
  style={{ minHeight: "100vh" }}
>
  {/* Arrière-plan avec opacité */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100 "
    style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      opacity: 0.2,
      zIndex: 0,
    }}
  ></div>

  {/* Contenu au-dessus */}
  <div className="container position-relative py-5 bg-black
   bg-opacity-25" style={{ zIndex: 1}}>
    <div className="row align-items-center text-center text-lg-start">
      <div className="col-12 col-lg-8 mx-auto">
        <p className="mb-4 display-5 fw-bold" style={{ color: "#2b5264" }}>
          Bonjour, <br />
          Je suis Cristina{" "}
          <strong  className='text-uppercase ' style={{ color: "#5598b8" }}><br/>
            Conceptrice  && Développeuse d'applications <span className=''>Java</span>
            
          </strong>
        </p>

        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mt-5">
          <Link to="/portfolio" className="btn btn-light me-sm-4">
            Voir mes Projets
          </Link>
          <Link to="/contact" className="btn btn-outline-light">
            On Discute ?
          </Link>
        </div>
           {/* Bouton */}
        <button className="mt-5 px-2 py-1 bg-transparent text-light font-semibold rounded-full hover:bg-gray-200 transition border-0"
        onClick={()=>{
          aboutRef.current?.scrollIntoView({behavior:"smooth"});
        }}
        >DÉCOUVREZ-EN PLUS
         <br />
          <span className=' ms-3 fs-5 animated-arrow'>⬇️</span>
        </button>
      </div>
    </div>
  </div>
</section>




      {/* Section À propos */}

      <section className="py-5" ref={aboutRef}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 ">
              <img src="/src/assets/images/profil.jpg" alt="Développeur professionnel" className=" rounded-3 shadow-lg " style={{maxWidth:400}} />
            </div>
            <div className="col-lg-6  ps-lg-5">
              <h2 className='mb-4'>À Propos de Moi</h2>
              <p className="lead mb-4">
<strong className="text-info">Conceptrice Développeuse d'applications Java</strong>, 
passionnée par les nouvelles technologies et motivée à construire ma carrière dans le développement logiciel. 
Curieuse, persévérante et adaptable, j’apprends rapidement de nouveaux frameworks ou librairies et je suis toujours prête à enrichir mes compétences. 
Je m’intéresse particulièrement au clean code, à la structuration des bases de données, à l’optimisation des performances et à l’expérience utilisateur (UX). 
Mon objectif est de progresser en contribuant à la conception et au développement de solutions logicielles fiables et utiles, tout en continuant à me former aux nouvelles technologies.
              </p>

              {/* <ul className="mb-4 list-unstyled ">
                <li className="mb-3 d-flex align-items-center">
                  <Badge className="text-info p-4" />
                 <span className='ms-3'> Développement Frontend</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Badge className="text-info me-2" />
                 <span className='ms-3'>  Développement Backend</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <Badge className="text-info me-2" />
                  <span className='ms-3' >Conception & Design UI/UX</span>
                </li>
               
              </ul> */}

              <Link to='/about' className=' mt-3 btn btn-outline-info'>En savoir Plus sur Mon Parcours</Link>
            </div>
          </div>
        </div>
      </section>


      {/* Section Services */}
      <section className="py-5 ">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <h2>Mon Expertise</h2>
              <p>Une expertise spécialisée pour donner vie à vos visions digitales</p>
            </div>
          </div>
          
          <div className="row">
            {services.slice(0, 3).map(service => (
              <div key={service.id} className="col-md-6 col-lg-4 mb-4 ">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="row mt-4">
            <div className="col text-center">
              <Link to="/services" className="btn btn-outline-info">
                Tous les Services
                {/* <ArrowRight size={16} className="ms-1" /> */}
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* //Section Projets récents */}
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center mb-5'>
            <div className='col-lg-6 text-center'>
              <h2>Projets Récents</h2>
              <p>Une sélection de mes  réalisations</p>
            </div>

          </div>

          <div className='row'>
            {featuredProjects.map(project => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-4 d-flex">
                <ProjectCard
                 project={project}
                 showDescription={false}
                 showtechnologies={false}
                 />
              </div>
            ))}

          </div>

          <div className='row mt-4'>
            <div className='col text-center'>
              <Link to='/portfolio' className='btn btn-outline-info'>
                Voir tous les projets
              </Link>
            </div>
          </div>
        </div>
      </section>

    <section className="my-5 py-5 bg-cta text-white">
  <div className="container">
    <div className="row align-items-center text-center text-lg-start">
      
      {/* Colonne 1 : le texte "En ce moment" */}
      <div className="col-lg-4 mb-4 mb-lg-0">
        <p className=" text-secondary text-uppercase fw-bold display-5">En ce moment</p>
      </div>

      {/* Colonne 2 : le reste */}
      <div className="col-lg-8">
        <h2 className="mb-3">Je suis disponible pour travailler (CDI)</h2>
        <p className="mb-4">Collaborons pour créer quelque chose d'innovant ensemble.</p>
        <Link to="/contact" className="btn btn-light">Me contacter</Link>
      </div>
    </div>
  </div>
</section>



    </>
  );
};
