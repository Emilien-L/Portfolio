document.addEventListener('DOMContentLoaded', () => {

  // Sélectionner toutes les cards de travail
  const cards = document.querySelectorAll('.work__card');

  // Ajouter un événement au clic pour chaque card
  cards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = this.dataset.id; // ID du projet à partir de l'attribut data-id
      console.log(`Card clicked with project ID: ${projectId}`);

      const projects = {
        1: {
          title: 'Resto',
          description: 'A venir',
          docs: '<p>Pas encore de doc</p>'
        },
        2: {
          title: 'Seminaire',
          description: 'Site web développé avec PHP permettant de choisir des conférénces, gérer des utilisateurs, ...',
          docs: '<p><a href="assets/pdf/Doc_Seminaire.pdf" target="_blank">Consulter la documentation PDF</a>.</p>'
        },
        3: {
          title: 'Congrès ANALIM',
          description: 'Site web développé avec PHP permettant de gérer des factures',
          docs: '<p>Pas encore de doc disponible</p>'
        },
        4: {
          title: 'Jardinier',
          description: 'Site web développé avec Symfony et PHP.',
          docs: '<p>Pas encore de doc disponible.</p>'
        },
        5: {
          title: 'Bibliothèque numérique',
          description: 'Application mobile réalisé en avec Flutter et Dart sur Android Studio.',
          docs: '<p>Pas encore de doc disponible.</p>'
        },
        6: {
          title: 'Mairie de Glandon',
          description: 'Mise en place du site avec WordPress, développement de quelques extensions en PHP',
          docs: '<p><a href="https://mairie-glandon.fr" target="_blank">Consulter le site de la Mairie</a>.</p>'
        }
      };

      const project = projects[projectId];
      console.log(project);

      if (project) {
        // Mise à jour du modal avec les informations du projet
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalDocs').innerHTML = project.docs;

        // Afficher le modal
        document.getElementById('projectModal').style.display = 'flex';
      } else {
        console.error('No project found for this ID');
      }
    });
  });

  // Fermer le modal lorsqu'on clique sur la croix
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('projectModal').style.display = 'none';
  });

  // Fermer le modal avec la touche Échap
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      document.getElementById('projectModal').style.display = 'none';
    }
  });

  // Fermer la modal lorsqu'on clique en dehors de la modal
  const modal = document.getElementById('projectModal');
  modal.addEventListener('click', function(event) {
    // Si l'utilisateur clique sur l'arrière-plan (et non sur le contenu de la modal), on ferme la modal
    if (event.target === modal) {
      modal.style.display = 'none';
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