import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  stack: string;
  img: string;
  doc?: string;
  technologies: string[];
  skills: string[];
  description: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  org: string;
  desc: string;
}

export interface VeilleItem {
  num: string;
  icon: string;
  title: string;
  desc: string;
}

export interface SkillItem {
  name: string;
  desc: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {

  projects: Project[] = [
    {
      id: 1,
      title: 'RESTO',
      stack: 'PHP · MySQL · MVC',
      img: 'img/project-img-1.jpg',
      doc: 'pdf/Doc_Projet_Resto.pdf',
      technologies: ['PHP', 'MySQL', 'Architecture MVC'],
      skills: ['Conception web', 'Base de données', 'Analyse des besoins'],
      description: 'Application web de gestion de restaurant développée en PHP avec une architecture MVC et une base de données MySQL.'
    },
    {
      id: 2,
      title: 'Séminaire',
      stack: 'PHP · JSON · MVC',
      img: 'img/project-img-5.jpg',
      doc: 'pdf/Doc_Seminaire.pdf',
      technologies: ['PHP', 'JSON', 'Architecture MVC'],
      skills: ['Conception web', 'Gestion des données', 'Développement backend'],
      description: 'Plateforme de gestion de séminaires en PHP avec stockage JSON et architecture MVC.'
    },
    {
      id: 3,
      title: 'Congrès ANALIM',
      stack: 'PHP · MySQL · MVC',
      img: 'img/project-img-3.jpg',
      doc: 'pdf/Doc_Congres.pdf',
      technologies: ['PHP Objet', 'MySQL', 'Architecture MVC'],
      skills: ['Conception web', 'Base de données', 'POO'],
      description: 'Application de gestion de congrès en PHP orienté objet avec base de données MySQL.'
    },
    {
      id: 4,
      title: 'Jardinier',
      stack: 'PHP · Symfony',
      img: 'img/project-img-4.jpg',
      doc: 'pdf/Documentation_Technique_Jardinier.pdf',
      technologies: ['PHP', 'Symfony', 'Twig', 'MySQL'],
      skills: ['Framework Symfony', 'Conception web', 'Base de données'],
      description: 'Application web développée avec le framework Symfony pour la gestion de services de jardinage.'
    },
    {
      id: 5,
      title: 'Bibliothèque numérique',
      stack: 'Flutter · Mobile',
      img: 'img/project-img-2.jpg',
      doc: 'pdf/Documentation_Bibliotheque.pdf',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      skills: ['Développement mobile', 'UI/UX', 'Base de données'],
      description: 'Application mobile de gestion de bibliothèque développée avec Flutter et Dart.'
    },
    {
      id: 6,
      title: 'Mairie de Glandon',
      stack: 'WordPress · CMS',
      img: 'img/project-img-6.jpg',
      technologies: ['WordPress', 'PHP', 'CSS'],
      skills: ['CMS', 'Gestion de contenu', 'Formation utilisateurs'],
      description: 'Développement et mise à jour du site web de la mairie avec ajout de fonctionnalités personnalisées et création d\'une extension sur mesure.'
    },
    {
      id: 7,
      title: 'Stage HôtenB.',
      stack: 'React · JavaScript · SCSS',
      img: 'img/project-img-6.jpg',
      technologies: ['React', 'JavaScript', 'SCSS', 'GitHub'],
      skills: ['Développement frontend', 'Gestion de versions', 'Travail en équipe'],
      description: 'Développement d\'une application web de gestion de locations et réservations avec React, JavaScript et SCSS. Interfaces dynamiques et responsive, gestion du versioning via GitHub.'
    }
  ];

  formation: TimelineItem[] = [
    {
      date: '2025 — 2026',
      title: 'Licence 3 MIAGE',
      org: 'Université de Toulouse',
      desc: 'Formation combinant informatique et gestion des organisations. Ingénierie logicielle, gestion de projets agiles et conception d\'applications. Objectif : Master en alternance dès septembre 2026.'
    },
    {
      date: '2023 — 2025',
      title: 'BTS SIO — SLAM',
      org: 'Lycée Suzanne Valadon',
      desc: 'Développement d\'applications web et mobiles. PHP, Symfony, Flutter, Python et Java. Approche axée sur la conception et la gestion de projets.'
    },
    {
      date: '2022 — 2023',
      title: 'IUT Informatique',
      org: 'IUT du Limousin',
      desc: 'Algorithmique, programmation et systèmes d\'exploitation. Travail en équipe sur des projets concrets.'
    }
  ];

  experience: TimelineItem[] = [
    {
      date: 'Avr. — Août 2026',
      title: 'Stage Développeur Backend',
      org: 'Capgemini',
      desc: 'Analyse et proposition de solutions techniques adaptées aux besoins métiers. Développement et intégration de nouvelles fonctionnalités avec tests associés. Maintenance, correction d\'anomalies et rédaction de documentation technique.'
    },
    {
      date: 'Janv. — Fév. 2025',
      title: 'Stage Développeur Web',
      org: 'HôtenB.',
      desc: 'Développement d\'une application web de gestion de locations et réservations en React, JavaScript et SCSS. Gestion du versioning via GitHub, analyse des besoins et optimisation des performances.'
    },
    {
      date: 'Mai — Août 2024',
      title: 'Stage puis CDD Développeur Web',
      org: 'Mairie de Glandon',
      desc: 'Conception, gestion et développement du site WordPress avec création d\'une extension sur mesure. Accompagnement et support technique des utilisateurs, rédaction d\'un guide de prise en main du CMS.'
    }
  ];

  veille: VeilleItem[] = [
    { num: '01', icon: '⚡', title: 'OpenAI', desc: 'Abonné aux mises à jour d\'OpenAI pour suivre l\'évolution des modèles IA et les nouvelles API.' },
    { num: '02', icon: '🔔', title: 'Google Alerts', desc: 'Alertes sur les frameworks et tendances du développement pour rester informé instantanément.' },
    { num: '03', icon: '💼', title: 'LinkedIn', desc: 'Experts et entreprises tech suivis pour les discussions et tendances du secteur.' },
    { num: '04', icon: '🛡️', title: 'ANSSI', desc: 'Publications de l\'ANSSI pour les bonnes pratiques de cybersécurité et les alertes sur les vulnérabilités.' },
    { num: '05', icon: '⚖️', title: 'CNIL', desc: 'Actualités CNIL pour la conformité RGPD et la protection des données personnelles.' },
    { num: '06', icon: '📡', title: 'Flux RSS', desc: 'Centralisation des informations des blogs et sites technologiques pour suivre l\'actualité efficacement.' }
  ];

  skills: SkillItem[] = [
    { name: 'Analyser les besoins informatiques', desc: 'Identifier et analyser les besoins des utilisateurs afin de définir les solutions informatiques adaptées.' },
    { name: 'Réaliser des études et développements informatiques', desc: 'Réaliser des études techniques et mettre en œuvre des développements logiciels en fonction des besoins.' },
    { name: 'Développer une application en lien avec une base de données', desc: 'Concevoir et développer des applications interagissant avec des bases de données (MySQL, MongoDB, PostgreSQL) pour une gestion optimale.' },
    { name: 'Concevoir une application web', desc: 'Concevoir et développer des applications web performantes avec Java, PHP, Symfony, React, Angular, JS, HTML, CSS et API REST.' },
    { name: 'Gérer les versions de logiciels et leurs mises à jour', desc: 'Utiliser Git et GitHub pour gérer les versions, les branches, les merges et résoudre les conflits.' },
    { name: 'Maintenir à jour la documentation technique', desc: 'Rédiger et maintenir la documentation technique à jour pour les utilisateurs et les développeurs.' },
    { name: 'Collaborer avec les développeurs pour améliorer la qualité du logiciel', desc: 'Travailler en équipe via des méthodes Agiles (SCRUM), Jira et Git pour améliorer la qualité du code.' },
    { name: 'Respecter les normes de sécurité informatique', desc: 'Appliquer les meilleures pratiques de sécurité pour garantir la confidentialité et l\'intégrité des données.' },
    { name: 'Concevoir et maintenir un système de cybersécurité', desc: 'Concevoir des architectures robustes et mettre en place des mécanismes de protection des systèmes.' },
    { name: 'Appliquer des méthodes d\'analyse pour la résolution de problèmes', desc: 'Appliquer des méthodes d\'analyse appropriées à la résolution de problèmes issus d\'un cahier des charges.' },
    { name: 'Synthétiser les données d\'exécution', desc: 'Analyser les données produites par l\'exécution d\'un programme (logs, résultats, performances) pour en tirer des conclusions.' }
  ];
}
