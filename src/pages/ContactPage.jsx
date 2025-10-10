import React from "react";
import { Mail, Linkedin, Phone, MessageCircle } from "lucide-react";
import '../styles/ContactPage.css'

export default function ContactPage() {
  return (
    <section className="contact-section container">
      <h2 className="contact-title">
        <span className="contact-underline">Contact</span>
      </h2>
      <p className="contact-text  mx-auto mb-5">
        Vous êtes à la recherche d’une conceptrice-développeuse Java passionnée,
        rigoureuse et créative ?  <br />Je suis disponible pour discuter de vos besoins
        en développement logiciel, architecture d'applications ou évolution de vos projets existants. <br />
        N'hésitez pas à me contacter via le moyen de communication qui vous convient le mieux.
      </p>
      <div className="contact-grid ">
        <ContactCard
          icon={<Mail className="icon" />}
          label="E-mail"
          link="mailto:cristinavrincedev@outlook.fr"

        />
        <ContactCard
          icon={<Linkedin className="icon" />}
          label="LinkedIn"
          link="https://www.linkedin.com/in/cristina-vrinceanu-61a0402b6/"
        />
        <ContactCard
          icon={<MessageCircle className="icon" />}
          label="WhatsApp"
          link="https://wa.me/33631511815"
        />
        {/* <ContactCard
          icon={<Phone className="icon" />}
          label="Téléphone"
          link="tel:+33123456789"
        /> */}
      </div>
    </section>
  );
}

function ContactCard({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="icon-container">{icon}</div>
      <div className="contact-label">{label}</div>
    </a>
  );
}



























// import React, { useState } from "react";
// import "../styles/ContactPage.css";

// const Contact = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     // Ici tu pourrais envoyer les données à une API ou un service email
//   };

//   return (
//     <div className="contact-container ">
//       <h2 className="">Contactez-moi</h2>
//       {submitted ? (
//         <p>Merci pour votre message !</p>
//       ) : (
//         <form className="contact-form " onSubmit={handleSubmit}>
//           <label>
//             Nom :
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Email :
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <label>
//             Message :
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               required
//             />
//           </label>
//           <button type="submit">Envoyer</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default Contact;