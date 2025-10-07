import React, { useState, useEffect } from 'react'; // Import de React et des hooks useState et useEffect
import { NavLink, Link } from 'react-router-dom'; // Import des composants de navigation pour gérer les liens internes
import { MenuIcon, CloseIcon } from './icons'; // Import des icônes SVG pour menu et fermeture
import { navLinks } from './navigationLinks';
import { renderLinks } from './renderLinks';


export const Header = () => {
  // State pour savoir si la page est scrollée au-delà de 50px
  const [scrolled, setScrolled] = useState(false);
  // State pour gérer l'ouverture ou fermeture du menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Hook d'effet pour écouter le scroll de la fenêtre et mettre à jour "scrolled"
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50); // true si scrollY > 50px
    window.addEventListener('scroll', onScroll); // On ajoute un listener sur l'événement scroll
    return () => window.removeEventListener('scroll', onScroll); // Cleanup : on enlève le listener quand le composant est démonté
  }, []); // [] signifie que cet effet se lance une seule fois au montage

  // Fonction qui ferme le menu (utile quand on clique sur un lien dans le menu)
  const handleLinkClick = () => setMenuOpen(false);



  return (
    <header className=' header '>
      {/* Navbar fixe en haut, avec changement de style selon scroll */}
      <nav
        className={`navbar navbar-expand-lg fixed-top  transition-all bg-green
      }`}
      >
        <div className="container">
          {/* Logo / marque, lien vers la page d'accueil */}
          <Link to="/" className="navbar-brand d-flex align-items-center fw-bold fs-4">
  <img 
    src="/logo_portfolio.png" 
    alt="logo portfolio" 
    className = "logo me-4"
   
  />
  <p className=''>
    <strong style={{color: '#7af8b9'}}>Cristina V.</strong>
  </p>
  
                  
</Link>


          {/* Bouton pour ouvrir/fermer le menu sur petit écran */}
          <button
            className="navbar-toggler border-0"
            type="button"
            aria-controls="navbarSupportedContent" // ID de la div du menu pour l’accessibilité
            aria-expanded={menuOpen} // Attribut accessible pour indiquer si le menu est ouvert ou non
            aria-label="Toggle navigation" // Label pour lecteurs d’écran
            onClick={() => setMenuOpen(!menuOpen)} // Toggle l’état d’ouverture du menu au clic
          >
            {/* Affiche l’icône fermer si menu ouvert, sinon icône menu */}
            {menuOpen ? <CloseIcon  className="text-light"/> : <MenuIcon  className="text-light fw-bold" />}
          </button>

          {/* Menu déroulant : affiché si menuOpen est true */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            
          >
            {/* Liste des liens de navigation */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
         
         {renderLinks(navLinks)}
            </ul>

            {/* Bouton à droite "Me contacter" */}
            {/* <div className="d-flex align-items-center mt-3 mt-lg-0">
              <Link
                to="/contact"
                className="btn btn-primary ms-lg-3"
                onClick={handleLinkClick} // Ferme le menu au clic sur ce bouton aussi
              >
                Me contacter
              </Link>
            </div> */}
          </div>
        </div>
      
      </nav>
    
    </header>
  );
};




// import { useState, useEffect } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleToggle = () => setMenuOpen(!menuOpen);
//   const closeMenu = () => setMenuOpen(false);

//   const navLinks = [
//     { path: '/', label: 'Accueil' },
//     { path: '/about', label: 'À propos' },
//     { path: '/services', label: 'Services' },
//     { path: '/portfolio', label: 'Portfolio' },
//     { path: '/contact', label: 'Contact' },
//   ];

//   const renderLinks = () =>
//     navLinks.map(({ path, label }) => (
//       <li className="nav-item" key={path}>
//         <NavLink to={path} className="nav-link mx-2" onClick={closeMenu}>
//           {label}
//         </NavLink>
//       </li>
//     ));

//   return (
//     <nav
//       className={`navbar navbar-expand-lg fixed-top py-3 transition-all ${
//         scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
//       }`}
//     >
//       <div className="container">
//         <Link to="/" className="navbar-brand fw-bold fs-4">
//           <span className="text-primary">Dev</span>Name
//         </Link>

//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           onClick={handleToggle}
//           aria-controls="navbarNav"
//           aria-expanded={menuOpen}
//           aria-label="Toggle navigation"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{renderLinks()}</ul>

//           <div className="d-flex align-items-center mt-3 mt-lg-0">
//             <Link to="/contact" className="btn btn-primary ms-lg-3" onClick={closeMenu}>
//               Me contacter
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;












