import React, { useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import projects from '../data/projects.json';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export const PortfolioPage = () => {
  // 1. L’état qui contient la catégorie active
  const [activeCategory, setActiveCategory] = useState('Tous');

  // 2. Fonction qui sera appelée quand on clique sur un bouton dans CategoryFilter
  const onCategoryChange = (category) => {
    setActiveCategory(category);
    console.log(category);

  };

  const filteredProjects = activeCategory === 'Tous' ? projects
    : projects.filter(project => project.category === activeCategory);



  return (
    <>
      {/* En-tête de la page */}
      <section className='page-header py-5  text-center text-light'>
        <div className='container mt-5'>
          <h1 className='display-4 fw-bold pt-5'>Mon portfolio</h1>
          <p className='lead'>Une vitrine de mes projets et réalisations récents</p>
        </div>
      </section>

      {/* Section avec les filtres de catégories */}
      {/* //Cette section affiche les boutons de filtres pour les categories de projets */}
      <section className="py-5 text-info ">
        <div className="container ">


          <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">

            {/* // CategoryFilter est un composant qui affiche les categories de projects */}
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={onCategoryChange}
              className="text-white"
            />
          </div>

          <ul className="row g-4 mt-4 list-unstyled ">
            {filteredProjects.map(project => (
              <li key={project.id} className="col-md-6 col-lg-4 text-white ">
                <ProjectCard
                  project={project}
                  showDescription={false}
                  showTechnologies={true}

                />
              </li>
            ))
            }
          </ul>
        </div>
      </section>


      {/* <section className='py-5  text-white text-center bg-cta' >
        <div className='container'>
          <h2 className='mb-4'>Un projet en tête ?</h2>
          <p className='mb-5'> Concepteur-développeur Java disponible pour vos missions freelance. Travaillons ensemble pour concrétiser vos idées avec des solutions performantes et robustes.
</p>
          <Link to='/contact' className='btn btn-light'> Discutons de votre projet </Link>
        </div>
      </section> */}
    </>
  );
};
