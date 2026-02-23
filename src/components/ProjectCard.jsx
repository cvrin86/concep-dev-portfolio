import { Link } from 'react-router-dom';
import { ExternalLink, GitHub } from './icons';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, showDescription = false, showTechnologies = false }) => {
  
  const {
    id,
    title,
    category,
    image,
    link,
    githubLink,
    description,
    technologies = [],
  } = project;

  return (
    <div className="card shadow-sm border-0 d-flex flex-column">

      {/* Image avec overlay */}
      <div className="position-relative">
        <img src={image} className="card-img-top" alt={title} />

        {/* Overlay avec icônes */}
        <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center gap-3">

          {/* 🔗 Voir détails (page interne) */}
          {link && (
            <Link 
              to={`/project/${id}`}
              onClick={(e) => e.stopPropagation()}
              className="btn btn-light rounded-circle shadow project-link"
              title="Voir les détails"
            >
              <ExternalLink size={40} />
            </Link>
          )}

          {/* 🐙 GitHub */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
        <h5 className="card-title">
          <strong>{title}</strong>
        </h5>

        {/* Description optionnelle */}
        {showDescription && (
          <p className="card-text">{description}</p>
        )}

        {/* Technologies */}
        {showTechnologies && technologies.length > 0 && (
          <ul className="list-unstyled d-flex flex-wrap gap-2 mt-3">
            {technologies.map((tech, index) => (
              <li key={index} className="badge bg-secondary">
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;