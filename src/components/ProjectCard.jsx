
// import React from "react";

//  const ProjectCard = ({project}) => {

//   const {title,image} = project;

//   return (

//     <div className="card h-100 shadow-sm border-0 d-flex flex-column">
//       <img src={image} alt={title} className="card-img-top"
//       style={{objectFit:'contain',height:'200px'}} />
//       <div className="card-body"> 
// <h5 className="card-title">{title}</h5>

//       </div>
        

//     </div>
//   )



// }
// export default  ProjectCard;





import { Link } from 'react-router-dom';
import { ExternalLink, GitHub } from './icons';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, showDescription = false, showTechnologies = false }) => {
  const {
    title,
    category,
    image,
    link,
    githubLink,
    description,
    technologies = [],
  } = project;

  return (
    <div className="card  shadow-sm border-0 d-flex flex-column">
      {/* Image avec overlay */}
      <div className="position-relative">
        <img src={image} className="card-img-top" alt={title} />

        {/* Overlay avec icônes au survol */}
        <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-3">
        {link && (
  <Link 
    to={`/project/${project.id}`}
    className="btn btn-light rounded-circle shadow project-link"
  >
    <ExternalLink size={40} />
  </Link>
)}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light rounded-circle shadow project-link"
              title="Voir le code sur GitHub"
            >
              <GitHub size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="card-body p-4">
        <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
        <h5 className="card-title"><strong>{title}</strong></h5>

        {/* {showDescription && <p className="card-text">{description}</p>} */}

        {showTechnologies && technologies.length > 0 && (
          <ul className="list-unstyled d-flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
              <li key={index} className="badge bg-secondary">{tech}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
