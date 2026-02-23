import React from 'react';
// import '../styles/AboutPage.css';
import skillsData from '../skils.json';
import '../styles/AboutPage.css';
// import vscode from '/public/icons /skils/vscode-icon.png';


const AboutPage = () => {

const experiences = [
  {
    id: 1,
    position: 'Concepteur/Développeur Java - stagiaire',
    company: 'Illian Technologies',
    period: 'mars/juillet - 2025',
    description: "Développement d'une plateforme de formation en Java FullStack proposant des cours de développement logiciel et création UI/UX. Apprentissage continu des bonnes pratiques et des architectures modernes. Projet en cours de développement...",
    type: 'dev'
  },
  {
    id: 2,
    position: 'Développeur Fullstack Javascript - stagiaire',
    company: 'Illian Technologies',
    period: 'mai/2024',
    description: "Participation au démarrage d’un site de recrutement en React et Node.js, avec une équipe de trois développeurs. Mise en place des premières interfaces front-end et de l’architecture back-end (API REST, authentification JWT). Projet repris et finalisé par une autre équipe.",
    type: 'dev'
  },
  {
    id: 3,
    position: 'Employée polyvalente',
    company: 'Pomme de Pain, Paris',
    period: '2021 - 2022',
    description: "Accueil client, gestion des commandes et travail en équipe dans un environnement dynamique.",
    type: 'autre'
  },
  {
    id: 4,
    position: 'Serveuse',
    company: 'Restaurant Le Barrault Vins, Paris',
    period: '2015 - 2019',
    description: "Service en salle, prise de commandes, gestion des encaissements.",
    type: 'autre'
  },
  {
    id: 5,
    position: 'Archiviste',
    company: 'S.C Stefadina Comserv SRL, Roumanie',
    period: '2008 - 2012',
    description: "Gestion de projets documentaires, organisation et traitement d’archives, priorisation des tâches.",
    type: 'autre'
  }
];


const education = [
  {
    id: 1,
    side: 'left',
    degree: "Concepteur Développeur (BAC+3/4) ",
    institution: "Ecole Sup' de Tech Créatives Doranco",
    period: "2024/2025",
    description: "",
    icon: "bi bi-laptop"
  },
  {
    id: 2,
    side: 'right',
    degree: "Développeur web fullstack (BAC+2)",
    institution: "3W Academy",
    period: "2023/2024",
    description: "",
    icon: "bi bi-code-slash"
  },
  {
    id: 3,
    side: 'left',
    degree: "Master 1 MEEF Documentation",
    institution: "UPEC / Créteil",
    period: "2022/2023",
    description: "",
    icon: "bi bi-journal-bookmark"
  },
  {
    id: 4,
    side: 'right',
    degree: "ACP - Anglais - GMTE 94",
    institution: "Collège N. Boileau / Chennevières",
    period: "2019",
    description: "",
    icon: "bi bi-translate"
  },
  {
    id: 5,
    side: 'left',
    degree: "Licence d’Archiviste",
    institution: "Académie de Police Alexandru IoanCuza, Roumanie",
    period: "2005/2008",
    description: "",
    icon: "bi bi-archive"
  },
  {
    id: 6,
    side: 'right',
    degree: "BAC Mathématiques-Informatique",
    institution: "Lycée Théorique “Mihai Eminescu” - Barlad",
    period: "2001/2004",
    description: "",
    icon: "bi bi-calculator"
  }
];



  //     const [currentIndex, setCurrentIndex] = useState(0); // Déclarer l'état pour stocker l'index de la catégorie actuelle, initialisé à 0


  //   const categories = Object.keys(skills); // Obtenir les clés (catégories) de l'objet compétences

  //   const currentCategory = categories[currentIndex];
  // const currentSkills = skills[currentCategory];




  const devExperiences = experiences.filter(exp => exp.type ==='dev')
  const otherExperiences = experiences.filter(exp => exp.type === 'autre')


  return (
    <>
      {/* En-tête */}
      <section className=" py-5 page-header mt-5" >
        <div className="container text-center mb-5">
          <h1 className="display-4 fw-bold mt-5">À propos de moi</h1>
          <p className="lead">Découvrez mon parcours, mes compétences et ma motivation</p>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-5 section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0 position-relative">
              <img
                src="/profil.jpg"
                alt="Photo professionnelle"
                className="img-fluid rounded-3 shadow-lg"
              />

            </div>
            <div className="col-lg-7 ps-lg-5">
              <h2 className="section-title text-start">Qui suis-je ?</h2>
              <p className="lead mb-4">
                Conceptrice-développeuse web passionnée par le développement et l'informatique en général, motivée par  la création de solutions innovantes et performantes.
              </p>
              <p className="mb-4">
                Diplômée d’un Bac +4 en Conception et Développement Informatique, je suis actuellement à la recherche d’un  poste en développement web back-end afin de mettre en pratique mes compétences acquises en formation et lors de mes stages.
              </p>
              <p className="mb-4">
                Au cours de ces expériences, j’ai contribué à des projets concrets en front-end et back-end en utilisant des technologies comme Java, JavaScript , HTML5, CSS3, et des frameworks modernes tels que Spring Boot , React/Next.js, Bootstrap ...
              </p>
              <p className="mb-4">
                Curieuse, rigoureuse et autonome, je m'intéresse également à des sujets comme l'intégration continue (CI/CD), Docker, l’administration réseau, ainsi que la maintenance logicielle et matérielle. Cette polyvalence me permet d'avoir une vision globale du cycle de développement.
              </p>
               <p className="mb-4">
              </p>       Je suis en mesure de concevoir un produit dans son intégralité, depuis l’analyse des besoins fonctionnels jusqu’à son déploiement en production. Cela inclut la rédaction des spécifications, la conception UI/UX centrée utilisateur, le développement front-end et back-end, ainsi que la mise en place des tests, de l’intégration continue et de l’infrastructure de déploiement.

            
            
              <p className="mb-4">
                Je suis motivée, disponible, et prête à intégrer une équipe dynamique où je pourrai continuer à apprendre et à contribuer à des projets concrets.
              </p>


              {/* <div className="mt-4">
                <a href="#" className="btn btn-warning">
                  <i className="bi bi-download me-2"></i> Télécharger mon CV
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
  <section className="py-5 ">
  <div className="container">
    <div className="text-center ">
      <h2 className="section-title">Mes Compétences</h2>
      <p className="text-light">Technologies et outils que j'utilise</p>
    </div>

    {Object.entries(skillsData).map(([category, skills]) => (
      <div key={category} className="mb-5">
        <h4 className=" mt-5  text-light text-capitalize " >{category}</h4>
        <hr  style={{width:"50px"}}/>
        <div className="row g-4  p-5">
          {skills.map(skill => (
            <div key={skill.name} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center text-light text-capitalize">
    <div
  className="card border-0 py-5 rounded-circle mx-auto d-flex flex-column align-items-center justify-content-center"
  style={{
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    width: '120px',
    height: '120px',
    cursor: 'default',
    boxShadow: '0 8px 20px rgba(90, 206, 186, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)'
  }}
>

                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="img-fluid mb-2"
                  style={{ height: '40px', objectFit: 'contain' }}
                />
                <p className="mb-0 text-secondary">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    {/* <div className="mt-5 text-center">
      <h4 className="my-5">Compétences & outils complémentaires</h4>
      <div className="d-flex flex-wrap justify-content-center gap-2">
        {['Git', 'Docker', 'Sass/SCSS', 'PostgreSQL', 'Jenkins', 'Eclipse', 'Maven'].map((tool, i) => (
          <span key={i} className="badge bg-dark-subtle text-dark py-2 px-3">{tool}</span>
        ))}
      </div>
    </div> */}
  </div>
</section>


      {/* Expérience & Formation */}
      <section className="py-5 section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-6 text-center">
              <h2 className="section-title">Expérience & Formation</h2>
              <p>Mon parcours professionnel et académique</p>
            </div>
          </div>
          <div className="row ">
      <div className="col-lg-12 mb-5 mb-lg-0">
  <div className="mb-5">
    <h3 className="fw-bold mb-4">
      <i className="bi bi-briefcase-fill me-2 text-primary"></i>
      Expérience Professionnelle
    </h3>
  </div>

  {/* Développement */}
  <div className="row g-4  mb-4  justify-content-center ">
    {devExperiences.map(exp => (
      <div key={exp.id} className=" col-lg-12  text-light">
        <div className="card shadow-sm border-0 w-100 h-100">
          <div className="card-body">
            <div className="d-flex align-items-center mb-2">
             
              <small className="d-flex align-items-center text-secondary">
                <i className="bi bi-calendar3 me-2"></i> {exp.period}
              </small>
            </div>
            <h5 className="card-title fw-bold  fs-5">{exp.position}</h5>
            <h6 className="card-subtitle mb-2 text-secondary">{exp.company}</h6>
            <hr />
            <p className="card-text  ">{exp.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Autres expériences */}
  <h5 className="fw-bold mt-5  text-capitalize">Autres expériences</h5>
  <hr  className='mb-5'/>
  <div className="row g-4 ">
    {otherExperiences.map(exp => (
      <div key={exp.id} className="col-lg-12  text-light">
        <div className="card shadow-sm border-0 ">
          <div className="card-body ">
            <div className=" mb-2">
              
              <small className=" text-secondary">
                <i className="bi bi-calendar3 me-2 "></i> {exp.period}
              </small>
            </div>
            <h5 className="card-title fw-bold fs-5">{exp.position}</h5>
            <h6 className="card-subtitle mb-2 text-secondary">{exp.company}</h6>
            <hr />
            <p className="card-text  ">{exp.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



            {/* Formation */}
          {/* Formation */}
          <hr className='mt-5' />
<div className="col-12 m-5">
  <div className="text-center mb-5">
    <i className="bi bi-mortarboard-fill fs-3 me-2 text-primary"></i>
    <h3 className="mb-0">Formation</h3>
  </div>

  <div className="position-relative" style={{ minHeight: '300px' }}>
    {/* Ligne verticale */}
    <div className="position-absolute top-0 start-50 translate-middle-x bg-light" style={{ width: '4px', height: '100%' }}></div>

    {education.map((edu) => (
      <div key={edu.id} className="row position-relative mb-5 ">
        {edu.side === 'left' && (
          <>
            <div className="col-6 text-end pe-4 d-flex justify-content-end ">
              <div className="card-edu p-3 shadow-sm " style={{ maxWidth: '90%' }}>
                <small className=""><i className="bi bi-calendar3 me-1"></i>{edu.period}</small>
                <h5 className='fs-5 fw-bold'>{edu.degree}</h5>
                <h6 className="text-secondary " >{edu.institution}</h6>
                <p className="mb-0">{edu.description}</p>
              </div>
            </div>
            <div className="col-6"></div>
          </>
        )}

        {edu.side === 'right' && (
          <>
            <div className="col-6"></div>
            <div className="col-6 text-start ps-4 d-flex justify-content-start">
              <div className="card-edu p-3 shadow-sm" style={{ maxWidth: '90%' }}>
                <small className=""><i className="bi bi-calendar3 me-1"></i>{edu.period}</small>
                <h5 className='fs-5 fw-bold'>{edu.degree}</h5>
                <h6 className="text-secondary">{edu.institution}</h6>
                <p className="mb-0">{edu.description}</p>
              </div>
            </div>
          </>
        )}

        {/* Marqueur avec icône */}
        <div className="position-absolute top-50 start-50 translate-middle bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '30px', height: '30px' }}>
          <i className={`${edu.icon} text-primary fs-5`}></i>
        </div>
      </div>
    ))}
  </div>
</div>


          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
