import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects.json";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <div>Projet non trouvé</div>;

  return (
    <div className="container py-5 text-light">

      {/* 🔙 Bouton retour */}
      <button 
        onClick={() => navigate("/portfolio")}
        className="btn btn-dark mb-4"
      >
        ← Retour aux projets
      </button>

      {/* 🧠 HEADER */}
      <h1 className="text-center text-white my-4">{project.title}</h1>
      <p className="text-center text-muted">{project.category}</p>

   
     {/* 🖼️ IMAGE PRINCIPALE */}
<div className="text-center my-4">
  <img 
    src={project.images?.[0] || project.image}
    alt={project.title}
    className="img-fluid rounded shadow"
    style={{ maxWidth: "700px" }}
  />
</div>

{/* 📸 GALERIE */}
{project.images && project.images.length > 1 && (
  <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
    {project.images.slice(1).map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`screenshot-${index}`}
        className="rounded shadow"
        style={{ width: "200px", cursor: "pointer" }}
      />
    ))}
  </div>
)}

      {/* 📝 DESCRIPTION */}
      <section className="mb-5">
        <h3 className="text-warning">Présentation</h3>
        <p>{project.description}</p>
      </section>

      {/* ⚙️ STACK */}
      <section className="mb-5">
        <h3 className="text-warning">Technologies utilisées</h3>
        <ul>
          {project.technologies.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </section>

      {/* 🔗 LIENS */}
      <section className="mb-5">
        <h3 className="text-warning">Liens</h3>

        <a 
          href={project.link} 
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-light me-3"
        >
          🌐 Voir le site
        </a>

        <a 
          href={project.githubLink} 
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-warning"
        >
          💻 Voir le code
        </a>
      </section>

    </div>
  );
};

export default ProjectDetail;