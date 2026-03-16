import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './parcours.html',
  styleUrl: './parcours.css'
})
export class ParcoursComponent {
  constructor(public data: DataService) {}
}
