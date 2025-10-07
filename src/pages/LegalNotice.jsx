import React from 'react';
import '../styles/LegalNotice.css'

const LegalNotice = () => {
  const lastUpdated = '25 septembre 2025';

  return (
    <main className="legal-page container my-5">
      <header className="legal-header text-center py-4 bg-transparent">
        <h1>Mentions légales</h1>
        <p className="text-light small">Dernière mise à jour : {lastUpdated}</p>
      </header>

      <section className="card ">
        <p>
          Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités.
        </p>
        <p>
          Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet <strong>www.clemencebalmand.fr</strong> sont :
        </p>
      </section>

      <section className="card ">
        <h2 >Éditeur du Site</h2>
        <p>
          <strong>Nom :</strong> Cristina V
          <br />
          <strong>Email :</strong> <a href="mailto:cristinavdev@outlook.com">cristinavdev@outlook.com</a>
          <br />
          <strong>Site Web :</strong> <a href="https://www.cristinav.fr">https://www.cristinav.fr</a>
        </p>
      </section>

      <section className="card">
        <h2>Hébergement</h2>
        <p>
          <strong>Hébergeur :</strong> OVH
          <br />
          <strong>Adresse :</strong> 2 rue Kellermann 59100 Roubaix 1007
          <br />
          <strong>Site Web :</strong> <a href="https://www.ovhcloud.com/fr/" target="_blank" rel="noopener noreferrer">https://www.ovhcloud.com/fr/</a>
        </p>
      </section>

      <section className="card ">
        <h2>Développement</h2>
        <p>Cristina V</p>
      </section>

      <section className="card ">
        <h2>Conditions d’utilisation</h2>
        <p>
          Ce site (www.cristinav.fr) est proposé en différents langages web (HTML, HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable.
        </p>
        <p>
          Clémence BALMAND met en œuvre tous les moyens dont elle dispose, pour assurer une information fiable et une mise à jour fiable de son site internet. Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations et signaler toutes modifications utiles.
        </p>
      </section>

      <section className="card ">
        <h2>Cookies</h2>
        <p>
          Le site www.cristinav.fr peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d’affichage. Certaines parties de ce site ne peuvent être fonctionnelles sans l’acceptation de cookies.
        </p>
      </section>

      <section className="card ">
        <h2>Liens hypertextes</h2>
        <p>
          Le site www.cristinav.fr peut offrir des liens vers d’autres sites internet. Cristina V ne dispose d’aucun moyen pour contrôler ces sites et ne peut être tenue responsable de leur contenu ou de leur disponibilité.
        </p>
        <p>
          La mise en place d’un hyperlien vers ce site nécessite une autorisation préalable et expresse de Cristina V.
        </p>
      </section>

      <section className="card ">
        <h2>Services fournis</h2>
        <p>
          L’ensemble des activités de Cristina V ainsi que ses informations sont présentées sur son site www.cristinav.fr. Ces informations sont données à titre indicatif et sont susceptibles de changer ou d’évoluer sans préavis.
        </p>
      </section>

      <section className="card ">
        <h2>Limitation contractuelles sur les données</h2>
        <p>
          Les informations contenues sur ce site sont mises à jour régulièrement mais peuvent contenir des inexactitudes ou des omissions. Merci de signaler toute erreur par courriel à cristinavdev@outlook.com.
        </p>
        <p>
          Tout téléchargement se fait aux risques et périls de l’utilisateur et sous sa seule responsabilité.
        </p>
      </section>

      <section className="card ">
        <h2>Propriété intellectuelle</h2>
        <p>
          Tout le contenu du site www.cristinav.fr (textes, images, vidéos, sons, logos, gifs, icônes, etc.) est la propriété exclusive de Cristina V sauf mention contraire. Toute reproduction, distribution, modification ou adaptation est strictement interdite sans accord écrit préalable.
        </p>
      </section>

      <section className="card ">
        <h2>Déclaration à la CNIL</h2>
        <p>
          Conformément à la loi Informatique et Libertés (1978 modifiée), ce site ne récolte aucune donnée personnelle.
        </p>
      </section>

      {/* <section className="card ">
        <h2>Données personnelles</h2>
        <p>
          De manière générale, vous n’êtes pas tenu de communiquer vos données personnelles lorsque vous visitez le site. Cependant, certains formulaires (rubrique « contact ») peuvent nécessiter la communication d’un nom et d’un email, utilisés uniquement pour vous recontacter.
        </p>
        <p>
          Le site peut aussi collecter automatiquement certaines informations techniques (IP, type de navigateur, temps d’accès, etc.) utilisées à des fins de statistiques internes.
        </p>
      </section> */}

      <section className="card ">
        <h2>Litiges</h2>
        <p>
          Les présentes conditions du site www.cristinav.fr sont régies par le droit français. En cas de litige, les tribunaux dont dépend Cristina V seront compétents. La langue de référence est le français.
        </p>
      </section>

     
    </main>
  );
};

export default LegalNotice;
