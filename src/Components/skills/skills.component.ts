import { Component, inject } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  data:DataService = inject(DataService)

  skills$ = this.data.getSkills

}
