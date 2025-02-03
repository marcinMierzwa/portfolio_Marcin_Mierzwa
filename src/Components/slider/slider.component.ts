import { Component, inject } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent {
  data: DataService = inject(DataService);
  work$ = this.data.getWork;
}
