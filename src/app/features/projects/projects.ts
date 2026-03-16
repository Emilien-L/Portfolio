import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, Project } from '../../core/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  selectedProject: Project | null = null;

  constructor(public data: DataService) {}

  openModal(project: Project) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}
