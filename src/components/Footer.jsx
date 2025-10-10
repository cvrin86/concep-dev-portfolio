import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, GitHub, Mail, Phone } from './icons';
import { navLinks } from './navigationLinks';
import { renderLinks } from './renderLinks';
import { scrollToSection } from '../utils/functions';

export const Footer = () => {

    const currentYear = new Date().getFullYear();


    return (
        <>

            <footer className='footer  py-5 text-white  '>
                <div className='container'>

                    <div className='row gy-4  '>
                        <div className='col-lg-4 col-md-6 footer-container'>
                                      <Link to="/" className="navbar-brand d-flex align-items-center fw-bold fs-4">
                              <img 
                                src="/logo_portfolio.png" 
                                alt="logo portfolio" 
                                className = "logo me-4"
                               
                              />
                              <h4 className=''>
                                <strong style={{color: '#7af8b9'}}>Cristina V. </strong>
                              </h4>
                              
                                              
                            </Link>
                             
                          
                            <p className='mt-4'>
                                Conceptrice && 
                                <br />Devéloppeuse d'Applications
                            </p>

                            <div className='  d-flex gap-3 mt-4'>
                                <a href="https://github.com/cvrin86" target="_blank" rel="noopener noreferrer" >
                                    <GitHub className="me-2 " width={24} height={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/cvranceanu/" target="_blank" rel="noopener noreferrer" >
                                    <Linkedin className="me-2 " width={24} height={24} />
                                </a>
                              

                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6'>
                            <h5 className=''>Liens Rapides</h5>
                            <hr className="w-25" />
                            <ul className='list-unstyled'>
                                {renderLinks(navLinks)}

                            </ul>


                        </div>

                        <div className='col-lg-3 col-md-6'>

                            <h5 className=''>Services</h5>
                            <hr  className="w-25"/>

                            <ul className='list-unstyled'>
                                {[

                                    'Développement web',
                                    'Design UI/UX',
                                    'Conception Merise & UML ',
                                    'Solutions E-commerce',
                                    'Optimisation SEO',
                                ].map((service, index) => (
                                    <li key={index} className='mb-3'>
                                        {service}
                                    </li>
                                ))}

                            </ul>
                        </div>

                        <div className='col-lg-3 col-md-6'>
                            <h5 className=''>Contact</h5>
                            <hr  className="w-25"/>
                            <ul className='list-unstyled'>
                                <li className="mb-3  d-flex align-items-center">
                                    <Mail  />
                                    <a href="mailto:cristinavrincedev@outlook.fr" target="_blank" rel="noopener noreferrer" style={{marginLeft:'7px'}}>cristinavrincedev@outlook.fr</a>
                                </li>
                                 {/* <li className="mb-3  d-flex align-items-center">
                                    <Linkedin className="me-2 " width={24} height={24} />
                                    <a href="https://www.linkedin.com/in/cvranceanu/" target="_blank" rel="noopener noreferrer" style={{marginLeft:'7px'}}>https://www.linkedin.com/in/cvranceanu/</a>
                                </li> */}
                                <li className="mb-3  d-flex align-items-center">
                                    <GitHub  />
                                    <a href="https://github.com/cvrin86" target="_blank" rel="noopener noreferrer" style={{marginLeft:'7px'}}>https://github.com/cvrin86</a>
                                </li>
                                {/* <li className="mb-3 d-flex align-items-center">
                                    <Phone />
                                    <a href="tel:+33 1 23 45 67 89"> +33 1 23 45 67 89</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <hr className='my-4' />

                    <div className='row'>
                        <div className='col text-center'>
                            <p className='mb-0'>&copy; {currentYear} Cristina V. Tous droits réservés.</p>
                    <nav className='links-pages' aria-label='footer navigation'>
                    
                        <Link to='/legal-notice' onClick={() => scrollToSection('top')}>Mentions légales</Link> {' '}
                        {/* <Link to='/policy-privacy' onClick={() => scrollToSection('top')}>Politique de confidentialité</Link> */}
                    </nav>
                </div>
                        </div>
                    </div>
                


            </footer>

        </>
    )
}
