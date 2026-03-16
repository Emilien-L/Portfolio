import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  stackCategories = [
    {
      label: 'Dev & Web',
      tags: ['PHP', 'Symfony', 'React', 'Angular', 'Flutter', 'Java', 'Python', 'JS', 'HTML', 'CSS', 'API REST', 'WordPress']
    },
    {
      label: 'Data',
      tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'JSON']
    },
    {
      label: 'Outils & Méthodes',
      tags: ['Git', 'Docker', 'Agile', 'SCRUM', 'Jira', 'UML']
    }
  ];
}
