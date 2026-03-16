import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-veille',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veille.html',
  styleUrl: './veille.css'
})
export class VeilleComponent {
  constructor(public data: DataService) {}
}
