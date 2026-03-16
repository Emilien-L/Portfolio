import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService, SkillItem } from '../../core/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  openIndex: number | null = null;

  constructor(public data: DataService) {}

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
