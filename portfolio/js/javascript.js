document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded');
  
    // Sélectionner toutes les cards de travail
    const cards = document.querySelectorAll('.work__card');
    console.log(cards);
  
    // Ajouter un événement au clic pour chaque card
    cards.forEach(card => {
      card.addEventListener('click', function() {
        const projectId = this.dataset.id; // ID du projet à partir de l'attribut data-id
        console.log(`Card clicked with project ID: ${projectId}`);
  
        // Exemple de données associées à chaque projet
        const projects = {
          1: {
            title: 'Ad',
            description: 'This is a short description about the Ad project.',
            code: 'console.log("Ad Project Code");',
            docs: '<p>This project uses Symfony and PHP.</p>'
          },
          2: {
            title: 'Ad pute',
            description: 'This is a short description about the Ad pute project.',
            code: 'console.log("Ad pute Project Code");',
            docs: '<p>Uses Flutter and Dart for mobile app development.</p>'
          },
          3: {
            title: 'Ad salope',
            description: 'This is a short description about the Ad salope project.',
            code: 'console.log("Ad salope Project Code");',
            docs: '<p>This project uses Java Spring Boot and Angular.</p>'
          },
          4: {
            title: 'Ad chienne',
            description: 'This is a short description about the Ad chienne project.',
            code: 'console.log("Ad chienne Project Code");',
            docs: '<p>Built with React and Node.js.</p>'
          },
          5: {
            title: 'Ad enculé',
            description: 'This is a short description about the Ad enculé project.',
            code: 'console.log("Ad enculé Project Code");',
            docs: '<p>Frontend built with Vue.js and backend in Laravel.</p>'
          },
          6: {
            title: 'Ad connard',
            description: 'This is a short description about the Ad connard project.',
            code: 'console.log("Ad connard Project Code");',
            docs: '<p>Uses Django and PostgreSQL for full-stack development.</p>'
          },
        };
  
        const project = projects[projectId];
        console.log(project);
  
        if (project) {
          // Mise à jour du modal avec les informations du projet
          document.getElementById('modalTitle').textContent = project.title;
          document.getElementById('modalDescription').textContent = project.description;
          document.getElementById('modalCode').textContent = project.code;
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