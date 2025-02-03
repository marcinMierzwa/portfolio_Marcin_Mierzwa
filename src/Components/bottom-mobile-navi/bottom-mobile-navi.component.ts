import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bottom-mobile-navi',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './bottom-mobile-navi.component.html',
  styleUrl: './bottom-mobile-navi.component.css'
})
export class BottomMobileNaviComponent {}
