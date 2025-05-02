document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('projectModal');

  const cards = document.querySelectorAll('.work__card');

  const projects = {
    1: {
      title: 'Resto',
      description: 'Le projet Resto est une application web conçue pour faciliter la gestion des restaurants.',
      docs: '<p><a href="assets/pdf/Doc_Projet_Resto.pdf" target="_blank">Consulter la documentation</a></p>',
      technologies: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      ],
      skills: [
        "Concevoir une application web",
        "Développer une application en lien avec une base de données",
        "Maintenir à jour la documentation technique et les manuels d'utilisation",
        "Concevoir et maintenir un système de cybersécurité"
      ]
    },
    2: {
      title: 'Seminaire',
      description: 'Site web développé avec PHP permettant de choisir des conférences, gérer des utilisateurs, ...',
      docs: '<p><a href="assets/pdf/Doc_Seminaire.pdf" target="_blank">Consulter la documentation</a>.</p>',
      technologies: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'JSON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-plain.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ],
      skills: [
        "Analyser les besoins informatiques",
        "Concevoir une application web",
        "Gérer les versions de logiciels et leurs mises à jour",
        "Respecter les normes de sécurité informatique dans le développement",
        "Concevoir et maintenir un système de cybersécurité"
      ]
    },
    3: {
      title: 'Congrès ANALIM',
      description: 'Conception et mise en œuvre d’un système de gestion de factures pour les participants d’un congrès.',
      docs: '<p><a href="assets/pdf/Doc_Congres.pdf" target="_blank">Consulter la documentation</a></p>',
      technologies: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ],
      skills: [
        "Développer une application en lien avec une base de données",
        "Concevoir une application web",
        "Réaliser des études et développements informatiques",
        "Gérer les versions de logiciels et leurs mises à jour",
        "Collaborer avec les développeurs pour améliorer la qualité du logiciel",
        "Concevoir et maintenir un système de cybersécurité"
      ]
    },
    4: {
      title: 'Jardinier',
      description: 'Application web permettant de créer des devis pour un jardinier avec le framework Symfony.',
      docs: '<p><a href="assets/pdf/Documentation_Technique_Jardinier.pdf" target="_blank">Consulter la documentation</a></p>',
      technologies: [
        { name: 'Symfony', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ],
      skills: [
        "Concevoir une application web",
        "Développer une application en lien avec une base de données",
        "Gérer les versions de logiciels et leurs mises à jour",
        "Respecter les normes de sécurité informatique dans le développement",
        "Concevoir et maintenir un système de cybersécurité"
      ]
    },
    5: {
      title: 'Bibliothèque numérique',
      description: 'Application mobile réalisée avec Flutter et Dart sur Android Studio.',
      docs: '<p><a href="assets/pdf/Documentation_Bibliotheque.pdf" target="_blank">Consulter la documentation</a></p>',
      technologies: [
        { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ],
      skills: [
        "Réaliser des études et développements informatiques",
        "Concevoir et maintenir un système de cybersécurité",
        "Analyser les besoins informatiques"
      ]
    },
    6: {
      title: 'Stage Mairie de Glandon',
      description: 'Mise en place du site avec WordPress, développement de quelques extensions en PHP.',
      docs: '<p><a href="https://mairie-glandon.fr" target="_blank">Consulter le site de la Mairie</a>.</p>',
      technologies: [
        { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
      ],
      skills: [
        "Analyser les besoins informatiques",
        "Réaliser des études et développements informatiques",
        "Respecter les normes de sécurité informatique dans le développement",
        "Concevoir et maintenir un système de cybersécurité",
        "Gérer les versions de logiciels et leurs mises à jour",]
    },
    7: {
      title: 'Stage HôtenB.',
      description: 'Développement d\'une application web de réservation avec React, MongoDB et une interface dynamique.',
      docs: '<p><a href="assets/pdf/Documentation_Stage_HotenB.pdf" target="_blank">Consulter la documentation</a></p>',
      technologies: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'TailWind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
      ],
      skills: [
        "Concevoir une application web",
        "Collaborer avec les développeurs pour améliorer la qualité du logiciel",
        "Concevoir et maintenir un système de cybersécurité",
        "Réaliser des études et développements informatiques",
        "Analyser les besoins informatiques",
        "Respecter les normes de sécurité informatique dans le développement"
      ]
    }
  };
  

  cards.forEach(card => {
    card.addEventListener('click', function () {
      const projectId = this.dataset.id;
      const project = projects[projectId];
  
      if (project) {
        // Mise à jour du modal avec les informations du projet
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalDocs').innerHTML = project.docs;
  
        // Ajout des icônes SVG pour les technologies
        const techList = document.getElementById('modalTechnologies');
        techList.innerHTML = ''; // Réinitialise la liste
        if (project.technologies) {
          project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.classList.add('tech-item');
            li.setAttribute('data-name', tech.name);
            li.innerHTML = `<img src="${tech.icon}" alt="${tech.name}">`;
            techList.appendChild(li);
          });
        }
  
        // Ajout des compétences liées
        const skillList = document.getElementById('modalSkills');
        skillList.innerHTML = ''; // Réinitialise la liste
        if (project.skills) {
          project.skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="#skills" class="skill-link">${skill}</a>`;
            skillList.appendChild(li);
          });
        }
  
        // Affichage du modal
        modal.classList.add('show');
        modal.style.display = 'flex';

        // Fermer la modal au clic sur un lien de compétence
        document.querySelectorAll('.skill-link').forEach(link => {
          link.addEventListener('click', function () {
            modal.classList.remove('show');
            setTimeout(() => {
              modal.style.display = 'none';
            }, 400); // Fermeture avec délai pour l'animation
          });
        });
      }
    });
  });
  

  // Fermer le modal lorsqu'on clique sur la croix
  document.getElementById('closeModal').addEventListener('click', function () {
    modal.classList.remove('show');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 400); // Temps correspondant à l'animation CSS
  });

  // Fermer la modal avec la touche Échap
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 400);
    }
  });

  // Fermer la modal lorsqu'on clique en dehors de la modal
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => {
        modal.style.display = 'none';
      }, 400);
    }
  });
});


  // Initialiser EmailJS avec ton User ID (remplace par le vrai User ID)
  emailjs.init("KxAdQnqPCwPCmS0CA");
      
  // Lorsque le formulaire est soumis
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Envoie le formulaire via EmailJS
    emailjs.sendForm('service_ec6q7sc', 'template_z0xmkse', this)
      .then(function(response) {
        alert('Message envoyé avec succès !');
        // Tu peux aussi vider le formulaire si nécessaire
        document.getElementById('contact-form').reset();
      }, function(error) {
        alert('Une erreur est survenue. Veuillez réessayer.');
      });
  });