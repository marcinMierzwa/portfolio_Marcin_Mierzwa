import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { RouterLink } from '@angular/router';
import { MediaComponent } from "../media/media.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SliderComponent, RouterLink, MediaComponent]
})
export class HomeComponent {

}
